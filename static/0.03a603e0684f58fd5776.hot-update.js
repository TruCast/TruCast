webpackHotUpdate(0,{

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class, _temp2; /* global OT */\n\nvar _react = __webpack_require__(327);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _User = __webpack_require__(771);\n\nvar _User2 = _interopRequireDefault(_User);\n\nvar _CloseButton = __webpack_require__(777);\n\nvar _CloseButton2 = _interopRequireDefault(_CloseButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Seat = (_temp2 = _class = function (_React$Component) {\n  _inherits(Seat, _React$Component);\n\n  function Seat() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Seat);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Seat.__proto__ || Object.getPrototypeOf(Seat)).call.apply(_ref, [this].concat(args))), _this), _this.setVideoNode = function (videoNode) {\n      _this.videoNode = videoNode;\n    }, _this.getDevices = function () {\n      var audioInputDevices = void 0;\n      var videoInputDevices = void 0;\n      OT.getDevices(function (error, devices) {\n        audioInputDevices = devices.filter(function (element) {\n          return element.kind === 'audioInput';\n        });\n        videoInputDevices = devices.filter(function (element) {\n          return element.kind === 'videoInput';\n        });\n        for (var i = 0; i < audioInputDevices.length; i + 1) {\n          console.log('audio input device: ', audioInputDevices[i].deviceId); // eslint-disable-line no-console\n        }\n        for (var _i = 0; _i < videoInputDevices.length; _i + 1) {\n          console.log('video input device: ', videoInputDevices[_i].deviceId); // eslint-disable-line no-console\n        }\n      });\n    }, _this.handleStreamCreated = function (event) {\n      var userId = event.stream.connection.data.replace('userId=', '');\n      if (userId !== _this.props.seatUserId) {\n        return;\n      }\n\n      _this.subscriber = _this.props.session.subscribe(event.stream, null, {\n        resolution: '1280x720',\n        insertDefaultUI: false\n      });\n\n      _this.subscriber.once('videoElementCreated', _this.handleVideoElementCreated);\n    }, _this.closeSeat = function () {\n      _this.props.leaveSeat(_this.props.seatUserId);\n    }, _this.publish = function () {\n      _this.publisher = OT.initPublisher(null, {\n        resolution: '1280x720',\n        insertDefaultUI: false\n      }, function (error) {\n        if (error) throw error;\n      });\n\n      _this.publisher.once('videoElementCreated', _this.handleVideoElementCreated);\n      _this.props.session.publish(_this.publisher);\n    }, _this.handleVideoElementCreated = function (event) {\n      var _this2 = _this,\n          videoNode = _this2.videoNode;\n\n      if (!videoNode) {\n        return;\n      }\n\n      while (videoNode.firstChild) {\n        videoNode.removeChild(videoNode.firstChild);\n      }\n      videoNode.appendChild(event.element);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Seat, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var session = this.props.session;\n\n      if (this.isMySeat()) {\n        // Publish the stream if the session is connected.\n        if (session.connection) {\n          this.getDevices();\n          this.publish();\n        } else {\n          session.once('sessionConnected', this.getDevices, this.publish);\n        }\n      } else {\n        this.props.session.on('streamCreated', this.handleStreamCreated);\n      }\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      var session = this.props.session;\n\n\n      if (!this.isMySeat) {\n        this.props.session.off('streamCreated', this.handleStreamCreated);\n      }\n\n      if (this.publisher) {\n        session.unpublish(this.publisher);\n      }\n\n      if (this.subscriber) {\n        session.unsubscribe(this.subscriber);\n      }\n    }\n  }, {\n    key: 'isMySeat',\n    value: function isMySeat() {\n      var _props = this.props,\n          userId = _props.userId,\n          seatUserId = _props.seatUserId;\n\n      return userId && userId === seatUserId;\n    }\n  }, {\n    key: 'renderCloseButton',\n    value: function renderCloseButton() {\n      var isMySeat = this.isMySeat();\n      return (this.props.isHost ? !isMySeat : isMySeat) && _react2.default.createElement(_CloseButton2.default, { onClick: this.closeSeat });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var size = this.props.size;\n\n      return _react2.default.createElement(\n        'div',\n        {\n          className: 'Seat Seat--opaque',\n          style: { height: size, width: size }\n        },\n        _react2.default.createElement('div', {\n          className: 'Seat__container',\n          ref: this.setVideoNode\n        }),\n        this.renderCloseButton(),\n        _react2.default.createElement(\n          'div',\n          { className: 'Seat__user' },\n          _react2.default.createElement(_User2.default, {\n            showUsername: true,\n            username: this.props.seatUserId\n          })\n        )\n      );\n    }\n  }]);\n\n  return Seat;\n}(_react2.default.Component), _class.propTypes = {\n  userId: _react.PropTypes.string,\n  seatUserId: _react.PropTypes.string.isRequired,\n  isHost: _react.PropTypes.bool.isRequired,\n  size: _react.PropTypes.number.isRequired,\n  session: _react.PropTypes.shape({\n    on: _react.PropTypes.func.isRequired,\n    off: _react.PropTypes.func.isRequired,\n    publish: _react.PropTypes.func.isRequired,\n    subscribe: _react.PropTypes.func.isRequired\n  }).isRequired,\n  leaveSeat: _react.PropTypes.func.isRequired\n}, _temp2);\nexports.default = Seat;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/Seat.jsx\n// module id = 784\n// module chunks = 0\n//# sourceURL=webpack:///./src/components/Seat.jsx?");

/***/ })

})