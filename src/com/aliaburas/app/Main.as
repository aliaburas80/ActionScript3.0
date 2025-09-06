package com.aliaburas.app {
    import flash.display.Sprite;
    import flash.display.Shape;
    import flash.display.SimpleButton;
    import flash.display.StageAlign;
    import flash.display.StageScaleMode;
    import flash.events.Event;
    import flash.events.KeyboardEvent;
    import flash.events.MouseEvent;
    import flash.text.TextField;
    import flash.text.TextFieldAutoSize;
    import flash.text.TextFormat;
    import flash.text.AntiAliasType;
    import flash.ui.Keyboard;
    import com.aliaburas.app.utils.StageLayout;
    import com.aliaburas.app.utils.Random;
    import com.greensock.easing.*;
    import com.greensock.events.*;
    import com.greensock.*;

    /**

       /Users/aliaburas/Documents/AS3.0/refresh/day1/src/com/aliaburas/app/Main.as, Line 1, Column 1
       5001: The name of package 'com.aliaburas.app' does not reflect the location of this file.
       Please change the package definition's name inside this file, or move the file.
       /Users/aliaburas/Documents/AS3.0/refresh/day1/src/com/aliaburas/app/Main.as

     * Document-class version of the interactive starter (pages + buttons + keyboard + resize).
     * Why: separates logic from timeline, enabling version control and reuse.
     */
    public class Main extends Sprite {
        // ---- Config --------------------------------------------------------------------------
        private static const BTN_W:Number = 120;
        private static const BTN_H:Number = 40;
        private static const PADDING:Number = 16;
        private static const PAGE_W:Number = 720;
        private static const PAGE_H:Number = 400;
        private static const BG_COLOR:uint = 0x0E0E10;
        private static const BOX_H:uint = 100;
        private static const BOX_W:uint = 100;
        // ---- State ---------------------------------------------------------------------------
        private var pages:Array = [];
        private var currentIndex:int = 0;
        private var tween:TweenLite;
        // ---- UI ------------------------------------------------------------------------------
        private var btnPrev:SimpleButton;
        private var btnNext:SimpleButton;
        private var btnHome:SimpleButton;
        private var chrome:Sprite;
        private var backdrop:Shape;

        private var shapeMaker:ShapeMaker;
        private var random:Random = new Random();

        public function Main() {
            // Ensure stage is available before accessing it
            if (stage)
                onAddedToStage();
            else
                addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
        }

        private function onAddedToStage(e:Event = null):void {
            if (e)
                removeEventListener(Event.ADDED_TO_STAGE, onAddedToStage);

            stage.align = StageAlign.TOP_LEFT;
            stage.scaleMode = StageScaleMode.NO_SCALE; // keep layout crisp
            stage.focus = this; // ensure key events fire immediately
            //
            shapeMaker = new ShapeMaker(BOX_W, BOX_H);
            drawShape(random.color24());
            addShapeToStage(shapeMaker);
            addClickEvent(shapeMaker);
        }

        private function drawShape(color:uint):void {
            shapeMaker.build(color);
        }

        private function addShapeToStage(obj:Sprite):void {
            addChild(obj);
            var position:Object = random.randomePosition(stage, BOX_W, BOX_H);
            obj.x = position.x;
            obj.y = position.y;
        }

        private function addClickEvent(obj:Sprite):void {
            obj.addEventListener(MouseEvent.CLICK, changeColorHandler);
        }

        private function changeColorHandler(e:MouseEvent):void {
            e.stopPropagation();
            e.currentTarget.build(random.color24())
            addMoveTransition(e.currentTarget as Sprite);
        }

        private function addMoveTransition(obj:Sprite):void {
            trace('obj-> ',obj)
            tween = new TweenLite(obj, 0.5, {x: random.randomePosition(stage, BOX_W, BOX_H).x,
                    y: random.randomePosition(stage, BOX_W, BOX_H).y, ease: Back.easeOut});

        }


        // ---- Build ---------------------------------------------------------------------------
        // private function buildBackdrop():void {
        //     backdrop = new Shape();
        //     addChildAt(backdrop, 0);
        //     redrawBackdrop();
        // }

        // private function redrawBackdrop():void {
        //     backdrop.graphics.clear();
        //     backdrop.graphics.beginFill(BG_COLOR);
        //     backdrop.graphics.drawRect(0, 0, stage.stageWidth, stage.stageHeight);
        //     backdrop.graphics.endFill();
        // }

        // private function buildPages():void {
        //     var titles:Array = ["Home", "Gallery", "About"];
        //     var colors:Array = [0x2E7D32, 0x1565C0, 0x6A1B9A];

        //     for (var i:int = 0; i < titles.length; i++) {
        //         var pg:Sprite = createPage(titles[i], colors[i], i);
        //         pg.visible = false;
        //         pages.push(pg);
        //         addChild(pg);
        //     }
        // }

        // private function createPage(title:String, color:uint, index:int):Sprite {
        //     var s:Sprite = new Sprite();

        //     var card:Shape = new Shape();
        //     card.graphics.beginFill(0xFFFFFF, 0.05);
        //     card.graphics.drawRoundRect(0, 0, PAGE_W, PAGE_H, 24, 24);
        //     card.graphics.endFill();
        //     s.addChild(card);

        //     var header:Shape = new Shape();
        //     header.graphics.beginFill(color, 0.85);
        //     header.graphics.drawRoundRectComplex(0, 0, PAGE_W, 64, 24, 24, 0, 0);
        //     header.graphics.endFill();
        //     s.addChild(header);

        //     var titleTf:TextField = makeLabel(title, 28, 0xFFFFFF, true);
        //     titleTf.x = PADDING;
        //     titleTf.y = 14;
        //     s.addChild(titleTf);

        //     var body:TextField = makeLabel("This is page " + (index + 1) + " — use Next/Prev or Left/Right keys.\n" + "Press H to return Home.", 16, 0xEAEAEA, false);
        //     body.width = PAGE_W - PADDING * 2;
        //     body.x = PADDING;
        //     body.y = 96;
        //     s.addChild(body);

        //     var block:Shape = new Shape();
        //     block.graphics.beginFill(color, 0.25);
        //     block.graphics.drawRoundRect(0, 0, PAGE_W - PADDING * 2, 200, 12, 12);
        //     block.graphics.endFill();
        //     block.x = PADDING;
        //     block.y = PAGE_H - 200 - PADDING;
        //     s.addChild(block);

        //     return s;
        // }

        // private function buildChrome():void {
        //     chrome = new Sprite();
        //     addChild(chrome);

        //     btnPrev = makeButton("Prev");
        //     btnHome = makeButton("Home");
        //     btnNext = makeButton("Next");

        //     btnPrev.addEventListener(MouseEvent.CLICK, onPrev);
        //     btnHome.addEventListener(MouseEvent.CLICK, onHome);
        //     btnNext.addEventListener(MouseEvent.CLICK, onNext);

        //     chrome.addChild(btnPrev);
        //     chrome.addChild(btnHome);
        //     chrome.addChild(btnNext);
        // }

        // // ---- Events --------------------------------------------------------------------------
        // private function onPrev(e:MouseEvent):void {
        //     showPage(currentIndex - 1);
        // }

        // private function onNext(e:MouseEvent):void {
        //     showPage(currentIndex + 1);
        // }

        // private function onHome(e:MouseEvent):void {
        //     showPage(0);
        // }

        // private function onKeyDown(e:KeyboardEvent):void {
        //     if (e.keyCode == Keyboard.LEFT)
        //         showPage(currentIndex - 1);
        //     else if (e.keyCode == Keyboard.RIGHT)
        //         showPage(currentIndex + 1);
        //     else if (e.keyCode == Keyboard.H || e.keyCode == Keyboard.HOME)
        //         showPage(0);
        // }

        // private function onResize(e:Event):void {
        //     redrawBackdrop();
        //     layout();
        // }

        // // ---- Core logic ----------------------------------------------------------------------
        // private function showPage(index:int):void {
        //     if (index < 0)
        //         index = 0;
        //     if (index > pages.length - 1)
        //         index = pages.length - 1;
        //     currentIndex = index;

        //     for (var i:int = 0; i < pages.length; i++) {
        //         Sprite(pages[i]).visible = (i == currentIndex);
        //     }

        //     updateButtons();
        //     layout();
        // }

        // private function updateButtons():void {
        //     btnPrev.mouseEnabled = (currentIndex > 0);
        //     btnPrev.alpha = btnPrev.mouseEnabled ? 1.0 : 0.5;

        //     btnNext.mouseEnabled = (currentIndex < pages.length - 1);
        //     btnNext.alpha = btnNext.mouseEnabled ? 1.0 : 0.5;

        //     btnHome.mouseEnabled = (currentIndex != 0);
        //     btnHome.alpha = btnHome.mouseEnabled ? 1.0 : 0.9;
        // }

        // // ---- Layout --------------------------------------------------------------------------
        // private function layout():void {
        //     var pg:Sprite = Sprite(pages[currentIndex]);
        //     if (pg) {
        //         pg.x = Math.round((stage.stageWidth - PAGE_W) * 0.5);
        //         pg.y = Math.round((stage.stageHeight - PAGE_H) * 0.5) - 30;
        //     }

        //     chrome.x = Math.round((stage.stageWidth - chrome.width) * 0.5);
        //     chrome.y = (pg ? pg.y + PAGE_H + PADDING : stage.stageHeight - BTN_H - PADDING);

        //     btnPrev.x = 0;
        //     btnHome.x = btnPrev.x + BTN_W + PADDING;
        //     btnNext.x = btnHome.x + BTN_W + PADDING;
        // }

        // // ---- UI helpers ----------------------------------------------------------------------
        // private function makeButton(label:String):SimpleButton {
        //     var up:Sprite = buttonFace(label, 0x2C2C30, 0xFFFFFF, 1.0);
        //     var over:Sprite = buttonFace(label, 0x3A3A3F, 0xFFFFFF, 1.0);
        //     var down:Sprite = buttonFace(label, 0x1E1E22, 0xFFFFFF, 0.9);
        //     var hit:Sprite = buttonFace(label, 0x000000, 0xFFFFFF, 0.0);
        //     var btn:SimpleButton = new SimpleButton(up, over, down, hit);
        //     btn.tabEnabled = true; // keyboard tabbing for accessibility
        //     return btn;
        // }

        // private function buttonFace(label:String, bg:uint, fg:uint, alpha:Number):Sprite {
        //     var s:Sprite = new Sprite();
        //     var r:Shape = new Shape();
        //     r.graphics.beginFill(bg, alpha);
        //     r.graphics.drawRoundRect(0, 0, BTN_W, BTN_H, 12, 12);
        //     r.graphics.endFill();
        //     s.addChild(r);

        //     var tf:TextField = makeLabel(label, 16, fg, true);
        //     tf.autoSize = TextFieldAutoSize.LEFT;
        //     tf.x = Math.round((BTN_W - tf.width) * 0.5);
        //     tf.y = Math.round((BTN_H - tf.height) * 0.5) - 1;
        //     s.addChild(tf);

        //     return s;
        // }

        // private function makeLabel(text:String, size:int, color:uint, bold:Boolean):TextField {
        //     var tf:TextField = new TextField();
        //     tf.selectable = false;
        //     tf.mouseEnabled = false;
        //     tf.antiAliasType = AntiAliasType.ADVANCED;
        //     tf.defaultTextFormat = new TextFormat("_sans", size, color, bold);
        //     tf.text = text;
        //     tf.width = PAGE_W - PADDING * 2;
        //     tf.autoSize = TextFieldAutoSize.LEFT;
        //     return tf;
        // }

    }
}
