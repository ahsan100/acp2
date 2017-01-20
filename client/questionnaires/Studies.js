try{
Template.Studies.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('studies')
  });
});

Template.Studies.helpers({
  studies: ()=> {
    return Studies.find({});
  },
  updateStudyId: function() {
    return this._id;
  }
});
}
catch(err){
  console.log(err);
}
