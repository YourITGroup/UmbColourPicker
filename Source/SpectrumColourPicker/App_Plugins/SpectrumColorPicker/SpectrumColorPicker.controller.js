/*
 * SpectrumColorPicker
 *
 * by Robert Foster/KØBEN digital
 * robert@koben.com.au
 * @robertjf72
 *
 * Version 1.0.0
 */
angular.module("umbraco").controller("ds.SpectrumColorPicker.Controller",
    function spectrumColorPicker($scope, $timeout, assetsService, angularHelper, $element, localizationService) {

        // Initialize text for specific umbraco user language. Only original spectrum langs are used.
        localizationService.localizeMany([
            "scp_cancelText",
            "scp_chooseText",
            "scp_togglePaletteMoreText",
            "scp_togglePaletteLessText",
            "scp_clearText",
            "scp_noColorSelectedText"
        ]).then(function (data) {
            $scope.cancelText = data[0];
            $scope.chooseText = data[1];
            $scope.moreText = data[2];
            $scope.lessText = data[3];
            $scope.clearText = data[4];
            $scope.selectedText = data[5];
        });

        // Checking boolean and makeing sure that rgb is selected if transparency is enabled.
        $scope.model.config.enableTransparency = convertToBoolean($scope.model.config.enableTransparency);
        if ($scope.model.config.enableTransparency) {
            $scope.model.config.preferredFormat = "rgb";
        }

        assetsService.loadJs(
            "/App_Plugins/SpectrumColorPicker/lib/spectrum/spectrum.js"
        ).then(function () {
            $element.find("input").spectrum({
                color: $scope.model.value,
                cancelText: $scope.cancelText,
                chooseText: $scope.chooseText,
                togglePaletteMoreText: $scope.moreText,
                togglePaletteLessText: $scope.lessText,
                clearText: $scope.clearText,
                noColorSelectedText: $scope.selectedText,
                preferredFormat: $scope.model.config.preferredFormat,
                showAlpha: $scope.model.config.enableTransparency, // Has to be true/false. will not accept null.
                showInitial: true,
                showInput: true,
                showPalette: true,
                allowEmpty: true,
                palette: [],
                //localStorageKey: "spectrum.SpectrumColorPickerPalette", // Any Spectrum with the same string will share selection
                change: function (color) {
                    angularHelper.safeApply($scope, function () {
                        // when a color is changed, update the model
                        $scope.model.value = color != null ? color.toString() : color;
                    });
                }
            });
        });

        //Umbraco returns null if the checkbox aint checked, and "1" if it is. If the core changes in the future, this should be bulletproof.
        function convertToBoolean(input) {
            switch (input) {
                case true: case "1": case "True": case "true": case 1: return true;
                default: return false;
            }
        }

        //load the separate css for the editor to avoid it blocking our js loading (probably no longer necessary given it's listed in the manifest)
        //assetsService.loadCss("~/App_Plugins/SpectrumColorPicker/lib/spectrum/spectrum.css");
    });
