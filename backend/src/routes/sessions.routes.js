const Router = require("express");

const SessionsController = require("../controllers/SessionsControler");
const sessionsController = new SessionsController();

const sessionRotes = Router();
sessionRotes.post("/", sessionsController.create);

module.exports = sessionRotes;