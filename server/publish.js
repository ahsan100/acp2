try{
Meteor.publish('studies', function(){
  return Studies.find({user_id: this.userId});
});

Meteor.publish('sensors', function(){
  return Sensors.find();
});

Meteor.publish('schedule', function(){
  //TODO
  return Studies.find({author: this.userId})
});

Meteor.publish('singleStudy', function(id){
  check(id, String);
  return Studies.find({_id: id});
});
}
catch(err){
  console.log(err);
}