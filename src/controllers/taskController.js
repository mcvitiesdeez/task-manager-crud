const taskService = require("../services/taskService");

const getTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.getTasks(req.user.id);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

const getTask = async (req, res, next) => {
  try {
    const task = await taskService.getTask(req.user.id, req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { title, body } = req.body;
    const task = await taskService.createTask(req.user.id, title, body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const updated = await taskService.updateTask(
      req.user.id,
      req.params.id,
      req.body
    );
    if (updated.count === 0)
      return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task updated" });
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const deleted = await taskService.deleteTask(req.user.id, req.params.id);
    if (deleted.count === 0)
      return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
