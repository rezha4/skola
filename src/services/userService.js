const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getUser(id) {
  return await prisma.user.findUnique({ where: { id } });
}

async function getAllUsers() {
  return await prisma.user.findMany();
}

async function postUser(data) {
  return await prisma.user.create({ data });
}

async function putUser(id, data) {
  return await prisma.user.update({ where: { id }, data });
}

async function deleteUser(id) {
  return await prisma.user.delete({ where: { id } });
}

module.exports = { getUser, postUser, putUser, deleteUser, getAllUsers };
