"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Project = exports.Issue = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Schema = _mongoose["default"].Schema;
var issueSchema = new Schema({
  issue_title: {
    type: String,
    required: true
  },
  issue_text: {
    type: String,
    required: true
  },
  created_by: {
    type: String,
    required: true
  },
  open: {
    type: Boolean,
    required: true
  },
  assigned_to: {
    type: String,
    required: false
  },
  status_text: {
    type: String,
    required: false
  }
}, {
  timestamps: {
    createdAt: "created_on",
    updatedAt: "updated_on"
  }
});
var projectSchema = new Schema({
  projectName: {
    type: String,
    required: true
  },
  issues: [issueSchema]
});
var Issue = _mongoose["default"].model("issues", issueSchema);
exports.Issue = Issue;
var Project = _mongoose["default"].model("project", projectSchema);
exports.Project = Project;