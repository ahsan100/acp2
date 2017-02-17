var require = meteorInstall({"lib":{"routes.js":function(){

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// lib/routes.js                                                              //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
                                                                              //
Accounts.onLogin(function () {                                                // 1
  FlowRouter.go('questionnaire-overview');                                    // 2
});                                                                           // 3
                                                                              //
Accounts.onLogout(function () {                                               // 5
  FlowRouter.go('home');                                                      // 6
});                                                                           // 7
                                                                              //
// Users that are not logged in should always be redictered to the home page.
FlowRouter.triggers.enter([function (context, redirect) {                     // 10
  if (!Meteor.userId()) {                                                     // 11
    FlowRouter.go('home');                                                    // 12
  }                                                                           // 13
}]);                                                                          // 14
                                                                              //
FlowRouter.route('/', {                                                       // 16
  name: 'home',                                                               // 17
  action: function action() {                                                 // 18
    // if(Meteor.userId()) {                                                  //
    //   FlowRouter.go('questionnaire-overview');                             //
    // }                                                                      //
    GAnalytics.pageview();                                                    // 22
    BlazeLayout.render('HomeLayout');                                         // 23
  }                                                                           // 24
});                                                                           // 16
                                                                              //
FlowRouter.route('/about', {                                                  // 27
  name: 'about',                                                              // 28
  action: function action() {                                                 // 29
    GAnalytics.pageview();                                                    // 30
    BlazeLayout.render('About', { main: 'About' });                           // 31
  }                                                                           // 32
});                                                                           // 27
                                                                              //
FlowRouter.route('/questionnaire-overview', {                                 // 35
  name: 'questionnaire-overview',                                             // 36
  action: function action() {                                                 // 37
    GAnalytics.pageview();                                                    // 38
    BlazeLayout.render('MainLayout', { main: 'Questionnaires' });             // 39
  }                                                                           // 40
});                                                                           // 35
                                                                              //
FlowRouter.route('/questionnaire/:id', {                                      // 43
  name: 'questionnaire-single',                                               // 44
  action: function action() {                                                 // 45
    GAnalytics.pageview();                                                    // 46
    BlazeLayout.render('MainLayout', { main: 'QuestionnaireSingle' });        // 47
  }                                                                           // 48
});                                                                           // 43
                                                                              //
FlowRouter.route('/questionnaire/:id/sensor', {                               // 51
  name: 'questionnaire-single-sensor',                                        // 52
  action: function action() {                                                 // 53
    GAnalytics.pageview();                                                    // 54
    BlazeLayout.render('MainLayout', { main: 'QuestionnaireSingleSensor' });  // 55
  }                                                                           // 56
});                                                                           // 51
                                                                              //
FlowRouter.route('/questionnaire/:id/configuration', {                        // 59
  name: 'questionnaire-single-config',                                        // 60
  action: function action() {                                                 // 61
    GAnalytics.pageview();                                                    // 62
    BlazeLayout.render('MainLayout', { main: 'QuestionnaireSingleConfig' });  // 63
  }                                                                           // 64
});                                                                           // 59
                                                                              //
FlowRouter.route('/questionnaire/:id/export', {                               // 67
  name: 'questionnaire-single-export',                                        // 68
  action: function action() {                                                 // 69
    GAnalytics.pageview();                                                    // 70
    BlazeLayout.render('MainLayout', { main: 'QuestionnaireSingleExport' });  // 71
  }                                                                           // 72
});                                                                           // 67
////////////////////////////////////////////////////////////////////////////////

}},"collections":{"Questionnaires.js":function(){

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// collections/Questionnaires.js                                              //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
                                                                              //
Questionnaires = new Mongo.Collection('questionnaires');                      // 1
                                                                              //
Questionnaires.allow({                                                        // 3
  insert: function insert(userId, doc) {                                      // 4
    return !!userId;                                                          // 5
  },                                                                          // 6
  update: function update(userId, doc) {                                      // 7
    return !!userId;                                                          // 8
  }                                                                           // 9
});                                                                           // 3
                                                                              //
SingleCheckbox = new SimpleSchema({                                           // 12
  option: {                                                                   // 13
    type: String,                                                             // 14
    label: "Option",                                                          // 15
    optional: true                                                            // 16
  }                                                                           // 13
});                                                                           // 12
                                                                              //
SingleQuestion = new SimpleSchema({                                           // 20
  name: {                                                                     // 21
    type: String,                                                             // 22
    label: "Question"                                                         // 23
  },                                                                          // 21
  instructions: {                                                             // 25
    type: String,                                                             // 26
    label: "Instructions",                                                    // 27
    optional: true                                                            // 28
  },                                                                          // 25
  timeout: {                                                                  // 30
    type: Number,                                                             // 31
    label: "Expiration threshold",                                            // 32
    defaultValue: 0,                                                          // 33
    optional: true,                                                           // 34
    min: 0                                                                    // 35
  },                                                                          // 30
  type: {                                                                     // 37
    type: String,                                                             // 38
    label: "Question type",                                                   // 39
    optional: true,                                                           // 40
    autoform: {                                                               // 41
      type: "select",                                                         // 42
      options: function options() {                                           // 43
        return [{ label: "Free Text", value: "Free Text" }, { label: "Multiple Choice", value: "Multiple Choice" }, { label: "Slider", value: "Slider" }];
      }                                                                       // 49
    }                                                                         // 41
  },                                                                          // 37
  checkboxes: {                                                               // 52
    type: [SingleCheckbox],                                                   // 53
    optional: true                                                            // 54
  },                                                                          // 52
  // Slider                                                                   //
  minValue: {                                                                 // 57
    type: Number,                                                             // 58
    label: "Minimum value",                                                   // 59
    optional: true,                                                           // 60
    defaultValue: 0                                                           // 61
  },                                                                          // 57
  maxValue: {                                                                 // 63
    type: Number,                                                             // 64
    label: "Maximum value",                                                   // 65
    optional: true,                                                           // 66
    defaultValue: 0                                                           // 67
  }                                                                           // 63
});                                                                           // 20
                                                                              //
Configuration = new SimpleSchema({                                            // 71
  startDate: {                                                                // 72
    type: Date,                                                               // 73
    // autoform: {                                                            //
    //     type: "bootstrap-datepicker",                                      //
    //     datePickerOptions: {                                               //
    //         format: "dd/mm/yyyy",                                          //
    //         autoclose: true                                                //
    //     }                                                                  //
    // },                                                                     //
    label: "Study start date",                                                // 81
    optional: true                                                            // 82
  },                                                                          // 72
  endDate: {                                                                  // 84
    type: Date,                                                               // 85
    label: "Study end date",                                                  // 86
    optional: true                                                            // 87
  }                                                                           // 84
});                                                                           // 71
                                                                              //
SingleSensor = new SimpleSchema({                                             // 91
  sensorType: {                                                               // 92
    type: String                                                              // 93
  },                                                                          // 92
  sensorActive: {                                                             // 95
    type: Boolean,                                                            // 96
    label: "Do you want to enable this option?",                              // 97
    autoform: {                                                               // 98
      type: "boolean-radios",                                                 // 99
      trueLabel: "Enabled",                                                   // 100
      falseLabel: "Disabled",                                                 // 101
      value: false                                                            // 102
    }                                                                         // 98
  },                                                                          // 95
  frequency: {                                                                // 105
    type: Number,                                                             // 106
    label: "Frequency (in microsends)",                                       // 107
    optional: true                                                            // 108
  }                                                                           // 105
});                                                                           // 91
                                                                              //
QuestionnaireSchema = new SimpleSchema({                                      // 112
  name: {                                                                     // 113
    type: String,                                                             // 114
    label: "Name"                                                             // 115
  },                                                                          // 113
  description: {                                                              // 117
    type: String,                                                             // 118
    label: "Description"                                                      // 119
  },                                                                          // 117
  questions: {                                                                // 121
    type: [SingleQuestion],                                                   // 122
    label: "",                                                                // 123
    optional: true                                                            // 124
  },                                                                          // 121
  configuration: {                                                            // 126
    type: [Configuration],                                                    // 127
    optional: true                                                            // 128
  },                                                                          // 126
  sensors: {                                                                  // 130
    type: [SingleSensor],                                                     // 131
    optional: true                                                            // 132
  },                                                                          // 130
  author: {                                                                   // 134
    type: String,                                                             // 135
    label: "Author",                                                          // 136
    autoValue: function autoValue() {                                         // 137
      return this.userId;                                                     // 138
    },                                                                        // 139
    autoform: {                                                               // 140
      type: "hidden"                                                          // 141
    }                                                                         // 140
  },                                                                          // 134
  createdAt: {                                                                // 144
    type: Date,                                                               // 145
    label: "Created at",                                                      // 146
    autoValue: function autoValue() {                                         // 147
      return new Date();                                                      // 148
    },                                                                        // 149
    autoform: {                                                               // 150
      type: "hidden"                                                          // 151
    }                                                                         // 150
  }                                                                           // 144
});                                                                           // 112
                                                                              //
Meteor.methods({                                                              // 156
  deleteQuestionnaire: function deleteQuestionnaire(id) {                     // 157
    Questionnaires.remove(id);                                                // 158
  }                                                                           // 159
});                                                                           // 156
                                                                              //
Questionnaires.attachSchema(QuestionnaireSchema);                             // 162
////////////////////////////////////////////////////////////////////////////////

},"Sensors.js":function(){

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// collections/Sensors.js                                                     //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
                                                                              //
Sensors = new Mongo.Collection('sensors');                                    // 1
                                                                              //
Sensors.allow({                                                               // 3
  insert: function insert(userId, doc) {                                      // 4
    return !!userId;                                                          // 5
  }                                                                           // 6
});                                                                           // 3
                                                                              //
SensorSchema = new SimpleSchema({                                             // 9
  type: {                                                                     // 10
    type: String                                                              // 11
  },                                                                          // 10
  active: {                                                                   // 13
    type: Boolean,                                                            // 14
    defaultValue: false                                                       // 15
  },                                                                          // 13
  frequency: {                                                                // 17
    type: Number,                                                             // 18
    label: "Frequency (in microsends)"                                        // 19
  }                                                                           // 17
});                                                                           // 9
                                                                              //
Sensors.attachSchema(SensorSchema);                                           // 23
////////////////////////////////////////////////////////////////////////////////

}},"server":{"init.js":function(){

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// server/init.js                                                             //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
                                                                              //
Meteor.startup(function () {                                                  // 1
  // Populate Sensors collection if empty                                     //
  if (Sensors.find().count() === 0) {                                         // 3
    Sensors.insert({                                                          // 4
      type: 'CHANEL',                                                         // 5
      active: false,                                                          // 6
      frequency: '23'                                                         // 7
    });                                                                       // 4
                                                                              //
    Sensors.insert({                                                          // 10
      type: 'GUCCI',                                                          // 11
      frequency: '36'                                                         // 12
    });                                                                       // 10
                                                                              //
    Sensors.insert({                                                          // 15
      type: 'COACH',                                                          // 16
      frequency: '99'                                                         // 17
    });                                                                       // 15
  }                                                                           // 19
});                                                                           // 20
                                                                              //
// AutoForm.addHooks(['updateQuestionnaireId'],                               //
// {                                                                          //
//   formToModifier: function(modifier) {                                     //
//     if (modifier.$set.comments) {                                          //
//       modifier.$set.comments = _.compact(modifier.$set.comments);          //
//     }                                                                      //
//     return modifier;                                                       //
//   }                                                                        //
// });                                                                        //
// https://github.com/aldeed/meteor-autoform/issues/1049                      //
////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// server/publish.js                                                          //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
                                                                              //
Meteor.publish('questionnaires', function () {                                // 1
  return Questionnaires.find({ author: this.userId });                        // 2
});                                                                           // 3
                                                                              //
Meteor.publish('sensors', function () {                                       // 5
  return Sensors.find();                                                      // 6
});                                                                           // 7
                                                                              //
Meteor.publish('singleQuestionnaire', function (id) {                         // 9
  check(id, String);                                                          // 10
  return Questionnaires.find({ _id: id });                                    // 11
});                                                                           // 12
////////////////////////////////////////////////////////////////////////////////

}},"main.js":["meteor/meteor",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// main.js                                                                    //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
                                                                              //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});   // 1
                                                                              //
Meteor.startup(function () {                                                  // 3
  // code to run on server at startup                                         //
});                                                                           // 5
////////////////////////////////////////////////////////////////////////////////

}]},{"extensions":[".js",".json"]});
require("./lib/routes.js");
require("./collections/Questionnaires.js");
require("./collections/Sensors.js");
require("./server/init.js");
require("./server/publish.js");
require("./main.js");
//# sourceMappingURL=app.js.map
