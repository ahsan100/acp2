Template.studyConfig.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleStudy', id);
  });
});

Template.studyConfig.events({
  'click .btn-primary' : function() {
    var id = FlowRouter.getParam('id');
    Studies.update(
      { _id: id },
   { $set: { "exported": true } }
  )
  }
});

Template.studyConfig.helpers({
  study: ()=> {
    var id = FlowRouter.getParam('id');
    return Studies.findOne({_id: id});
  },
  updateStudyId: function() {
    var id = FlowRouter.getParam('id');
    return Studies.findOne({_id: id});
  }
});
