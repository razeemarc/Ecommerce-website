"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _cart = _interopRequireDefault(require("./reducer/cart"));

var _wishlist = _interopRequireDefault(require("./reducer/wishlist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _toolkit.configureStore)({
  reducer: {
    cart: _cart["default"],
    wish: _wishlist["default"]
  }
});

exports["default"] = _default;