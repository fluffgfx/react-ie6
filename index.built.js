'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var img = require('./ieframe.png'); //1280x944
console.log('ie6frame');

var IE6Frame = function IE6Frame(_ref) {
  var title = _ref.title,
      url = _ref.url,
      children = _ref.children,
      size = _ref.size;
  return _react2.default.createElement(
    'div',
    {
      style: {
        width: 1280 * size + 'px',
        height: 944 * size + 'px',
        backgroundImage: 'url(' + img + ')',
        position: 'relative',
        backgroundSize: 'cover'
      },
      ref: function ref(e) {
        console.log(title, url, children, size);
      } },
    _react2.default.createElement(
      'span',
      {
        style: {
          position: 'absolute',
          top: 3 * size + 'px',
          left: 24 * size + 'px',
          fontSize: 16 * size + 'px',
          color: 'white'
        } },
      title,
      ' - Internet Explorer 6'
    ),
    _react2.default.createElement(
      'span',
      {
        style: {
          position: 'absolute',
          top: 93 * size + 'px',
          left: 75 * size + 'px',
          fontSize: 13 * size + 'px'
        } },
      url
    ),
    _react2.default.createElement(
      'div',
      {
        style: {
          position: 'absolute',
          top: 114 * size + 'px',
          left: 1 * size + 'px',
          width: 1259 * size + 'px',
          height: 806 * size + 'px',
          overflow: 'scroll'
        } },
      children
    )
  );
};

IE6Frame.defaultProps = {
  title: 'Welcome to IE6',
  url: 'http://example.com',
  size: 1
};

exports.default = IE6Frame;
