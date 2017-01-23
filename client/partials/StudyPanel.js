Template.StudyPanel.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('studies')
  });
});

Template.StudyPanel.helpers({
  studies: ()=> {
    return Studies.find({});
  },
  updateQuestionnaireId: function() {
    return this._id;
  }
});
