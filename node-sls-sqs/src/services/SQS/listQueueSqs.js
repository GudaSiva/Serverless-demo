"use strict";

const { ListQueuesCommand } = require("@aws-sdk/client-sqs");

const { sqsClient } = require("../../utils/sqsCli");

module.exports.listQueueSqs = async () => {
  try {
    const data = await sqsClient.send(new ListQueuesCommand({}));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
