"use strict";
exports.__esModule = true;
exports.Banking = void 0;
var Banking = /** @class */ (function () {
  function Banking() {}
  Banking.prototype.deposite = function (balance) {};
  Banking.prototype.withdraw = function (change) {};
  Banking.prototype.printStatement = function () {
    var message = "";
    var today = new Date();
    message = "Date || Amoung || Balance \n" + today + " || 0 || 0";
    return message;
  };
  return Banking;
})();
exports.Banking = Banking;
