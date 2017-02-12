try{
Template.singleStudy.events({
  'click .btn-danger' : function() {
    Meteor.call('deleteStudies', this._id);
  }
});

Template.singleStudy.helpers({
  nrStudies: function() {
    var id = FlowRouter.getParam('id');

    var questionnaire = Studies.findOne({_id: id});

    return Studies.findOne({_id: id});
  }
});


Template.registerHelper('formatDate', function(date) {
  return moment(date).format('Do of MMMM, YYYY');
});

Template.studySensor.helpers({
  study: ()=> {
    var id = FlowRouter.getParam('id');
    return Studies.findOne({_id: id});
  },
  updateStudyId: function() {
    var id = FlowRouter.getParam('id');
    return Studies.findOne({_id: id});
  },
  sensor: function() {
    return Sensors.find().fetch();
  }
});
}
catch(err){
  console.log(err);
}