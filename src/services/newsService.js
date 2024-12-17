import newsModel from '../models/newsModel';

const getAllNews = async () => {
  return await newsModel.fetchNews();
};

export default {
  getAllNews
};