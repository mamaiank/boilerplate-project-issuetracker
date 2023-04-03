"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Helper = {
  removeUndefinedAndEmptyStringValuesFromObj: function removeUndefinedAndEmptyStringValuesFromObj(obj) {
    Object.keys(obj).forEach(function (k) {
      return !obj[k] && obj[k] !== false && delete obj[k];
    });
    return obj;
  },
  convertStringToBoolean: function convertStringToBoolean(string) {
    return string.toLowerCase() === "true" ? true : false;
  },
  checkIsEmptyObject: function checkIsEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
};
var _default = Helper;
exports["default"] = _default;