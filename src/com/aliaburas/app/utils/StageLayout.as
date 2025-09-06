package com.aliaburas.app.utils {
    import flash.display.Sprite;
    import flash.display.StageScaleMode;
    import flash.display.StageAlign;
    import flash.display.Stage;

    public class StageLayout extends Sprite {
        public function StageLayout(container:Stage) {
            super();
            container.align = StageScaleMode.NO_SCALE;
            container.scaleMode = StageAlign.TOP;
        }
    }

}
