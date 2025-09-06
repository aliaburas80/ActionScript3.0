package com.aliaburas.app {
    import flash.display.Sprite;
    import flash.display.Shape;

    public class ShapeMaker extends Sprite {
        private var s:Shape = new Shape();
        private var _width:uint;
        private var _height:uint;

        public function ShapeMaker(w:int, h:int) {
            super();
            _width = w;
            _height = h;
        }

        public function build(color:uint = 0xFF0000):Shape {
            s.graphics.clear();
            setColor(s, color);
            s.graphics.drawRect(0, 0, _width, _height);
            s.graphics.endFill();
            addChild(s)
            return s;
        }

        public function setColor(obj:Shape, color:uint = 0xFF0000):void {
            obj.graphics.beginFill(color)
        }
    }
}
