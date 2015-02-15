var assert = require('assert');
var events = require('../apis/github/users/johnalxndr/events.json');
var _ = require('lodash');
//

var pushEvents = events.filter(function(item){
    return item.type == 'PushEvent';
});
var deleteEvents = events.filter(function(item){    
    return item.type == 'DeleteEvent';
});
var pullRequests = events.filter(function(item){
    return item.type == 'PullRequestEvent';
}); 


function createdDate(a){
    return  _.map(a, 'created_at')
};
//thanks for this one taylor and for the help
function datediff(a, b){
    return _.first(a).substring(0,10).localeCompare(_.last(b).substring(0,10)) + 1;
};

function avg (item){
    var diff = datediff(createdDate(events), createdDate(events));
    return item.length / diff
};


function theAnswer(){
    return{
        'pushEvents':{
            'total': pushEvents.length,
            'perDay':avg(pushEvents)
    },
        'pullRequests':{
            'total':pullRequests.length,
            'perDay':avg(pullRequests)
        },
};
};

console.log(pushEvents.length);
console.log(deleteEvents.length);
console.log(pullRequests.length);
console.log(createdDate(events));
console.log(theAnswer(events));