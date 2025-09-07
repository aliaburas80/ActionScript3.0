package com.aliaburas.app {
    import flash.display.Sprite;
    import flash.display.Shape;
    import flash.display.SimpleButton;
    import flash.display.StageAlign;
    import flash.display.StageScaleMode;
    import flash.events.Event;
    import flash.events.MouseEvent;
    import com.aliaburas.app.utils.Random;
    import com.greensock.easing.*;
    import com.greensock.*;
    import flash.geom.Point;
    import com.aliaburas.app.utils.StaticValues;

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
        private static const FALLBACK_SHAPE:String = StaticValues.RECT;

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
        private var shapeArray:Array = [StaticValues.CIRCLE, StaticValues.RECT];

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
            shapeMaker.build(color, setRandomeShape(shapeArray));
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
            e.currentTarget.build(random.color24(), setRandomeShape(shapeArray))
            addMoveTransition(e.currentTarget as Sprite);
        }

        private function addMoveTransition(obj:Sprite):void {
            var position:Point = setRandomePosition();
            tween = new TweenLite(obj, 0.5, {x: position.x,
                    y: position.y, ease: Back.easeIn, onComplete: function():void {
                        shapeMaker.build(random.color24(), setRandomeShape(shapeArray));
                    }});
        }

        public static function setRandomeShape(shapeArray:Array):String {
            if (!shapeArray || shapeArray.length == 0)
                return FALLBACK_SHAPE;
            var idx:int = int(Math.random() * shapeArray.length);
            var s:String = shapeArray[idx] as String;
            if (s == null || s.length == 0)
                return setRandomeShape(shapeArray);
            return s;
        }

        private function setRandomePosition():Point {
            var p:Point = random.randomePosition(stage, BOX_W, BOX_H);
            if (p.x > stage.stageWidth - shapeMaker.width || p.y > stage.stageHeight - shapeMaker.height || p.x < shapeMaker.width || p.y < shapeMaker.height) {
                setRandomePosition();
            }
            return p
        }
    }
}
