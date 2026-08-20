const reviewModel = require("../model/reviewModel");

const createReview = async (data) => {
  const review = await reviewModel.create(data);
  return review;
};

const getReviews = async (query = {}) => {
  const { status, minRating, page = 1, limit = 10 } = query;
  const filter = {};

  if (status) {
    filter.status = status;
  }
  if (minRating) {
    filter.rating = { $gte: Number(minRating) };
  }

  const skip = (Number(page) - 1) * Number(limit);
  const reviews = await reviewModel
    .find(filter)
    .skip(skip)
    .limit(Number(limit));

  return reviews;
};

module.exports = {
  createReview,
  getReviews,
};
