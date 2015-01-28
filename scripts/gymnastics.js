var assert = require('assert');

var events = require('../apis/github/users/johnalxndr/events.json');

function answer(){
    var pushEvents = events.filter(function(item){
        return item.type == 'PushEvent';
    });
    var pullRequests = events.filter(function(item){
        return item.type == 'PullRequestEvent';
    });

    return { 
        'total': events.length,
        'PushEvent': {
            'total': pushEvents.length,
            }
        'PullRequestEvent': {
        'total': pullRequests.length,
    },
        'IssueCommmentEvent': {
        'total': issueComment.length,
        }
    };
};

console.log(answer());
var theAnswer = answer();

it('should have events', function(){
    assert(events);
});
it('should have function answer', function(){
    assert(answer);
});
it('should return the length when calling answer function', function(){
    assert.equal(theAnswer.total, 30);
    });
    
it('should return "PushEvent",and has a total count of PushedEvents', function(){
    assert(theAnswer.PushEvent);
    assert(theAnswer.PushEvent.total);
    });
    
//function answer(){
//  return {
//    'total': ... // `Number` of unique entries
//    'types': [ ... ], // `Array` of `String`: unique type names across all entries
//    'EVENT_TYPE': { // Results for each `EVENT_TYPE`, e.g. `"PushEvent"`
//      'total': ..., // `Number` of entries of this type
//      'perDay': { // breakdown by day...
//        'avg': ..., // `Number`: average per day
//        'max': ..., // `Number`: maximum per day
//        'min': ..., // `Number`: minimum per day
//      },
//    },
//    // . . .
//  };
//}   









//old stuff


//function answer(){
//  var index = 0;
//  var numberOfPushEvents = 0;
//
//  function countPushEvents(event){
//    if ( item.type == "PushEvent" ){
//      numberOfPushEvents++;
//    }
//  }
//  events.forEach(countPushEvents);
//
//  var pushEvents = events.filter(function(item){
//    return item.type == 'PushEvent';
//  });
//  
//  pushEvents.length == numberOfPushEvents;
//
//  /* // Irrelevant in the face of forEach...
//  while ( index < events.length ){
//    var event = events[index];
//    if ( event.type == "PushEvent" ){
//      numberOfPushEvents++;
//    }
//    
//    index++;
//  }
//  // */
//
//  return {
//    'total': events.length,    // How many total events did you fetch?
//    'PushEvent': {
//      'total': numberOfPushEvents,
//    }
//    /* // Coming back around...
//    'PushEvent': {
//      'total': ...,  // How many total events of type `PushEvent` are there?
//      'perDay': ...  // On average, how many`PushEvent` entries per day?
//    },
//    'other': {
//      'total': ...,  // How many _other_ events are in the data?
//      'perDay': ...  // How many per day, on average?
//    } // */
//  };
//} // END answer
//
//it('should have one big test', function(){
//  assert(events);
//  assert(events instanceof Array);
//
//  assert(answer);
//  assert(typeof answer == 'function');
//
//  var theAnswer = answer();
//
//  assert.equal(theAnswer.total, 30);
//  // I assert that the key "total" in variable 
//  // "theAnswer" is equal to Number 30
//
//  assert(theAnswer.PushEvent);
//
//  assert(theAnswer.PushEvent.total > 0);
//  // */
//});