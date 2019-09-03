"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : {default: obj};}

function _instanceof(left, right) {if (right != null && typeof Symbol !== "undefined" && right[ Symbol.hasInstance ]) {return !!right[ Symbol.hasInstance ](left);} else {return left instanceof right;} }

function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};} return _typeof(obj);}

function _classCallCheck(instance, Constructor) {if (!_instanceof(instance, Constructor)) {throw new TypeError("Cannot call a class as a function");} }

function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[ i ]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);} }

function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor;}

function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;} return _assertThisInitialized(self);}

function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);}; return _getPrototypeOf(o);}

function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");} return self;}

function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");} subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}}); if (superClass) _setPrototypeOf(subClass, superClass);}

function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p; return o;}; return _setPrototypeOf(o, p);}

function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});} else {obj[ key ] = value;} return obj;}

var ClickOutside =
  /*#__PURE__*/
  function(_React$Component) {
    _inherits(ClickOutside, _React$Component);

    function ClickOutside() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ClickOutside);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[ _key ] = arguments[ _key ];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClickOutside)).call.apply(_getPrototypeOf2, [ this ].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "container", _react.default.createRef());

      _defineProperty(_assertThisInitialized(_this), "a", false);

      _defineProperty(_assertThisInitialized(_this), "handleClick", function(event) {
        if (!_this.a) {
          var container = _this.container.current;
          var target = event.target;
          var onClickOutside = _this.props.onClickOutside;

          if (container && container === target || container && !container.contains(target)) {
            onClickOutside(event);
          }
        } else {
          _this.a = false;
        }
      });

      return _this;
    }

    _createClass(ClickOutside, [ {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
          document.addEventListener('touchend', this.handleClick, true);
        } else {
          document.addEventListener('click', this.handleClick, true);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
          document.removeEventListener('touchmove', function() {
            this.a = true;
          }, true);
          document.removeEventListener('touchend', this.handleClick, true);
        } else {
          document.removeEventListener('click', this.handleClick, true);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
        return _react.default.createElement("div", {
          className: className,
          ref: this.container
        }, children);
      }
    } ]);

    return ClickOutside;
  }(_react.default.Component);

ClickOutside.propTypes = {
  onClickOutside: _propTypes.default.func.isRequired,
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string
};
var _default = ClickOutside;
exports.default = _default;

