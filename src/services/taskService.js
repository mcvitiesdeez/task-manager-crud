const prisma = require("../db/prismaClient");

const getTasks = (userId) => {
  return prisma.task.findMany({ where: { userId } });
};

const getTask = (userId, taskId) => {
  return prisma.task.findFirst({ where: { id: taskId, userId } });
};

const createTask = (userId, title, body) => {
  return prisma.task.create({
    data: { title, body, userId },
  });
};

const updateTask = (userId, taskId, data) => {
  return prisma.task.updateMany({
    where: { id: taskId, userId },
    data,
  });
};

const deleteTask = (userId, taskId) => {
  return prisma.task.deleteMany({
    where: { id: taskId, userId },
  });
};

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
