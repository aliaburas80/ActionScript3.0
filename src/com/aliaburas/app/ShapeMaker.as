package com.aliaburas.app {
    import flash.display.Sprite;
    import flash.display.Shape;
    import com.aliaburas.app.utils.StaticValues;

    public class ShapeMaker extends Sprite {
        private var s:Shape = new Shape();
        private var shapeWidth:uint;
        private var shapeHeight:uint;

        public function ShapeMaker(w:int, h:int) {
            super();
            _width = w;
            _height = h;
        }

        private function set _width(w:uint):void {
            if (w > 0)
                shapeWidth = w;
            else
                shapeWidth = 100;
        }

        private function get _width():uint {
            return shapeWidth
        }

        private function set _height(h:uint):void {
            if (h > 0)
                shapeHeight = h;
            else
                shapeHeight = 100;
        }

        private function get _height():uint {
            return shapeHeight
        }

        public function build(color:uint = 0xFF0000, type:String = StaticValues.RECT):Shape {
            s.graphics.clear();
            setColor(s, color);
            selecteShap(type, s, _width, _height)
            s.graphics.endFill();
            addChild(s)
            return s;
        }

        private function selecteShap(shape:String, obj:Shape, w:uint, h:uint):void {
            switch (shape) {
                case StaticValues.CIRCLE:
                    obj.graphics.drawCircle(0, 0, w)
                    break;
                case StaticValues.ELLIPSE:

                    break;
                case StaticValues.GRAPHICS_DATE:

                    break;
                case StaticValues.PATH:

                    break;
                case StaticValues.RECT:
                    obj.graphics.drawRect(0, 0, w, h);
                    break;
                case StaticValues.ROUND_RECT_COMPLEX:

                    break;
                case StaticValues.TEIANGLES:

                    break;

                default:
                    break;
            }
        }

        public function setColor(obj:Shape, color:uint = 0xFF0000):void {
            obj.graphics.beginFill(color)
        }
    }
}
