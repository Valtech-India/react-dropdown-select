(exports.__esModule = !0), (exports.default = void 0);
const _react = _interopRequireDefault(require("react"));

const _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a };
}

function _assertThisInitialized(a) {
  if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}

function _inheritsLoose(a, b) {
  (a.prototype = Object.create(b.prototype)), (a.prototype.constructor = a), (a.__proto__ = b);
}

function _defineProperty(a, b, c) {
  return (
    b in a
      ? Object.defineProperty(a, b, {
        value: c,
        enumerable: !0,
        configurable: !0,
        writable: !0
      })
      : (a[ b ] = c),
    a
  );
}
const ClickOutside = /* #__PURE__ */ (function(a) {
  function b() {
    for (var b, c = arguments.length, d = Array(c), e = 0; e < c; e++) d[ e ] = arguments[ e ];
    return (
      (b = a.call(...[ this ].concat(d)) || this),
      _defineProperty(_assertThisInitialized(b), "container", _react.default.createRef()),
      _defineProperty(_assertThisInitialized(b), "handleClick", a => {
        const c = b.container.current;

        const d = a.target;

        const e = b.props.onClickOutside;
        ((c && c === d) || (c && !c.contains(d))) && e(a);
      }),
      b
    );
  }
  _inheritsLoose(b, a);
  const c = b.prototype;
  return (
    (c.componentDidMount = function componentDidMount() {
      if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        document.addEventListener("touchend", this.handleClick, !0);
      } else {
        document.addEventListener("click", this.handleClick, !0);
      }
    }),
    (c.componentWillUnmount = function componentWillUnmount() {
      if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        document.removeEventListener("touchend", this.handleClick, !0);
      } else {
        document.removeEventListener("click", this.handleClick, !0);
      }
    }),
    (c.render = function render() {
      const a = this.props;

      const b = a.className;

      const c = a.children;
      return _react.default.createElement("div", { className: b, ref: this.container }, c);
    }),
    b
  );
}(_react.default.Component));

const _default = ClickOutside;
exports.default = _default;
