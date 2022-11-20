const Tour = require("./../models/tourModel");
const APIFeatures = require("./../utils/apiFeatures");
const aliasTours = (req, res, next) => {
  (req.query.limit = "5"),
    (req.query.sort = "-ratingsAverage,price"),
    (req.query.fields =
      "name,difficulty,price,ratingsAverage,summary,description");
  next();
};

const getAllTours = async (req, res) => {
  try {
    //1A) Filtering:
    // const queryObj = { ...req.query };

    // const excludeFields = ["sort", "page", "fields", "limit"];

    // excludeFields.forEach((el) => delete queryObj[el]);

    // // 1B) Advanced Filtering:

    // let queryStr = JSON.stringify(queryObj);

    // queryStr = queryStr.replace(/\b(gt|lt|gte|lte)\b/g, (match) => `$${match}`);

    // const filteredQuery = JSON.parse(queryStr);

    // let query = Tour.find(filteredQuery);

    // if (req.query.sort) {
    //   const sortBy = req.query.sort.split(",").join("");

    //   query = query.sort(sortBy);
    // } else {
    //   query = query.sort("-createdAt");
    // }

    // if (req.query.fields) {
    //   const fields = req.query.fields.split(",").join(" ");

    //   query = query.select(fields);
    // } else {
    //   query = query.select("-__v");
    // }

    // // Pagination:
    // const page = req.query.page * 1 || 1;
    // const limit = req.query.limit * 1 || 100;

    // const skip = (page - 1) * limit;

    // query = query.skip(skip).limit(limit);

    // if (req.query.page) {
    //   const numTours = await Tour.countDocuments();
    //   if (skip >= numTours) throw new Error("Page does not exist");
    // }

    const features = new APIFeatures(Tour.find(), req.query);

    features.filter().sort().limitFields().paginate();
    const tours = await features.query;

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
      message: err.message,
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
  aliasTours,
};
