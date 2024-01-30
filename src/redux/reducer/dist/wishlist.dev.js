"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.addItemWishList = exports.wishSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var wishSlice = (0, _toolkit.createSlice)({
  name: 'wishlist',
  initialState: {
    list: []
  },
  reducers: {
    addItemWishList: function addItemWishList(state, _ref) {
      var payload = _ref.payload;
      state.list = [].concat(_toConsumableArray(state.list), [payload]);
    }
  }
});
exports.wishSlice = wishSlice;
var addItemWishList = wishSlice.actions.addItemWishList;
exports.addItemWishList = addItemWishList;
var _default = wishSlice.reducer;
exports["default"] = _default;