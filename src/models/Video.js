import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
});

const video = {
  title: "Heki",
  description: "lalalaa",
  createdAt: 12121212,
  hashtags: ["#hi", "mongo"],
  meta: {
    views: Number,
    rating: Number,
  },
};

const movieModel = mongoose.model("Video", videoSchema);
export default movieModel;
