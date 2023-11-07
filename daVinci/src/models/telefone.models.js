import { prisma } from "../services/prisma";

export const getTelByID = async (id) => {
  try {
    const tel = await prisma.telefone.findMany({
      where: {
        idContato: {
          in: [parseInt(id)]
        }
      },
    });
    return tel.flatMap((t) => t.numero);
  } catch (error) {
    console.log(error);
  }
};

export const createTel = async (data) => {
  try {
    const tel = await prisma.telefone.create({
      data,
    });
    return tel;
  } catch (error) {
    console.log(error);
  }
};

export const updateTel = async (id, idContato, numero) => {
  try {
    const updatedTel = await prisma.telefone.update({
      where: {
        id: parseInt(id),
      },
      data: {
        idContato,
        numero,
      },
    });
    return updatedTel;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTel = async (id) => {
  try {
    const deletedTel = await prisma.telefone.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deletedTel;
  } catch (error) {
    console.log(error);
  }
};
