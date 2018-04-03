# UmbColourPicker

Nuget Package: 
[![NuGet release](https://img.shields.io/nuget/v/SpectrumColourPicker.svg)](https://www.nuget.org/packages/SpectrumColourPicker/)
[![NuGet release](https://img.shields.io/nuget/dt/SpectrumColourPicker.svg)](https://www.nuget.org/packages/SpectrumColourPicker/)

Umbraco Package:
[![Our Umbraco project page](https://img.shields.io/badge/our-umbraco-orange.svg)](https://our.umbraco.org/projects/backoffice-extensions/spectrum-colour-picker) 

# Spectrum Colour Picker for Umbraco 7

Creates an "unbound" colour picker based on the Spectrum jquery plugin. By unbound, we mean that colours aren't pre-defined, allowing the user to choose a color of their own.

For more information about Spectrum, go here: [http://bgrins.github.io/spectrum/](http://bgrins.github.io/spectrum/
)


If you want to customise the settings for Spectrum, see the file in 

    ~/App_Plugins/SpectrumColorPicker/SpectrumColorPicker.controller.js

and set the Spectrum options in the directive.

## Updates:

### Version 1.0.0:
* Stable Release!  Fixes typo with `preferredFormat` prevalue option which *may break previous version*

### Version 0.0.7:
* Added language support, based on umbracos langs and upgraded spectrum from version 1.2.0 to 1.8.0.
* Also added format config option, so rgba can be used.

### Version 0.0.6:
* Finally added support for Umbraco installed in virtual directories.

### Version 0.0.5:
* Added the option to specify a transparency when choosing the color.

### Version 0.0.4:
* Color should now be properly initialising again.

### Version 0.0.3:
* Fixed problem where the color picker wouldn't be initiated correctly unless the site was refreshed.

### Version 0.0.2:
* Cleaned up and simplified Controller and removed Directive to make it more reliable.


## Acknowledgements:

Thanks goes out to Bo Jacobsen (Emetico) for the language support and format config option in version 0.0.7 and Simon Eldevig (simoneldevig)