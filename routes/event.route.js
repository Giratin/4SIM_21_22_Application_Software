const router = require("express").Router();
const eventController = require("../controllers/event.controller");
/**
 * @Path /event
 */
// lister les evenements
router.get("/", eventController.listEvents)

router.route("/add")
    .post(eventController.addEvents)
    .get(eventController.showFormEvent)

router.get("/delete/:id", eventController.deleteEvents)

module.exports = router;