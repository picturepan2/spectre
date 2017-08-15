# Spectre.css
Spectre.css is a lightweight, responsive and modern CSS framework for faster and extensible development.

- Lightweight (~10KB gzipped) starting point for your projects
- Flexbox-based, responsive and mobile-friendly layout
- Elegantly designed and developed elements and components

Spectre is a side project based on years of CSS development work on a large web service project. Spectre only includes modern base styles, responsive layout system, CSS components and utilities, and it can be modified for your project with LESS compiler.

Read [the documentation](https://picturepan2.github.io/spectre/getting-started.html) to learn more.

### Getting started

There are 5 ways to get started with Spectre CSS framework in your projects. You can either manually install or use NPM, Yarn and Bower.

##### Install manually
Download the compiled and minified [Spectre CSS file](https://github.com/picturepan2/spectre/tree/master/docs/dist). And include `spectre.css` located in `/docs/dist` in your website or Web app &lt;head&gt; part.

`<link rel="stylesheet" href="spectre.min.css" />`

##### Install from CDN
Alternatively, you can use the [unpkg](https://unpkg.com/) CDN to load compiled Spectre.css.

`<link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />`

##### Install with NPM
`$ npm install spectre.css --save`

##### Install with Yarn
`$ yarn add spectre.css`

##### Include the stylesheet from CDN
`<link rel="stylesheet" href="unpkg.com/spectre.css/docs/dist/spectre.min.css" />`

##### Install with Bower
`$ bower install spectre.css --save`



### Compiling custom version

You can compile your custom version of Spectre.css. Read [the documentation](https://picturepan2.github.io/spectre/getting-started.html#compiling).

### Documentation and examples

#### Elements

- [Typography](https://picturepan2.github.io/spectre/elements.html#typography) - headings, paragraphs, semantic text, blockquote, lists and code elements, optimized for east asian fonts
- [Tables](https://picturepan2.github.io/spectre/elements.html#tables) - organize and display data
- [Buttons](https://picturepan2.github.io/spectre/elements.html#buttons) - button styles in different types and sizes, and even button groups
- [Forms](https://picturepan2.github.io/spectre/elements.html#forms) - input, radio, checkbox, switch and other form elements
- [Icons](https://picturepan2.github.io/spectre/elements.html#icons) - single-element, responsive and pure CSS icons
- [Labels](https://picturepan2.github.io/spectre/elements.html#labels) - formatted text tags for highlighted, informative information
- [Codes](https://picturepan2.github.io/spectre/elements.html#codes) - inline and multiline code snippets
- [Media](https://picturepan2.github.io/spectre/elements.html#media) - responsive images, figures and video classes

#### Layout
- [Flexbox grid](https://picturepan2.github.io/spectre/layout.html#grid) - flexbox based responsive grid system
- [Responsive](https://picturepan2.github.io/spectre/layout.html#responsive) - responsive grid and utilities
- [Navbar](https://picturepan2.github.io/spectre/layout.html#navbar) - layout container that appears in the header of apps and websites
- [Panels](https://picturepan2.github.io/spectre/layout.html#panels) - flexible view container layout with auto-expand content section
- [Empty states](https://picturepan2.github.io/spectre/layout.html#empty) - empty states/blank slates for first time use, empty data and error screens

#### Components
- [Accordions](https://picturepan2.github.io/spectre/components.html#accordions) - used to toggle sections of content
- [Autocomplete](https://picturepan2.github.io/spectre/components.html#autocomplete) - form component provides suggestions while you type
- [Avatars](https://picturepan2.github.io/spectre/components.html#avatars) - user profile pictures or name initials rendered avatar
- [Badges](https://picturepan2.github.io/spectre/components.html#badges) - unread number indicators
- [Breadcrumbs](https://picturepan2.github.io/spectre/components.html#breadcrumbs) - navigational hierarchy
- [Bars](https://picturepan2.github.io/spectre/components.html#bars) - progress of a task or the value within the known range
- [Cards](https://picturepan2.github.io/spectre/components.html#cards) - flexible content containers
- [Chips](https://picturepan2.github.io/spectre/components.html#chips) - complex entities in small blocks
- [Menus](https://picturepan2.github.io/spectre/components.html#menus) - list of links or buttons for actions and navigation
- [Navs](https://picturepan2.github.io/spectre/components.html#navs) - navigational list of links
- [Modals](https://picturepan2.github.io/spectre/components.html#modals) - flexible dialog prompts
- [Pagination](https://picturepan2.github.io/spectre/components.html#pagination) - navigational links for multiple pages
- [Popovers](https://picturepan2.github.io/spectre/components.html#popovers) - small overlay content containers
- [Steps](https://picturepan2.github.io/spectre/components.html#steps) - progress indicators of a sequence of task steps
- [Tabs](https://picturepan2.github.io/spectre/components.html#tabs) - toggle for different views
- [Tiles](https://picturepan2.github.io/spectre/components.html#tiles) - repeatable or embeddable information blocks
- [Toasts](https://picturepan2.github.io/spectre/components.html#toasts) - showing alerts or notifications
- [Tooltips](https://picturepan2.github.io/spectre/components.html#tooltips) - simple tooltip built entirely in CSS

#### Utilities

- [Utilities](https://picturepan2.github.io/spectre/utilities.html) - colors, display, divider, loading, position, shapes and text utilities

#### Experimentals
- [Calendars](https://picturepan2.github.io/spectre/experimentals.html#calendars) - date or date range picker and events display
- [Carousels](https://picturepan2.github.io/spectre/experimentals.html#carousels) - slideshows for cycling images
- [Comparison Sliders](https://picturepan2.github.io/spectre/experimentals.html#comparison) - sliders for comparing two images, built entirely in CSS
- [Filters](https://picturepan2.github.io/spectre/experimentals.html#carousels) - CSS only content filters
- [Meters](https://picturepan2.github.io/spectre/experimentals.html#meters) - representing the value within the known range
- [Parallax](https://picturepan2.github.io/spectre/experimentals.html#parallax) - acting like Apple TV/tvOS hover parallax effect, built entirely in CSS
- [Progress](https://picturepan2.github.io/spectre/experimentals.html#progress) - indicators for the progress completion of a task
- [Sliders](https://picturepan2.github.io/spectre/experimentals.html#sliders) - selecting values from ranges
- [Timelines](https://picturepan2.github.io/spectre/experimentals.html#timelines) - ordered sequences of activities

### Browser support
Spectre uses [Autoprefixer](https://github.com/postcss/autoprefixer) to make most styles compatible with earlier browsers and [Normalize.css](https://necolas.github.io/normalize.css/) for CSS resets. Spectre is designed for modern browsers. For best compatibility, these browsers are recommended:
- Chrome (last 4)
- Microsoft Edge (last 4)
- Firefox (last 4)
- Safari (last 4)
- Opera (last 4)
- Internet Explorer 10+

Designed and built with ♥ by [Yan Zhu](https://twitter.com/picturepan2). Feel free to submit a pull request. Help is always appreciated.
