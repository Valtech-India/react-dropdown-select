(exports.__esModule = !0),
(exports.getProp = exports.getByPath = exports.isEqual = exports.debounce = exports.hexToRGBA = exports.valueExistInSelected = void 0);
const valueExistInSelected = function(a, b, c) {
  return !!b.find(b => {
    return getByPath(b, c.valueField) === a;
  });
};
exports.valueExistInSelected = valueExistInSelected;
const hexToRGBA = function(a, b) {
  const c = parseInt(a.slice(1, 3), 16);

  const d = parseInt(a.slice(3, 5), 16);

  const e = parseInt(a.slice(5, 7), 16);
  return `rgba(${c}, ${d}, ${e}${b && `, ${b}`})`;
};
exports.hexToRGBA = hexToRGBA;
const debounce = function(a, b) {
  void 0 === b && (b = 0);
  let c;
  return function() {
    for (var d = arguments.length, e = Array(d), f = 0; f < d; f++) e[ f ] = arguments[ f ];
    c && clearTimeout(c),
    (c = setTimeout(() => {
      a(...e), (c = null);
    }, b));
  };
};
exports.debounce = debounce;
const isEqual = function(c, a) {
const objc = {
    value: c[ 0 ].value
}
  const obja = {
    value: a[ 0 ].value
  };
  return JSON.stringify(objc) === JSON.stringify(obja);
};
exports.isEqual = isEqual;
var getByPath = function(a, b) {
  return b
    ? b.split(".").reduce((a, b) => {
      return a[ b ];
    }, a)
    : void 0;
};
exports.getByPath = getByPath;
var getProp = function(a, b, c) {
  if (!b) return a;
  const d = Array.isArray(b)
    ? b
    : b.split(".").filter(a => {
      return a.length;
    });
  return d.length ? getProp(a[ d.shift() ], d, c) : void 0 === a ? c : a;
};
exports.getProp = getProp;
