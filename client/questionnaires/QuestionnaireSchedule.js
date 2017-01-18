Template.QuestionnaireSchedule.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('schedule')
  });
});

Template.QuestionnaireSchedule.helpers({
  questionnaires: ()=> {
    return Questionnaires.find({});
  },
  updateQuestionnaireId: function() {
    return this._id;
  }
});