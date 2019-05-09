const functions = require("firebase-functions");
const request = require("request");

const slackWebhook =
  "https://hooks.slack.com/services/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";

// Prints Hello World in Browser
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

// Posts Hello World to Slack
exports.helloSlack = functions.https.onRequest((r, response) => {
  response.send("Successfully posted message to slack!");
  debugger;
  return request.post(slackWebhook, {
    json: {
      text: `Hello Slack, this is Recall!`
    }
  });
});

// Posts Daily TIL Form
exports.recallDaily = functions.https.onRequest((r, response) => {
  response.send("Successfully posted message to slack!");
  debugger;
  return request.post(slackWebhook, {
    json: {
      text: `Hello Slack, this is Recall!`
    }
  });
});

// Posts Weekly Digest Poll
exports.recallWeekly = functions.https.onRequest((r, response) => {
  response.send("Successfully posted message to slack!");
  debugger;
  return request.post(slackWebhook, {
    json: {
      text: `Hello Slack, this is Recall!`
    }
  });
});

// Posts Monthly Digest Poll
exports.recallMonthly = functions.https.onRequest((r, response) => {
  response.send("Successfully posted message to slack!");
  debugger;
  return request.post(slackWebhook, {
    json: {
      text: `Hello Slack, this is Recall!`
    }
  });
});

// Posts Random Digest Poll
exports.recallRandom = functions.https.onRequest((r, response) => {
  response.send("Successfully posted message to slack!");
  debugger;
  return request.post(slackWebhook, {
    json: {
      text: `Hello Slack, this is Recall!`
    }
  });
});