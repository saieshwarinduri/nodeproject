const asyncHandler = require("express-async-handler");
const Books = require("../models/books");

const getData = asyncHandler(async (req, res) => {
  const books = await Books.find();
  res.status(200).json(books);
});

const getDataById = asyncHandler(async (req, res) => {
  const books = await Books.findById(req.params.id);
  console.log(books);
  if (!books) {
    res.status(404).json({ message: "notfound" });
  }
  res.status(200).json(books);
});

const putData = asyncHandler(async (req, res) => {
  const books = await Books.findById(req.params.id);
  if (!books) {
    res.status(400);
    throw new Error("not found");
  }
  const updateBook = await Books.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(201).json(updateBook);
});
const postData = asyncHandler(async (req, res) => {
  const { name, age, number } = req.body;
  if (!name || !age) {
    res.status(400);
    throw new Error("THis is mandatory");
  }
  const contact = await Books.create({
    name,
    age,
  });
  res.status(400).json(contact);
});
const deleteData = asyncHandler(async (req, res) => {
  const books = await Books.findById(req.params.id);
  if (!books) {
    res.status(400);
    throw new Error("not found");
  } else {
    const remove = await Books.remove();
    res.status(200).json(remove);
  }
});

module.exports = { getData, putData, postData, deleteData, getDataById };
