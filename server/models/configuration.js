import mongoose from "mongoose";

const ConfigurationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  data: [[String]],
  remark: String,
});

export const ConfigurationModel = mongoose.model(
  "configuration",
  ConfigurationSchema
);
