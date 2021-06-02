var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-2'});
var cloudwatchevents = new AWS.CloudWatchEvents();
var trigger = true;
var params = {
  EventBusName: 'default'
};
var cwListRulePromise = cloudwatchevents.listRules(params).promise();
cwListRulePromise.then((data) => {
  console.log('Rules fetched: ', data);
  for(var rule of data.Rules) {
    if(rule.Name.includes('5')) {
      var ruleParams = {
        Name: rule.Name
      }
      if(trigger === false) {
        var cwDisableRulePromise = cloudwatchevents.disableRule(ruleParams).promise();
        cwDisableRulePromise.then(() => console.log('Rule disabled: ', rule.Name));
        cwDisableRulePromise.catch((err) => {
          console.log('Error encountered when disabling rule: ', rule.Name, err);
          process.exit(10);
        });
      } else {
        var cwEnableRulePromise = cloudwatchevents.enableRule(ruleParams).promise();
        cwEnableRulePromise.then(console.log('Rule enabled: ', rule.Name));
        cwEnableRulePromise.catch((err) => {
          console.log('Error encountered when enabling rule: ', rule.Name, err);
          process.exit(10);
        });
      }
    }
  }
});
cwListRulePromise.catch((err) => console.log('Error encountered when fetching rules: ', err));