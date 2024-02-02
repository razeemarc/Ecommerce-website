"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.removeItemWishList = exports.addItemWishList = exports.wishSlice = void 0;

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
    },
    removeItemWishList: function removeItemWishList(state, _ref2) {
      var payload = _ref2.payload;
      //Finding Index of the product
      var index = state.list.findIndex(function (product) {
        return product.id === payload.id;
      }); //Remove Product From the list

      state.list = [].concat(_toConsumableArray(state.list.slice(0, index)), _toConsumableArray(state.list.slice(index + 1)));
    }
  }
});
exports.wishSlice = wishSlice;
var _wishSlice$actions = wishSlice.actions,
    addItemWishList = _wishSlice$actions.addItemWishList,
    removeItemWishList = _wishSlice$actions.removeItemWishList;
exports.removeItemWishList = removeItemWishList;
exports.addItemWishList = addItemWishList;
var _default = wishSlice.reducer;
exports["default"] = _default;