webpackHotUpdate(0,{

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(327);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _DropdownButton = __webpack_require__(790);\n\nvar _DropdownButton2 = _interopRequireDefault(_DropdownButton);\n\nvar _MenuItem = __webpack_require__(792);\n\nvar _MenuItem2 = _interopRequireDefault(_MenuItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// target=\"_blank\" to open /stream in new window\n// <MenuItem target=\"_blank\" href={`/${props.userId}/stream`}>Stream</MenuItem>\n\n\n// import User from 'components/User'\nvar ProfileDropdown = function ProfileDropdown(props) {\n  return _react2.default.createElement(\n    _DropdownButton2.default,\n    {\n      className: 'ProfileDropdown',\n      title: '@' + props.userId\n    },\n    _react2.default.createElement(\n      _MenuItem2.default,\n      { href: '/' },\n      'My Room'\n    ),\n    _react2.default.createElement(\n      _MenuItem2.default,\n      { href: '/v1/logout' },\n      'Logout'\n    ),\n    _react2.default.createElement(\n      _MenuItem2.default,\n      { target: '_blank', href: '/' + props.userId + '/stream' },\n      'Stream'\n    )\n  );\n};\n\nProfileDropdown.propTypes = {\n  userId: _react.PropTypes.string.isRequired\n};\n\nexports.default = ProfileDropdown;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/ProfileDropdown.jsx\n// module id = 789\n// module chunks = 0\n//# sourceURL=webpack:///./src/components/ProfileDropdown.jsx?");

/***/ })

})