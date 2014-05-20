function spectrumColorPicker($scope, assetsService, angularHelper) {
    assetsService.load(["/App_Plugins/SpectrumColorPicker/lib/spectrum/spectrum.js"]).then(
        function () {
            var elem = $('#colorpicker' + $scope.model.alias);
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
            //$scope.model.onValueChanged = function (newVal, oldVal) {
            //    elem.val($scope.model.value);
            //};
        });

    //load the seperate css for the editor to avoid it blocking our js loading
    assetsService.loadCss("/App_Plugins/SpectrumColorPicker/lib/spectrum/spectrum.css");
}

angular.module("umbraco").controller("ds.SpectrumColorPicker.Controller", spectrumColorPicker);
