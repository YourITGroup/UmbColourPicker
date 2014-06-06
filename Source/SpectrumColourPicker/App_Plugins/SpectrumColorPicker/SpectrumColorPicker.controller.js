angular.module("umbraco").controller("ds.SpectrumColorPicker.Controller",
    function spectrumColorPicker($scope, $timeout, assetsService, angularHelper, $element) {

        assetsService.load([
            "/App_Plugins/SpectrumColorPicker/lib/spectrum/spectrum.js"
        ]).then(function () {
            var elem = $element.find("input");
            elem.spectrum({
                showInitial: true,
                preferredFormat: "name",
                showInput: true,
                showPalette: true,
                palette: [],
                //localStorageKey: "spectrum.SpectrumColorPickerPalette", // Any Spectrum with the same string will share selection
                allowEmpty: true
            });

            elem.on('change', function () {
                angularHelper.safeApply($scope, function () {
                    // when a color is changed, update the model
                    $scope.model.value = elem.val();
                });
            });
        });

        //load the seperate css for the editor to avoid it blocking our js loading
        assetsService.loadCss("/App_Plugins/SpectrumColorPicker/lib/spectrum/spectrum.css");
    });
