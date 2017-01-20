Template.studyQrCode.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleStudy', id);
  });
});

Template.studyQrCode.onRendered(function() {
  $('#qrcode').qrcode({text: 'http://www.google.com'});
})

Template.studyQrCode.helpers({
  study: ()=> {
    var id = FlowRouter.getParam('id');
    return Studies.findOne({_id: id});
  }
});
