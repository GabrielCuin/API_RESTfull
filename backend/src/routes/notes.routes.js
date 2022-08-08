const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../middleswares/ensureAuthenticated");

const { Router } = require("express");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated);

notesRoutes.get("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

//exporta este arquivo
module.exports = notesRoutes;
