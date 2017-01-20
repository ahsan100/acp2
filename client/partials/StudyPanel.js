Template.StudyPanel.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('singleStudy')
  });
});

Template.StudyPanel.helpers({
  singleStudy: ()=> {
    return Studies.find({});
  },
  updateQuestionnaireId: function() {
    return this._id;
  }
});
