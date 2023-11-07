import {
  createContact,
  updateContact,
  deleteContact,
  getContacts,
} from "../models/contato.models";
import { createTel } from "../models/telefone.models";

export const getContacts = async (req, res) => {
  try {
    const contacts = await getContacts();
    req.res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const create = async (req, res) => {
  try {
    const contact = await createContact(req.body);
    req.body.numeros.forEach(async (numero) => {
      const body = await createTel({ idContato: contact.id, numero: numero });
    });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, idade } = req.body;
    const updatedContact = await updateContact(id, nome, idade);
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteContact(id);
    res.status(204).json({});
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
