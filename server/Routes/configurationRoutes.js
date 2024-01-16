import express from "express";
import { ConfigurationModel } from "../models/configuration.js";

const Router = express.Router();

// to get specific data
Router.route("/configurations/:id").get(async (req, res, next) => {
  const configuration_id = req.params.id;
  console.log(configuration_id);

  try {
    const configuration = await ConfigurationModel.findOne({
      id: configuration_id,
    }).select("-id -remark -_id");
    console.log(configuration);
    if (!configuration) {
      throw new Error("configuration not found");
    }
    res.status(200).json({
      success: true,
      configuration,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: true,
      message: "Internal Server Error",
    });
  }
});

//if you want to create that configuration
Router.route("/configurations/create").post(async (req, res, next) => {
  const { id, data, remark } = req.body;

  if (!id || !data || !remark) {
    throw new Error("Please Enter All Fields");
  }

  try {
    const configuration = await ConfigurationModel.create({
      id,
      data,
      remark,
    });
    res.status(200).json({
      success: true,
      configuration,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: true,
      message: "Internal Server Error",
    });
  }
});

//to update specific data
Router.route("/configurations/:id").put(async (req, res, next) => {
  const config_id = req.params.id;
  const { remark } = req.body;
  try {
    const configuration = await ConfigurationModel.updateOne(
      { id: config_id },
      { remark }
    );
    if (!configuration) {
      throw new Error("configuration not found");
    }
    res.status(200).json({
      success: true,
      message: "Success",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: true,
      message: "Internal Server Error",
    });
  }
});

export default Router;
