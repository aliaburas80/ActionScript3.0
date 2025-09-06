package com.aliaburas.app.utils {
    import flash.display.Sprite;
    import flash.display.Stage;

    public class Random {
        public function Random() {
            super();
        }

        public function randomePosition(stage:Stage, BOX_W:uint, BOX_H:uint):Object {
            var obj:Object = {x: Math.round((stage.stageWidth - BOX_W * (Math.random() * 1)) * 0.5),
                    y: Math.round((stage.stageHeight - BOX_H * (Math.random() * 1)) * 0.5)}
            return obj
        }

        public function color24():uint {
            return uint(Math.random() * 0x1000000);
        }
    }
}
