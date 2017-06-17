/*
 * SpectrumColorPicker
 * 
 * by Robert Foster/KØBEN digital
 * robert@koben.com.au
 * @robertjf72
 * 
 * Version 0.0.5
 */
angular.module("umbraco").controller("ds.SpectrumColorPicker.Controller",
    function spectrumColorPicker($scope, $timeout, assetsService, angularHelper, $element) {

        assetsService.load([
            "~/App_Plugins/SpectrumColorPicker/lib/spectrum/spectrum.js"
        ]).then(function () {
            var elem = $element.find("input");
            elem.val($scope.model.value);
            elem.spectrum({
                showInitial: true,
                preferredFormat: $scope.model.config.enableTransparency ? "rgb" : "name",
                showInput: true,
                showPalette: true,
                palette: [],
                showAlpha: $scope.model.config.enableTransparency,
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

        //load the separate css for the editor to avoid it blocking our js loading (probably no longer necessary given it's listed in the manifest)
        assetsService.loadCss("~/App_Plugins/SpectrumColorPicker/lib/spectrum/spectrum.css");
    });
