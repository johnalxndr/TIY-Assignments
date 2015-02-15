var assert = require('assert');
var events = require('../apis/github/users/johnalxndr/events.json');
var _ = require('lodash');

var pushEvents = events.filter(function(item){
    return item.type == 'PushEvent'
});
var otherEvents = events.filter(function(item){
    return item.type == 'PushEvent'
});







console.log(pushEvents.length)
console.log(otherEvents.lenth)