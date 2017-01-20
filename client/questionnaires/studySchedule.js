Template.studySchedule.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('schedule')
  });
});

Template.studySchedule.helpers({
  schedule: ()=> {
    return study.find({});
  },
  updateQuestionnaireId: function() {
    return this._id;
  }
});