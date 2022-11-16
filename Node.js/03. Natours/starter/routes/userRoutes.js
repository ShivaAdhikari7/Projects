const express = require('express');
const router = express.Router();
const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
} = require('../controllers/userControllers');

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
router.route('/').get(getAllUsers).post(createUser);

module.exports = router;
