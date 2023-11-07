import {
  createTel,
  updateTel,
  deleteTel,
  getTelByID,
} from "../models/telefone.models";

export const getTelByID = async (req, res) => {
  try {
    const { id } = req.params;

    const tel = await getTelByID(id);
    return res.status(200).json(tel);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createTel = async (req, res) => {
  try {
    const tel = await createTel(req.body);
    res.status(200).json(tel);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateTel = async (req, res) => {
  try {
    const { id } = req.params;
    const { idContato, numero } = req.body;
    const tel = await updateTel(id, idContato, numero);
    res.status(200).json(tel);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteTel = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteTel(id);
    res.status(204).json({});
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
