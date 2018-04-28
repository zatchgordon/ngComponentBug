(function () {
    "use strict";
    angular
        .module("app")
        .config(configApp);
    /* @ngInject */
    function configApp($compileProvider, $httpProvider, $windowProvider) {
        init();
        return;
        function init() {
            $compileProvider.debugInfoEnabled(true);
            setupIEWindowObject();
        }
        function setupIEWindowObject() {
            //fix for IE window.location.orgigin not being populated
            if (!$windowProvider.$get().location.origin) {
                $windowProvider.$get().location.origin = $windowProvider.$get().location.protocol +
                    "//" +
                    $windowProvider.$get().location.hostname +
                    ($windowProvider.$get().location.port ? ":" + $windowProvider.$get().location.port : "");
            }
        }
    }
})();
//# sourceMappingURL=app.config.js.map