package com.aliaburas.app.utils {
    import flash.display.Sprite;
    import flash.display.Stage;

    public class Random {
        public function Random() {
            super();
        }

        public function randomePosition(stage:Stage, BOX_W:uint, BOX_H:uint):Object {
            return {
                x:Math.round((stage.stageWidth - BOX_W) * 0.5),
                y:Math.round((stage.stageHeight - BOX_H) * 0.5)
            }
        }

        public function color24():uint {
            return uint(Math.random() * 0x1000000);
        }
    }
}
