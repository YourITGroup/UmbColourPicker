UmbColourPicker
===============

Spectrum Colour Picker for Umbraco 7

Creates an "unbound" colour picker based on the Spectrum jquery plugin. By unbound, we mean that colours aren't pre-defined, allowing the user to choose a color of their own.

For more information about Spectrum, go here: http://bgrins.github.io/spectrum/

If you want to customise the settings for Spectrum, see the file in 

/App_Plugins/SpectrumColorPicker/SpectrumColorPicker.controller.js

and set the Spectrum options in the directive.

TODO:
-----
1. Add Prevalues for various Spectrum options
2. Remove Spectrum library in favour of the version now included in Umbraco.
3. Create the Package on build (manifest is there, just need to add the build action and supporting libraries etc.)

Updates:
--------

### Version 0.0.2:

* Cleaned up and simplified Controller and removed Directive to make it more reliable.

### Version 0.0.3:

* Fixed problem where the color picker wouldn't be initiated correctly unless the site was refreshed.

### Version 0.0.3:
* Fixed problem where the color picker wouldn't be initiated correctly unless the site was refreshed.

### Version 0.0.4:
* Color should now be properly initialising again.

### Version 0.0.5:
* Added the option to specify a transparency when choosing the color.

### Version 0.0.6:
* Finally added support for Umbraco installed in virtual directories.

### Version 0.0.7:
* Added language support, based on umbracos langs and upgraded spectrum from version 1.2.0 to 1.8.0. Also added format config option, so rgba can be used.