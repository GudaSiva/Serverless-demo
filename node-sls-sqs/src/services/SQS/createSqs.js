"use strict";

const { CreateQueueCommand } = require("@aws-sdk/client-sqs");

const { sqsClient } = require("../../utils/sqsCli");

const params = {
  QueueName: "QueueName1",
  Attributes: {
    DelaySeconds: "60",
    MessageRetentionPeriod: "86400",
  },
};

module.exports.createSqs= async () => {
  try {
    const data = await sqsClient.send(new CreateQueueCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
