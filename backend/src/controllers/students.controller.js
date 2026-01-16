const repo = require("../repositories/students.repo");
const ApiError = require("../utils/ApiError");
const { ok, created } = require("../utils/response");

exports.getAll = async (req, res) => {
  const data = await repo.getAll();
  return ok(res, data);
};

exports.getById = async (req, res) => {
  const id = Number(req.params.id);
  const student = await repo.getById(id);
  if (!student) throw new ApiError(404, "Student not found");
  return ok(res, student);
};

exports.create = async (req, res) => {
  const student = await repo.create(req.body);
  return created(res, student, "Student created");
};

exports.update = async (req, res) => {
  const id = Number(req.params.id);
  const updated = await repo.update(id, req.body);
  if (!updated) throw new ApiError(404, "Student not found");
  return ok(res, updated, "Student updated");
};

exports.remove = async (req, res) => {
  const id = Number(req.params.id);
  const deleted = await repo.remove(id);
  if (!deleted) throw new ApiError(404, "Student not found");
  return ok(res, deleted, "Student deleted");
};
