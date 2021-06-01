var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-2'});
var cloudwatchevents = new AWS.CloudWatchEvents();
var params = {
  EventBusName: 'default'
};
cloudwatchevents.listRules(params, function(err, data) {
  if(err) console.log('Error Received: ', err);
  else console.log('Data Received: ', data);
  for(var rule of data.Rules) {
    console.log('Rule Name: ', rule.Name);
    console.log('Rule ARN: ', rule.Arn);
    if(rule.Arn.includes('15')) {
      console.log('Rule ARN 15 mins found !');
    }
  }
});