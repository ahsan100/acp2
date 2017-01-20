Template.studySensor.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleStudy', id);
  });
});

Template.studySensor.helpers({
  study: ()=> {
    var id = FlowRouter.getParam('id');
    return Studies.findOne({_id: id});
  },
  updateStudyId: function() {
    var id = FlowRouter.getParam('id');
    return Studies.findOne({_id: id});
  }
});

Template.registerHelper("currentFieldValue", function (fieldName) {
  return AutoForm.getFieldValue("reactiveCurrentValueForm", fieldName) || "not selected";
});

Template.registerHelper("currentFieldValue2", function (fieldName) {
  return AutoForm.getFieldValue(fieldName) || "empty";
});
