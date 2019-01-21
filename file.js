var Name = (function (redom) {
    'use strict';

    /* @jsx mount */
    var Noub = /** @class */ (function () {
        function Noub() {
            this.el = redom.mount("div", null, "hoge");
        }
        Noub.create = function (elementId, opts) {
            var targetElement = document.getElementById(elementId);
            if (targetElement === null) {
                throw TypeError('対象の要素が存在しません');
            }
            var noub = new Noub();
            redom.mount(targetElement, noub);
            return noub;
        };
        return Noub;
    }());

    return Noub;

}(redom));
