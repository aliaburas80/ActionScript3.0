package com.aliaburas.app.utils {
    import flash.display.Stage;
    import flash.geom.Point;

    public class Random {
        public function Random() {
            super();
        }

        public function randomePosition(stage:Stage, BOX_W:uint, BOX_H:uint, inset:Number = 0):Point {
            if (!stage || stage.stageWidth <= 0 || stage.stageHeight <= 0)
                return new Point(0, 0);
            var maxX:Number = Math.max(0, stage.stageWidth - BOX_W - inset * 2);
            var maxY:Number = Math.max(0, stage.stageHeight - BOX_H - inset * 2);
            var x:Number = inset + Math.floor(Math.random() * (maxX + 1));
            var y:Number = inset + Math.floor(Math.random() * (maxY + 1));

            // var obj:Object = {x: Math.round((stage.stageWidth - BOX_W * (Math.random() * 1)) * 0.5),
            //         y: Math.round((stage.stageHeight - BOX_H * (Math.random() * 1)) * 0.5)}
            return new Point(x, y);
        }

        public function color24():uint {
            return uint(Math.random() * 0x1000000);
        }
    }
}
