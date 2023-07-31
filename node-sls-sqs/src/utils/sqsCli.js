const { SQSClient } = require("@aws-sdk/client-sqs");
const REGION = "ap-south-1";
const sqsClient = new SQSClient({ region: REGION });
module.exports = { sqsClient };
