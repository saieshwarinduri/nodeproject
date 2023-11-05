const express = require("express");
const router = express.Router();
const {
  getData,
  postData,
  putData,
  getDataById,
  deleteData,
} = require("../controllers/controllers");

router.route("/").get(getData).post(postData);
router.route("/post").post(postData);

router.route("/:id").get(getDataById).delete(deleteData).put(putData);

module.exports = router;
