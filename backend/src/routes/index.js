const { Router } = require("express");

const userRouter = require('./users.routes.js')
const noteRouter = require('./notes.routes.js')
const tagRouter = require('./tags.routes.js')
const sessionRouter = require('./sessions.routes.js')

const routes = Router();

routes.use("/users", userRouter)
routes.use("/notes", noteRouter)
routes.use("/tags", tagRouter)
routes.use("/sessions", sessionRouter)

module.exports = routes;