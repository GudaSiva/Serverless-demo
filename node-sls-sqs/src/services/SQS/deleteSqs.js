"use strict";

const { DeleteQueueCommand } = require("@aws-sdk/client-sqs");

const { sqsClient } = require("../../utils/sqsCli");

const params = {
  QueueUrl: "https://sqs.ap-south-1.amazonaws.com/515563309455/new-queue",
};

module.exports.deleteSqs = async () => {
  try {
    const data = await sqsClient.send(new DeleteQueueCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
