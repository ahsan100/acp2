Meteor.publish('questionnaires', function(){
  return Questionnaires.find({author: this.userId});
});

Meteor.publish('sensors', function(){
  return Sensors.find();
});

Meteor.publish('schedule', function(){
  //TODO
  return Questionnaires.find({author: this.userId})
});

Meteor.publish('singleQuestionnaire', function(id){
  check(id, String);
  return Questionnaires.find({_id: id});
});
