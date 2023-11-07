import { prisma } from "../services/prisma";

export const getContacts = async () => {
  try {
    const contacts = await prisma.contato.findMany({});
    return contacts;
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createContact = async (data) => {
  try {
    let body = {nome:data.nome, idade:parseInt(data.idade)} 
    const contact = await prisma.contato.create({
      data:body,
    });
    return contact;
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateContact = async (id, nome, idade) => {
  try {
    const updatedContact = await prisma.contato.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nome,
        idade,
      },
    });

    return updatedContact;
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteContact = async (id) => {
  try {
    const deletedContact = await prisma.contato.delete({
      where: {
        id: parseInt(id),
      },
    });
    return deletedContact;
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
