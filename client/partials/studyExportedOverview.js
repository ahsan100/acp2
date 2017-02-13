Template.studyExportedOverview.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleStudy', id);
    });
});

Template.studyExportedOverview.onRendered(function() {
    var host = 'http://192.168.173.1:3000';
    var id = FlowRouter.getParam('id');
    var route = '/study/'+ id + '/json';
    $('#qrcode').qrcode({text: host+route});
});

Template.studyExportedOverview.events({
    'click .btn-primary' : function() {
        var id = FlowRouter.getParam('id');
        Studies.update(
            { _id: id },
            { $set: { "exported": true } }
        )
    }
});

Template.studyExportedOverview.helpers({
        study: ()=> {
        var id = FlowRouter.getParam('id');
return Studies.findOne({_id: id});
},
updateStudyId: function() {
    var id = FlowRouter.getParam('id');
    return Studies.findOne({_id: id});
},
isIntervatTypeSchedule: function(type) {
    if (type == "interval") {
        return true;
    }
    else {
        return false;
    }
},
getQuestionType: function(value) {
    //TODO: user proper query to get the labels over hardcoding.
    if (value == 1) {
        return "Free Text";
    }
    else if (value == 2) {
        return "Checkbox";
    }
    else if (value == 3) {
        return "Checkbox";
    }
    else if (value == 4) {
        return "Likeart Scale";
    }
    else if (value == 5) {
        return "Quick Answer";
    }
    else if (value == 6) {
        return "Scale";
    }
    else if (value == 7) {
        return "Numeric";
    }
}
});


