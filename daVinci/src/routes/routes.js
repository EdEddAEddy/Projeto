import express from "express";

import {
  create,
  deleteContact,
  update,
  getContacts,
} from "../controllers/contato.controllers";
import {
  createTel,
  deleteTel,
  getTelByID,
  updateTel,
} from "../controllers/telefone.controlles";

const router = express.Router();

router.get("/contato", getContacts);
router.post("/contato", create);
router.put("/contato/:id", update);
router.delete("/contato/:id", deleteContact);
router.get("/telefone/:id", getTelByID);
router.post("/telefone", createTel);
router.put("/telefone/:id", updateTel);
router.delete("/telefone/:id", deleteTel);

export default router;
