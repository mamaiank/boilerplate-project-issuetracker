import mongoose from "mongoose";

const Schema = mongoose.Schema;
const issueSchema = new Schema(
  {
    issue_title: { type: String, required: true },
    issue_text: { type: String, required: true },
    created_by: { type: String, required: true },
    open: { type: Boolean, required: true },
    assigned_to: { type: String, required: false },
    status_text: { type: String, required: false },
  },
  { timestamps: { createdAt: "created_on", updatedAt: "updated_on" } }
);
const projectSchema = new Schema({
  projectName: { type: String, required: true },
  issues: [issueSchema],
});
const Issue = mongoose.model("issues", issueSchema);
const Project = mongoose.model("project", projectSchema);

export { Issue, Project };
