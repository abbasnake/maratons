# SCSS FOLDER README

### global-styles

This is for gobal default styles like "a" tags not having underline or "li" tags not having bullet points etc. This file is imported in App.vue unscoped style tags to apply to everything

### reset

Copied from the [HTML5-reset](https://github.com/murtaugh/HTML5-Reset/blob/master/assets/css/reset.css)

### variables

Variables to be used by components that need them. At the moment these have to be imported per component. They aren't available if just imported in the global scope for some reason.