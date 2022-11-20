const express = require("express");

const router = express.Router();

const {
  getAllTours,
  getTour,
  createTour,
  deleteTour,
  updateTour,
  aliasTours,
} = require("../controllers/tourControllers");

router.route("/top-5-cheap").get(aliasTours, getAllTours);
router.route("/").get(getAllTours).post(createTour);

router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
