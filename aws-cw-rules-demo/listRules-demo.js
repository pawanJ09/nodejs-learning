var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-2'});
var cloudwatchevents = new AWS.CloudWatchEvents();
var params = {
  EventBusName: 'default'
};
cloudwatchevents.listRules(params, function(err, data) {
  if(err) console.log('Error Received: ', err);
  else console.log('Printing rules from callback: ', data);
  for(var rule of data.Rules) {
    console.log('Rule Name: ', rule.Name);
    console.log('Rule ARN: ', rule.Arn);
    if(rule.Arn.includes('15')) {
      console.log('Rule ARN 15 mins found !');
    }
  }
});

const listAllEventRules = async(cloudwatchevents, params) => {
  console.log('Calling listAllEventRules');
  var promiseObj = cloudwatchevents.listRules(params).promise();
  promiseObj.then(function(data) {
    console.log('Printing rules from promise: ', data);
  });

  var response = cloudwatchevents.listRules(params);
  console.log('Printing response: ', response);
  console.log('Printing rules from response: ', response.data);
}

listAllEventRules(cloudwatchevents, params);