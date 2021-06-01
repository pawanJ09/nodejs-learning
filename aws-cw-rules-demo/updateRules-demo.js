var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-2'});
var cloudwatchevents = new AWS.CloudWatchEvents();
var params = {
  EventBusName: 'default'
};
cloudwatchevents.listRules(params, (err, data) => {
  if(err) console.log('Error Received: ', err);
  else console.log('Data Received: ', data);
  for(var rule of data.Rules) {
    if(rule.Arn.includes('15')) {
      var ruleParams = {
        Name: rule.Name
      }
      cloudwatchevents.disableRule(ruleParams, (err, data) => {
        if (err) {
          console.log('Error received when updating rule: ', err);
        } else {
          console.log('Successfully updated provided rule: ', data);
        }
      });
    }
  }
});