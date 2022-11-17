const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
const checkID = (req, res, next, val) => {
  if (val * 1 > tours.length) {
    return res.status(400).json({
      status: "fail",
      message: "Invalid Id",
    });
  }
  next();
};

const checkBody = (req, res, next) => {
  const { name, duration, difficulty } = req.body;
  if (!name || !duration || !difficulty) {
    return res.status(400).json({
      status: "Bad Request",
      message: "Fill all the data that is required to create the tour",
    });
  }
  next();
};

const getAllTours = (req, res) => {
  res.status(200).json({
    requestTime: req.requestTime,
    status: "success",
    result: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

const updateTour = (req, res) => {
  const id = req.params.id * 1;
  const { duration } = req.body;

  const tour = tours.find((el) => el.id === id);

  tour.duration = duration;

  res.status(200).json({
    message: "success",
    data: {
      tour,
    },
  });
};

const deleteTour = (req, res) => {
  res.status(204).json({
    status: "sucess",
    data: null,
  });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1] + 1;
  const newTour = Object.assign(req.body, { id: newId });

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: { tour: newTour },
      });
    }
  );
};

module.exports = {
  createTour,
  deleteTour,
  getAllTours,
  updateTour,
  getTour,
  checkID,
  checkBody,
};
