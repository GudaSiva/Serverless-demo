"use strict";
const { SendMessageCommand } =require("@aws-sdk/client-sqs");
const { sqsClient } =require("../../utils/sqsCli");

const params = {
    QueueUrl: 'https://sqs.ap-south-1.amazonaws.com/515563309455/QueueName1',
    DelaySeconds: 10,
    MessageBody: "test send message from nodejs app using aws sdk"
  };
  

module.exports.sendmessage = async () => {
    try {
      const data = await sqsClient.send(new SendMessageCommand(params));
      console.log("Success", data);
    } catch (err) {
      console.log("Error", err);
    }
};