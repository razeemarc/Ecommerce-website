"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.modifyItem = exports.removeItem = exports.addItem = exports.cartSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cartSlice = (0, _toolkit.createSlice)({
  name: "cart",
  initialState: {
    list: []
  },
  reducers: {
    addItem: function addItem(state, _ref) {
      var payload = _ref.payload;
      state.list = [].concat(_toConsumableArray(state.list), [_objectSpread({}, payload, {
        count: 1
      })]);
    },
    removeItem: function removeItem(state, _ref2) {
      var payload = _ref2.payload;
      //Finding Index of the product
      var index = state.list.findIndex(function (product) {
        return product.id === payload.id;
      }); //Remove Product From the list

      state.list = [].concat(_toConsumableArray(state.list.slice(0, index)), _toConsumableArray(state.list.slice(index + 1)));
    },
    modifyItem: function modifyItem(state, _ref3) {
      var payload = _ref3.payload;
      //Finding Index of the Product
      var index = state.list.findIndex(function (product) {
        return product.id === payload.id;
      }); //Updating the state

      state.list = [].concat(_toConsumableArray(state.list.slice(0, index)), [_objectSpread({}, state.list[index], {
        count: payload.count
      })], _toConsumableArray(state.list.slice(index + 1)));
    }
  }
});
exports.cartSlice = cartSlice;
var _cartSlice$actions = cartSlice.actions,
    addItem = _cartSlice$actions.addItem,
    removeItem = _cartSlice$actions.removeItem,
    modifyItem = _cartSlice$actions.modifyItem;
exports.modifyItem = modifyItem;
exports.removeItem = removeItem;
exports.addItem = addItem;
var _default = cartSlice.reducer;
exports["default"] = _default;