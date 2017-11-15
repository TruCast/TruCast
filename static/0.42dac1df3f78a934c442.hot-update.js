webpackHotUpdate(0,{

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(802)();\n// imports\n\n\n// module\nexports.push([module.id, \"/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\\n/**\\r\\n * 1. Set default font family to sans-serif.\\r\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\r\\n *    user zoom.\\r\\n */\\nhtml {\\n  font-family: sans-serif;\\n  /* 1 */\\n  -ms-text-size-adjust: 100%;\\n  /* 2 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */ }\\n\\n/**\\r\\n * Remove default margin.\\r\\n */\\nbody {\\n  margin: 0; }\\n\\n/* HTML5 display definitions\\r\\n   ========================================================================== */\\n/**\\r\\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\\r\\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\\r\\n * and Firefox.\\r\\n * Correct `block` display not defined for `main` in IE 11.\\r\\n */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmain,\\nmenu,\\nnav,\\nsection,\\nsummary {\\n  display: block; }\\n\\n/**\\r\\n * 1. Correct `inline-block` display not defined in IE 8/9.\\r\\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\\r\\n */\\naudio,\\ncanvas,\\nprogress,\\nvideo {\\n  display: inline-block;\\n  /* 1 */\\n  vertical-align: baseline;\\n  /* 2 */ }\\n\\n/**\\r\\n * Prevent modern browsers from displaying `audio` without controls.\\r\\n * Remove excess height in iOS 5 devices.\\r\\n */\\naudio:not([controls]) {\\n  display: none;\\n  height: 0; }\\n\\n/**\\r\\n * Address `[hidden]` styling not present in IE 8/9/10.\\r\\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\\r\\n */\\n[hidden],\\ntemplate {\\n  display: none; }\\n\\n/* Links\\r\\n   ========================================================================== */\\n/**\\r\\n * Remove the gray background color from active links in IE 10.\\r\\n */\\na {\\n  background-color: transparent; }\\n\\n/**\\r\\n * Improve readability when focused and also mouse hovered in all browsers.\\r\\n */\\na:active,\\na:hover {\\n  outline: 0; }\\n\\n/* Text-level semantics\\r\\n   ========================================================================== */\\n/**\\r\\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\\r\\n */\\nabbr[title] {\\n  border-bottom: 1px dotted; }\\n\\n/**\\r\\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\\r\\n */\\nb,\\nstrong {\\n  font-weight: bold; }\\n\\n/**\\r\\n * Address styling not present in Safari and Chrome.\\r\\n */\\ndfn {\\n  font-style: italic; }\\n\\n/**\\r\\n * Address variable `h1` font-size and margin within `section` and `article`\\r\\n * contexts in Firefox 4+, Safari, and Chrome.\\r\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0; }\\n\\n/**\\r\\n * Address styling not present in IE 8/9.\\r\\n */\\nmark {\\n  background: #ff0;\\n  color: #000; }\\n\\n/**\\r\\n * Address inconsistent and variable font size in all browsers.\\r\\n */\\nsmall {\\n  font-size: 80%; }\\n\\n/**\\r\\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\\r\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline; }\\n\\nsup {\\n  top: -0.5em; }\\n\\nsub {\\n  bottom: -0.25em; }\\n\\n/* Embedded content\\r\\n   ========================================================================== */\\n/**\\r\\n * Remove border when inside `a` element in IE 8/9/10.\\r\\n */\\nimg {\\n  border: 0; }\\n\\n/**\\r\\n * Correct overflow not hidden in IE 9/10/11.\\r\\n */\\nsvg:not(:root) {\\n  overflow: hidden; }\\n\\n/* Grouping content\\r\\n   ========================================================================== */\\n/**\\r\\n * Address margin not present in IE 8/9 and Safari.\\r\\n */\\nfigure {\\n  margin: 1em 40px; }\\n\\n/**\\r\\n * Address differences between Firefox and other browsers.\\r\\n */\\nhr {\\n  -moz-box-sizing: content-box;\\n  box-sizing: content-box;\\n  height: 0; }\\n\\n/**\\r\\n * Contain overflow in all browsers.\\r\\n */\\npre {\\n  overflow: auto; }\\n\\n/**\\r\\n * Address odd `em`-unit font size rendering in all browsers.\\r\\n */\\ncode,\\nkbd,\\npre,\\nsamp {\\n  font-family: monospace, monospace;\\n  font-size: 1em; }\\n\\n/* Forms\\r\\n   ========================================================================== */\\n/**\\r\\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\\r\\n * styling of `select`, unless a `border` property is set.\\r\\n */\\n/**\\r\\n * 1. Correct color not being inherited.\\r\\n *    Known issue: affects color of disabled elements.\\r\\n * 2. Correct font properties not being inherited.\\r\\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\\r\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  color: inherit;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */\\n  margin: 0;\\n  /* 3 */ }\\n\\n/**\\r\\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\\r\\n */\\nbutton {\\n  overflow: visible; }\\n\\n/**\\r\\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\\r\\n * All other form control elements do not inherit `text-transform` values.\\r\\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\\r\\n * Correct `select` style inheritance in Firefox.\\r\\n */\\nbutton,\\nselect {\\n  text-transform: none; }\\n\\n/**\\r\\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\r\\n *    and `video` controls.\\r\\n * 2. Correct inability to style clickable `input` types in iOS.\\r\\n * 3. Improve usability and consistency of cursor style between image-type\\r\\n *    `input` and others.\\r\\n */\\nbutton,\\nhtml input[type=\\\"button\\\"],\\ninput[type=\\\"reset\\\"],\\ninput[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n  /* 2 */\\n  cursor: pointer;\\n  /* 3 */ }\\n\\n/**\\r\\n * Re-set default cursor for disabled elements.\\r\\n */\\nbutton[disabled],\\nhtml input[disabled] {\\n  cursor: default; }\\n\\n/**\\r\\n * Remove inner padding and border in Firefox 4+.\\r\\n */\\nbutton::-moz-focus-inner,\\ninput::-moz-focus-inner {\\n  border: 0;\\n  padding: 0; }\\n\\n/**\\r\\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\\r\\n * the UA stylesheet.\\r\\n */\\ninput {\\n  line-height: normal; }\\n\\n/**\\r\\n * It's recommended that you don't attempt to style these elements.\\r\\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\\r\\n *\\r\\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\\r\\n * 2. Remove excess padding in IE 8/9/10.\\r\\n */\\ninput[type=\\\"checkbox\\\"],\\ninput[type=\\\"radio\\\"] {\\n  box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\r\\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\\r\\n * `font-size` values of the `input`, it causes the cursor style of the\\r\\n * decrement button to change from `default` to `text`.\\r\\n */\\ninput[type=\\\"number\\\"]::-webkit-inner-spin-button,\\ninput[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto; }\\n\\n/**\\r\\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\\r\\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\\r\\n *    (include `-moz` to future-proof).\\r\\n */\\ninput[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  -moz-box-sizing: content-box;\\n  -webkit-box-sizing: content-box;\\n  /* 2 */\\n  box-sizing: content-box; }\\n\\n/**\\r\\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\\r\\n * Safari (but not Chrome) clips the cancel button when the search input has\\r\\n * padding (and `textfield` appearance).\\r\\n */\\ninput[type=\\\"search\\\"]::-webkit-search-cancel-button,\\ninput[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none; }\\n\\n/**\\r\\n * Define consistent border, margin, and padding.\\r\\n */\\nfieldset {\\n  border: 1px solid #c0c0c0;\\n  margin: 0 2px;\\n  padding: 0.35em 0.625em 0.75em; }\\n\\n/**\\r\\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\\r\\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\\r\\n */\\nlegend {\\n  border: 0;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\r\\n * Remove default vertical scrollbar in IE 8/9/10/11.\\r\\n */\\ntextarea {\\n  overflow: auto; }\\n\\n/**\\r\\n * Don't inherit the `font-weight` (applied by a rule above).\\r\\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\\r\\n */\\noptgroup {\\n  font-weight: bold; }\\n\\n/* Tables\\r\\n   ========================================================================== */\\n/**\\r\\n * Remove most spacing between table cells.\\r\\n */\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\ntd,\\nth {\\n  padding: 0; }\\n\\nh1, h2, h3, h4, h5, p {\\n  padding: 0;\\n  margin: 0; }\\n\\nhtml, body, #root, .App, .Room, .Seats, .Streams {\\n  height: 100%; }\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Open Sans', sans-serif;\\n  font-size: 16px;\\n  color: #fafafa;\\n  background-color: #222; }\\n\\na {\\n  color: #fafafa;\\n  text-decoration: none;\\n  font-weight: 600;\\n  cursor: pointer; }\\n\\nimg {\\n  vertical-align: middle; }\\n\\ninput {\\n  box-sizing: border-box;\\n  padding: 9px;\\n  outline: none;\\n  border: none;\\n  background-color: #222; }\\n  input:not(.u-bare) {\\n    /* border: 1px solid $subtle-grey-color; */\\n    /* &:focus { */\\n    /*   border-color: $blue-color; */\\n    /*   box-shadow: 0 0 1px 2px rgba($blue-color, 0.25); */\\n    /* } */ }\\n\\n::-webkit-scrollbar {\\n  width: 0.5em;\\n  height: 0.5em; }\\n\\n::-webkit-scrollbar-thumb {\\n  background: #777; }\\n\\n::-webkit-scrollbar-track {\\n  background: transparent; }\\n\\nbody {\\n  scrollbar-face-color: #777;\\n  scrollbar-track-color: transparent; }\\n\\n.Home {\\n  text-align: center;\\n  padding-top: 100px; }\\n  .Home h1 {\\n    font-size: 100px; }\\n  .Home p {\\n    padding: 20px 0 90px;\\n    font-size: 20px; }\\n\\nbutton {\\n  display: inline-block;\\n  outline: none;\\n  vertical-align: middle;\\n  color: #fff;\\n  font-weight: bold;\\n  position: relative;\\n  border: none;\\n  background: transparent; }\\n\\n.Button {\\n  padding: 9px 18px;\\n  border-radius: 4px;\\n  border: 1px solid #fff; }\\n  .Button:hover {\\n    background-color: #777; }\\n  .Button:active {\\n    background-color: #fff;\\n    color: #000; }\\n  .Button--primary {\\n    background-color: #2f5671;\\n    border-color: #508cb6; }\\n    .Button--primary:hover {\\n      background-color: #203b4d;\\n      border-color: #3e7195; }\\n    .Button--primary:active {\\n      background-color: #142530;\\n      border-color: #2f5671;\\n      color: #fafafa; }\\n  .Button .Icon {\\n    margin-right: 8px; }\\n\\n.TwitterLogin {\\n  background-color: #00aced;\\n  border-color: #54d0ff; }\\n  .TwitterLogin:hover {\\n    background-color: #0087ba;\\n    border-color: #21c2ff; }\\n  .TwitterLogin:active {\\n    background-color: #006991;\\n    border-color: #00aced;\\n    color: #fafafa; }\\n\\n.Room__title {\\n  font-size: 1.5em;\\n  margin-right: 15px; }\\n  .Room__title form {\\n    display: inline; }\\n\\n.Room__header {\\n  height: 60px;\\n  border-bottom: 1px solid #444;\\n  padding: 0 15px 0 8px;\\n  box-sizing: border-box;\\n  display: flex;\\n  align-items: center; }\\n  .Room__header .User__icon {\\n    vertical-align: middle;\\n    height: 38px;\\n    width: 38px; }\\n  .Room__header input {\\n    border: 1px solid #333;\\n    padding: 2px;\\n    padding-left: 7px;\\n    border-radius: 3px;\\n    width: 300px; }\\n    .Room__header input:focus {\\n      border-color: #777; }\\n    .Room__header input:active {\\n      border-color: #fafafa; }\\n  .Room__header .DropdownButton .User__icon {\\n    height: 24px;\\n    width: 24px;\\n    padding: 0 10px;\\n    border-left: 1px solid #333; }\\n\\n.Room__body {\\n  display: flex;\\n  position: relative;\\n  height: calc(100% - 60px);\\n  width: 100%; }\\n\\n.Room__content {\\n  flex-grow: 1; }\\n\\n.Room__absent {\\n  margin-top: 100px;\\n  text-align: center; }\\n  .Room__absent-icon {\\n    color: #444;\\n    font-size: 16em;\\n    font-weight: bold; }\\n  .Room__absent-message {\\n    font-size: 1.4em; }\\n\\n.ViewerInfo {\\n  flex-shrink: 0; }\\n  .ViewerInfo__count {\\n    vertical-align: middle;\\n    margin-right: 15px; }\\n    .ViewerInfo__count .Icon {\\n      margin-right: 4px; }\\n    .ViewerInfo__count.u-active {\\n      font-weight: bold; }\\n\\n.ViewerList {\\n  flex-grow: 1;\\n  display: flex;\\n  overflow: hidden; }\\n  .ViewerList .User {\\n    margin-right: 10px; }\\n\\n.Comments {\\n  background-color: #222;\\n  border-left: 1px solid #444;\\n  width: 350px;\\n  display: flex;\\n  flex-direction: column;\\n  position: relative; }\\n  .Comments__list {\\n    flex-grow: 1;\\n    padding: 0 15px;\\n    padding-top: 15px;\\n    overflow-y: scroll;\\n    overflow-x: hidden; }\\n  .Comments__input input {\\n    width: 100%;\\n    padding: 15px;\\n    background-color: #444;\\n    color: #fafafa; }\\n  .Comments .Comment, .Comments .EventNotice {\\n    margin-bottom: 15px; }\\n  .Comments__unread {\\n    background-color: #2f5671;\\n    padding: 15px;\\n    position: absolute;\\n    bottom: 52px;\\n    left: 0;\\n    right: 0; }\\n\\n.User {\\n  display: inline-block; }\\n  .User__icon {\\n    height: 48px;\\n    width: 48px;\\n    border-radius: 3px; }\\n\\n.Seats {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  min-width: 300px; }\\n  .Seats__container {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-wrap: wrap; }\\n\\n.Seat {\\n  border-radius: 4px;\\n  position: relative;\\n  margin: 12px;\\n  vertical-align: middle; }\\n  .Seat > .CloseButton {\\n    height: 30px;\\n    width: 30px;\\n    padding: 0;\\n    border-radius: 50%;\\n    background-color: rgba(0, 0, 0, 0.22);\\n    border: 2px solid rgba(250, 250, 250, 0.65);\\n    top: 10px;\\n    right: 10px;\\n    position: absolute;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    opacity: 0; }\\n    .Seat > .CloseButton i {\\n      margin: 0; }\\n  .Seat:hover .CloseButton {\\n    opacity: 1; }\\n  .Seat__user {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    margin: 10px;\\n    background-color: rgba(0, 0, 0, 0.5);\\n    padding: 10px;\\n    border-radius: 4px; }\\n    .Seat__user .User {\\n      margin-right: 10px; }\\n    .Seat__user .User__icon {\\n      height: 32px;\\n      width: 32px; }\\n  .Seat video {\\n    height: 100%;\\n    width: 100%;\\n    border-radius: 4px;\\n    object-fit: cover; }\\n  .Seat--opaque {\\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.58); }\\n  .Seat__container {\\n    height: 100%;\\n    width: 100%; }\\n\\n.Streams {\\n  overflow: scroll;\\n  width: 100%; }\\n\\n.Stream video {\\n  height: 100%;\\n  width: 100%;\\n  object-fit: cover; }\\n\\n.CallersPanel {\\n  background-color: rgba(0, 0, 0, 0.75);\\n  display: flex;\\n  flex-direction: column;\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  bottom: 0;\\n  z-index: 1; }\\n  .CallersPanel__caller {\\n    display: flex;\\n    margin-bottom: 15px; }\\n    .CallersPanel__caller .UserGroup {\\n      flex-grow: 1;\\n      margin-right: 15px; }\\n    .CallersPanel__caller .User {\\n      margin-right: 10px; }\\n  .CallersPanel__callers {\\n    padding: 0 15px;\\n    overflow-y: scroll; }\\n  .CallersPanel__header {\\n    padding: 15px; }\\n    .CallersPanel__header .CloseButton {\\n      float: right; }\\n      .CallersPanel__header .CloseButton i {\\n        margin: 0; }\\n\\n.EmptySeat {\\n  border: 2px dashed #444;\\n  box-sizing: border-box;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column; }\\n  .EmptySeat__waiting {\\n    font-size: 1.4em;\\n    padding: 15px; }\\n    .EmptySeat__waiting i {\\n      margin-right: 10px; }\\n  .EmptySeat__callers {\\n    margin-bottom: 15px;\\n    display: flex;\\n    justify-content: center; }\\n    .EmptySeat__callers .User {\\n      margin: 0 8px; }\\n  .EmptySeat__link {\\n    background-color: #444;\\n    border: 1px solid #777;\\n    border-radius: 3px;\\n    padding: 4px;\\n    font-family: monospace;\\n    font-size: 0.8em; }\\n  .EmptySeat .Button--primary {\\n    font-size: 1.2em; }\\n\\n.Comment {\\n  display: flex; }\\n  .Comment__content {\\n    display: flex;\\n    flex-direction: column;\\n    margin-left: 10px; }\\n  .Comment .Username {\\n    margin-bottom: 3px; }\\n\\n.EventNotice {\\n  background-color: #333;\\n  border-radius: 4px;\\n  margin-bottom: 15px;\\n  padding: 10px; }\\n\\n.DropdownList {\\n  line-height: initial;\\n  padding: 12px;\\n  margin: 0;\\n  background-color: black;\\n  list-style: none;\\n  position: absolute;\\n  box-sizing: border-box;\\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);\\n  z-index: 1; }\\n  .DropdownList li {\\n    padding: 5px 0; }\\n    .DropdownList li a:hover {\\n      color: #777; }\\n\\n.ProfileDropdown {\\n  flex-shrink: 0;\\n  padding-left: 30px;\\n  position: relative; }\\n  .ProfileDropdown .DropdownList {\\n    right: 0px;\\n    width: 130px;\\n    top: 30px; }\\n\\n.Modal__backdrop {\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  z-index: 1;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: rgba(0, 0, 0, 0.75); }\\n\\n.Modal__container {\\n  background-color: #fafafa;\\n  border-radius: 3px;\\n  padding: 30px;\\n  position: relative; }\\n  .Modal__container .CloseButton {\\n    color: #333;\\n    position: absolute;\\n    top: 5px;\\n    font-size: 24px;\\n    right: 5px; }\\n\\n.UserModal {\\n  display: flex;\\n  flex-direction: column;\\n  width: 340px;\\n  color: #333; }\\n  .UserModal__header {\\n    font-size: 1.5em; }\\n    .UserModal__header .User__icon {\\n      height: 48px;\\n      width: 48px;\\n      border: 1px solid #777; }\\n    .UserModal__header .UserModal__username, .UserModal__header .User__icon {\\n      margin-right: 15px; }\\n    .UserModal__header .UserModal__username {\\n      font-weight: 600; }\\n  .UserModal .fa-twitter {\\n    color: #00aced; }\\n  .UserModal__actions {\\n    margin-top: 25px; }\\n    .UserModal__actions .Button {\\n      width: 100%;\\n      display: inline-block;\\n      box-sizing: border-box;\\n      text-align: center;\\n      border: none; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/css-loader!./~/sass-loader!./src/style.scss\n// module id = 801\n// module chunks = 0\n//# sourceURL=webpack:///./src/style.scss?./~/css-loader!./~/sass-loader");

/***/ })

})