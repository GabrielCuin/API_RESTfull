const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middleswares/ensureAuthenticated");

const { Router } = require("express");

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

//exporta este arquivo
module.exports = tagsRoutes;
