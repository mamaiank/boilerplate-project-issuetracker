"use strict";

var issueController = require("../controllers/issueController")["default"];
module.exports = function (app) {
  app.route("/api/issues/:project").get(issueController.viewIssues).post(issueController.createIssue).put(issueController.editIssue)["delete"](issueController.deleteIssue);
};