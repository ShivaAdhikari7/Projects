const Tour = require("./../models/tourModel");

const getAllTours = async (req, res) => {
  try {
    const queryObj = { ...req.query };

    excludedFields = ["page", "sort", "limit"];

    excludedFields.forEach((el) => {
      delete queryObj[el];
    });

    const query = Tour.find(queryObj);
    const tours = await query;
    res.status(200).json({
      status: "success",
      data: {
        result: tours.length,
        tours,
      },
    });
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: err,
    });
  }
};

const getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: { tour },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Data deleted successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  createTour,
  deleteTour,
  getAllTours,
  updateTour,
  getTour,
};
