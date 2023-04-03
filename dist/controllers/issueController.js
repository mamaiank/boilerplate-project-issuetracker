"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _models = require("../models/models");
var _helpers = _interopRequireDefault(require("../utils/helpers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var issueController = {
  viewIssues: function () {
    var _viewIssues = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
      var _req$query, open, _id, issue_title, issue_text, created_by, assigned_to, status_text, projectName, params, filteredParams, filteredParamsLength;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _req$query = req.query, open = _req$query.open, _id = _req$query._id, issue_title = _req$query.issue_title, issue_text = _req$query.issue_text, created_by = _req$query.created_by, assigned_to = _req$query.assigned_to, status_text = _req$query.status_text;
            projectName = req.params.project;
            params = {
              open: open,
              _id: _id,
              issue_title: issue_title,
              issue_text: issue_text,
              created_by: created_by,
              assigned_to: assigned_to,
              status_text: status_text
            };
            if (typeof params.open === "string") {
              params.open = _helpers["default"].convertStringToBoolean(open);
            }
            filteredParams = _helpers["default"].removeUndefinedAndEmptyStringValuesFromObj(params);
            filteredParamsLength = Object.keys(filteredParams).length;
            _context.next = 8;
            return _models.Project.findOne({
              projectName: projectName
            }, function (err, docs) {
              var issueDocs = docs.issues;
              if (!filteredParamsLength) {
                if (Array.isArray(issueDocs) && issueDocs.length) {
                  return res.send(issueDocs);
                }
                return res.send([]);
              }
              var filteredIssueList = docs.issues.filter(function (issue) {
                var innerLoopCount = 0;
                for (var key in filteredParams) {
                  if (key === "_id") {
                    if (JSON.stringify(issue[key]) !== JSON.stringify(filteredParams[key])) {
                      innerLoopCount = 0;
                      return false;
                    }
                  } else {
                    if (issue[key] !== filteredParams[key]) {
                      innerLoopCount = 0;
                      return false;
                    }
                  }
                  if (innerLoopCount >= filteredParamsLength - 1) {
                    return true;
                  }
                  innerLoopCount += 1;
                }
              });
              if (Array.isArray(filteredIssueList) && filteredIssueList.length) {
                return res.send(filteredIssueList);
              } else {
                return res.send([]);
              }
            });
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function viewIssues(_x, _x2) {
      return _viewIssues.apply(this, arguments);
    }
    return viewIssues;
  }(),
  createIssue: function createIssue(req, res) {
    var _req$body = req.body,
      issue_title = _req$body.issue_title,
      issue_text = _req$body.issue_text,
      created_by = _req$body.created_by,
      _req$body$assigned_to = _req$body.assigned_to,
      assigned_to = _req$body$assigned_to === void 0 ? "" : _req$body$assigned_to,
      _req$body$status_text = _req$body.status_text,
      status_text = _req$body$status_text === void 0 ? "" : _req$body$status_text;
    var projectName = req.params.project;
    if (!issue_title || !issue_text || !created_by) {
      return res.json({
        error: "required field(s) missing"
      });
    }
    var currentTime = new Date();
    var issueToBeAdded = new _models.Issue({
      issue_title: issue_title,
      issue_text: issue_text,
      created_by: created_by,
      assigned_to: assigned_to,
      status_text: status_text,
      open: true,
      created_on: currentTime,
      updated_on: currentTime
    });
    _models.Project.find({
      projectName: projectName
    }, function (err, docs) {
      if (!docs.length) {
        var projectToBeCreated = new _models.Project({
          projectName: projectName
        });
        projectToBeCreated.issues.push(issueToBeAdded);
        projectToBeCreated.save(function (err, data) {
          if (err) {
            return console.error(err);
          } else {
            res.json(data);
          }
        });
      } else {
        docs[0]["issues"].push(issueToBeAdded);
        docs[0].save(function (err, data) {
          if (err) {
            res.send("An error occured while creating the issue");
          } else {
            res.json(issueToBeAdded);
          }
        });
      }
    });
  },
  editIssue: function editIssue(req, res) {
    var _req$body2 = req.body,
      _id = _req$body2._id,
      issue_title = _req$body2.issue_title,
      issue_text = _req$body2.issue_text,
      created_by = _req$body2.created_by,
      assigned_to = _req$body2.assigned_to,
      status_text = _req$body2.status_text,
      _req$body2$open = _req$body2.open,
      open = _req$body2$open === void 0 ? undefined : _req$body2$open;
    var params = {
      issue_title: issue_title,
      issue_text: issue_text,
      created_by: created_by,
      assigned_to: assigned_to,
      status_text: status_text,
      open: open
    };
    var filteredParams = _helpers["default"].removeUndefinedAndEmptyStringValuesFromObj(params);
    var projectName = req.params.project;
    if (!_id) {
      return res.json({
        error: "missing _id"
      });
    } else if (_helpers["default"].checkIsEmptyObject(filteredParams)) {
      return res.json({
        error: "no update field(s) sent",
        _id: _id
      });
    } else {
      _models.Project.findOne({
        projectName: projectName
      }, function (err, docs) {
        if (err || !docs) {
          return res.json({
            error: "could not update",
            _id: _id
          });
        }
        var issueToBeUpdated = docs.issues.id(_id);
        if (!issueToBeUpdated) {
          return res.json({
            error: "could not update",
            _id: _id
          });
        }
        issueToBeUpdated.issue_title = issue_title || issueToBeUpdated.issue_title;
        issueToBeUpdated.issue_text = issue_text || issueToBeUpdated.issue_text;
        issueToBeUpdated.created_by = created_by || issueToBeUpdated.created_by;
        issueToBeUpdated.assigned_to = assigned_to || issueToBeUpdated.assigned_to;
        issueToBeUpdated.status_text = status_text || issueToBeUpdated.status_text;
        issueToBeUpdated.open = open || issueToBeUpdated.open;
        docs.save(function (err, data) {
          if (err || !data) {
            return res.json({
              error: "could not update",
              _id: _id
            });
          } else {
            return res.json({
              result: "successfully updated",
              _id: _id
            });
          }
        });
      });
    }
  },
  deleteIssue: function () {
    var _deleteIssue = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
      var _id, projectName;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _id = req.body._id;
            projectName = req.params.project;
            if (_id) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return", res.json({
              error: "missing _id"
            }));
          case 4:
            _models.Project.findOne({
              projectName: projectName
            }, function (err, docs) {
              var projectHasSelectedIssue = docs.issues.filter(function (obj) {
                return obj["_id"].toString() === _id;
              }).length;
              if (err || !projectHasSelectedIssue) {
                return res.json({
                  error: "could not delete",
                  _id: _id
                });
              }
              var updatedListOfIssues = docs.issues.filter(function (obj) {
                return obj["_id"].toString() !== _id;
              });
              docs.issues = updatedListOfIssues;
              docs.save(function (err, data) {
                if (err) {
                  return res.json({
                    error: "could not delete",
                    _id: _id
                  });
                }
                res.json({
                  result: "successfully deleted",
                  _id: _id
                });
              });
            });
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function deleteIssue(_x3, _x4) {
      return _deleteIssue.apply(this, arguments);
    }
    return deleteIssue;
  }()
};
var _default = issueController;
exports["default"] = _default;