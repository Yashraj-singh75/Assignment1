const express = require("express");

const reviewRouter = express.Router();

const reviewController = require("../controller/reviewController");

const validationMiddleware = require("../middlewares/validationMiddleware");

const {
  createReviewSchema,
  getReviewsSchema,
} = require("../validationSchema/reviewValidationSchema");

reviewRouter.post(
  "/createReview",
  validationMiddleware(createReviewSchema),
  reviewController.createReview,
);

reviewRouter.get(
  "/getReviews",
  validationMiddleware(getReviewsSchema, "query"),
  reviewController.getReviews,
);

module.exports = reviewRouter; 