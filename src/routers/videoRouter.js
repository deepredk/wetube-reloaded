import express from "express";
import { upload, watch, getEdit, postEdit, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit")
  .get(getEdit)
  .post(postEdit);

export default videoRouter;
