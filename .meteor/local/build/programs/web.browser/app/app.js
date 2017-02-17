var require = meteorInstall({"client":{"layouts":{"template.About.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.About.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("About");                                                                                         // 2
Template["About"] = new Template("Template.About", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("Header")), HTML.Raw('\n  <main>\n    <div class="billboard">\n      <h2>Create ESM magic</h2>\n    </div>\n\n    <div class="main-layout">\n      <h3>About</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan, justo vitae tristique finibus, velit nisl molestie enim, ac pretium orci eros vel elit. Proin at neque in arcu vehicula vestibulum eu et velit. Nullam quis massa sed mi aliquam aliquam eget laoreet quam. Duis vehicula in ante at dictum. Vivamus rhoncus non purus in convallis. Mauris lobortis mollis nisi, a iaculis elit. Pellentesque vel velit nec arcu cursus varius. Integer maximus molestie maximus.</p>\n    </div>\n  </main>\n  '), Spacebars.include(view.lookupTemplate("Footer")) ];
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.HomeLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.HomeLayout.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("HomeLayout");                                                                                    // 2
Template["HomeLayout"] = new Template("Template.HomeLayout", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("Header")), HTML.Raw('\n  <main>\n    <div class="billboard">\n      <h2>Create Advanced Experience Sampling Studies. The Easy Way.</h2>\n    </div>\n\n    <div class="main-layout">\n      <p class="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan, justo vitae tristique finibus, velit nisl molestie enim, ac pretium orci eros vel elit. Proin at neque in arcu vehicula vestibulum eu et velit.</p>\n\n      <div class="row">\n        <div class="col-md-4">\n          <h4><i class="fa fa-flag"></i>ESM Creator</h4>\n          <p>Create your own <em>Experience Sampling</em> studies using ESM Creator. Based on proven technology ...</p>\n        </div>\n        <div class="col-md-4">\n          <h4><i class="fa fa-magic"></i>Easy To Use</h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan, justo vitae tristique finibus.</p>\n        </div>\n        <div class="col-md-4">\n          <h4><i class="fa fa-lock"></i>Secure</h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan, justo vitae tristique finibus.</p>\n        </div>\n      </div>\n\n      <div class="row">\n        <div class="col-md-4">\n          <h4><i class="fa fa-magic"></i>Advanced Configuration</h4>\n          <p>Build </p>\n        </div>\n        <div class="col-md-4">\n          <h4><i class="fa fa-flag"></i>Open Source</h4>\n          <p>ESM Creator is completely free to use, and its source code is <a href="https://www.github.com">publicly available</a>.</p>\n        </div>\n        <div class="col-md-4">\n          <h4><i class="fa fa-lock"></i>Secure</h4>\n        </div>\n      </div>\n\n      <h3>Experience Sampling</h3>\n      <p>Curabitur sit amet libero laoreet, consequat ex id, scelerisque purus. Nam fermentum purus nec ante viverra, ut placerat orci rutrum. Vestibulum accumsan odio dui, eget blandit neque auctor vitae. Integer sed dignissim nibh, vitae tristique nisi.</p>\n    </div>\n  </main>\n  '), Spacebars.include(view.lookupTemplate("Footer")) ];
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.MainLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layouts/template.MainLayout.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("MainLayout");                                                                                    // 2
Template["MainLayout"] = new Template("Template.MainLayout", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("Header")), "\n  ", HTML.MAIN({                                       // 5
    "class": "main-layout"                                                                                             // 6
  }, "\n    ", Blaze._TemplateWith(function() {                                                                        // 7
    return {                                                                                                           // 8
      template: Spacebars.call(view.lookup("main"))                                                                    // 9
    };                                                                                                                 // 10
  }, function() {                                                                                                      // 11
    return Spacebars.include(function() {                                                                              // 12
      return Spacebars.call(Template.__dynamic);                                                                       // 13
    });                                                                                                                // 14
  }), "\n  "), "\n  ", Spacebars.include(view.lookupTemplate("Footer")) ];                                             // 15
}));                                                                                                                   // 16
                                                                                                                       // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"partials":{"template.Footer.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partials/template.Footer.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Footer");                                                                                        // 2
Template["Footer"] = new Template("Template.Footer", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw("<footer>\n    <br>\n    <div>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n    </div>\n  </footer>");
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Header.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partials/template.Header.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Header");                                                                                        // 2
Template["Header"] = new Template("Template.Header", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.HEADER("\n    ", HTML.NAV({                                                                              // 5
    "class": "main-nav"                                                                                                // 6
  }, "\n      ", HTML.Raw('<h1><a href="/">Home</a></h1>'), "\n\n      ", HTML.Raw('<h1><a href="/about">About</a></h1>'), "\n\n      ", HTML.Raw('<h1><a href="/questionnaire-overview">Questionnaire overview</a></h1>'), "\n\n      ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n    "), "\n  ");
}));                                                                                                                   // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.SideNav.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partials/template.SideNav.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("SideNav");                                                                                       // 2
Template["SideNav"] = new Template("Template.SideNav", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<nav class="side-nav">\n      <li>\n        <a href="/questionnaire-overview">Overview</a>\n      </li>\n      <li>\n        <a href="/questionnaire-sensors">Sensors</a>\n      </li>\n      <li>\n        <a href="/questionnaire-configuration">Configuation</a>\n      </li>\n  </nav>');
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.SingleQuestionnaireNav.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partials/template.SingleQuestionnaireNav.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("SingleQuestionnaireNav");                                                                        // 2
Template["SingleQuestionnaireNav"] = new Template("Template.SingleQuestionnaireNav", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return HTML.NAV({                                                                                                    // 5
    "class": "questionnaire-nav"                                                                                       // 6
  }, "\n    ", HTML.LI("\n      ", HTML.A({                                                                            // 7
    href: function() {                                                                                                 // 8
      return [ "/questionnaire/", Spacebars.mustache(Spacebars.dot(view.lookup("questionnaire"), "_id")) ];            // 9
    }                                                                                                                  // 10
  }, "Overview"), "\n    "), "\n    ", HTML.LI("\n      ", HTML.A({                                                    // 11
    href: function() {                                                                                                 // 12
      return [ "/questionnaire/", Spacebars.mustache(Spacebars.dot(view.lookup("questionnaire"), "_id")), "/sensor" ];
    }                                                                                                                  // 14
  }, "Sensors"), "\n    "), "\n    ", HTML.LI("\n      ", HTML.A({                                                     // 15
    href: function() {                                                                                                 // 16
      return [ "/questionnaire/", Spacebars.mustache(Spacebars.dot(view.lookup("questionnaire"), "_id")), "/configuration" ];
    }                                                                                                                  // 18
  }, "Configuation"), "\n    "), "\n    ", HTML.LI("\n      ", HTML.A({                                                // 19
    href: function() {                                                                                                 // 20
      return [ "/questionnaire/", Spacebars.mustache(Spacebars.dot(view.lookup("questionnaire"), "_id")), "/export" ];
    }                                                                                                                  // 22
  }, "Export"), "\n    "), HTML.Raw('\n    <li>\n      <a href="/questionnaire-overview">Return to Overview</a>\n    </li>\n  '));
}));                                                                                                                   // 24
                                                                                                                       // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SingleQuestionnaireNav.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/partials/SingleQuestionnaireNav.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.SingleQuestionnaireNav.onCreated(function () {                                                                // 1
  var self = this;                                                                                                     // 2
  self.autorun(function () {                                                                                           // 3
    var id = FlowRouter.getParam('id');                                                                                // 4
    self.subscribe('singleQuestionnaire', id);                                                                         // 5
  });                                                                                                                  // 6
});                                                                                                                    // 7
                                                                                                                       //
Template.SingleQuestionnaireNav.helpers({                                                                              // 9
  questionnaire: function () {                                                                                         // 10
    function questionnaire() {                                                                                         // 10
      var id = FlowRouter.getParam('id');                                                                              // 11
      return Questionnaires.findOne({ _id: id });                                                                      // 12
    }                                                                                                                  // 13
                                                                                                                       //
    return questionnaire;                                                                                              // 10
  }()                                                                                                                  // 10
});                                                                                                                    // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"questionnaires":{"template.NewQuestionnaire.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/template.NewQuestionnaire.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("NewQuestionnaire");                                                                              // 2
Template["NewQuestionnaire"] = new Template("Template.NewQuestionnaire", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "recipe"                                                                                                  // 6
  }, HTML.Raw("\n    <h3>New questionnaire</h3>\n\n    "), Blaze._TemplateWith(function() {                            // 7
    return {                                                                                                           // 8
      collection: Spacebars.call("Questionnaires"),                                                                    // 9
      id: Spacebars.call("updateQuestionnaireId"),                                                                     // 10
      type: Spacebars.call("insert"),                                                                                  // 11
      "class": Spacebars.call("new-recipe-form")                                                                       // 12
    };                                                                                                                 // 13
  }, function() {                                                                                                      // 14
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 15
      return [ "\n\n      ", Blaze._TemplateWith(function() {                                                          // 16
        return {                                                                                                       // 17
          name: Spacebars.call("name")                                                                                 // 18
        };                                                                                                             // 19
      }, function() {                                                                                                  // 20
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 21
      }), "\n\n      ", Blaze._TemplateWith(function() {                                                               // 22
        return {                                                                                                       // 23
          name: Spacebars.call("description")                                                                          // 24
        };                                                                                                             // 25
      }, function() {                                                                                                  // 26
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 27
      }), "\n\n      ", Blaze._TemplateWith(function() {                                                               // 28
        return {                                                                                                       // 29
          name: Spacebars.call("author")                                                                               // 30
        };                                                                                                             // 31
      }, function() {                                                                                                  // 32
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 33
      }), "\n\n      ", Blaze._TemplateWith(function() {                                                               // 34
        return {                                                                                                       // 35
          name: Spacebars.call("createdAt")                                                                            // 36
        };                                                                                                             // 37
      }, function() {                                                                                                  // 38
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 39
      }), "\n\n      ", HTML.DIV("\n        ", HTML.BUTTON({                                                           // 40
        type: "submit"                                                                                                 // 41
      }, "Add Questionnaire"), "\n      "), "\n    " ];                                                                // 42
    });                                                                                                                // 43
  }), HTML.Raw('\n\n\n    <!-- {{> quickForm collection="Questionnaires" id="insertRecipeForm" type="insert" class="new-recipe-form"}} -->\n  '));
}));                                                                                                                   // 45
                                                                                                                       // 46
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.QuestionnaireSingle.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/template.QuestionnaireSingle.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("QuestionnaireSingle");                                                                           // 2
Template["QuestionnaireSingle"] = new Template("Template.QuestionnaireSingle", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return [ HTML.H1(Blaze.View("lookup:questionnaire.name", function() {                                                // 5
    return Spacebars.mustache(Spacebars.dot(view.lookup("questionnaire"), "name"));                                    // 6
  })), "\n\n  ", Spacebars.include(view.lookupTemplate("SingleQuestionnaireNav")), "\n\n  ", HTML.DIV({                // 7
    "class": "new-recipe-container"                                                                                    // 8
  }, "\n    ", Blaze._TemplateWith(function() {                                                                        // 9
    return {                                                                                                           // 10
      collection: Spacebars.call("Questionnaires"),                                                                    // 11
      id: Spacebars.call("updateQuestionnaireId"),                                                                     // 12
      type: Spacebars.call("update"),                                                                                  // 13
      doc: Spacebars.call(view.lookup("questionnaire"))                                                                // 14
    };                                                                                                                 // 15
  }, function() {                                                                                                      // 16
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 17
      return [ "\n\n    ", Blaze._TemplateWith(function() {                                                            // 18
        return {                                                                                                       // 19
          name: Spacebars.call("name"),                                                                                // 20
          template: Spacebars.call("bootstrap3-horizontal"),                                                           // 21
          "label-class": Spacebars.call("col-sm-3"),                                                                   // 22
          "input-col-class": Spacebars.call("col-sm-9")                                                                // 23
        };                                                                                                             // 24
      }, function() {                                                                                                  // 25
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 26
      }), "\n\n    ", Blaze._TemplateWith(function() {                                                                 // 27
        return {                                                                                                       // 28
          name: Spacebars.call("description"),                                                                         // 29
          template: Spacebars.call("bootstrap3-horizontal"),                                                           // 30
          "label-class": Spacebars.call("col-sm-3"),                                                                   // 31
          "input-col-class": Spacebars.call("col-sm-9")                                                                // 32
        };                                                                                                             // 33
      }, function() {                                                                                                  // 34
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 35
      }), "\n\n\n    ", HTML.LABEL("Questions"), "\n\n    ", Blaze._TemplateWith(function() {                          // 36
        return {                                                                                                       // 37
          name: Spacebars.call("questions")                                                                            // 38
        };                                                                                                             // 39
      }, function() {                                                                                                  // 40
        return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                                  // 41
          return [ "\n      ", Blaze._TemplateWith(function() {                                                        // 42
            return {                                                                                                   // 43
              name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "name")),                                // 44
              template: Spacebars.call("bootstrap3-horizontal"),                                                       // 45
              "label-class": Spacebars.call("col-sm-3"),                                                               // 46
              "input-col-class": Spacebars.call("col-sm-9")                                                            // 47
            };                                                                                                         // 48
          }, function() {                                                                                              // 49
            return Spacebars.include(view.lookupTemplate("afQuickField"));                                             // 50
          }), "\n\n      ", Blaze._TemplateWith(function() {                                                           // 51
            return {                                                                                                   // 52
              name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "instructions")),                        // 53
              template: Spacebars.call("bootstrap3-horizontal"),                                                       // 54
              "label-class": Spacebars.call("col-sm-3"),                                                               // 55
              "input-col-class": Spacebars.call("col-sm-9")                                                            // 56
            };                                                                                                         // 57
          }, function() {                                                                                              // 58
            return Spacebars.include(view.lookupTemplate("afQuickField"));                                             // 59
          }), "\n\n      ", Blaze._TemplateWith(function() {                                                           // 60
            return {                                                                                                   // 61
              name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "timeout")),                             // 62
              template: Spacebars.call("bootstrap3-horizontal"),                                                       // 63
              "label-class": Spacebars.call("col-sm-3"),                                                               // 64
              "input-col-class": Spacebars.call("col-sm-9")                                                            // 65
            };                                                                                                         // 66
          }, function() {                                                                                              // 67
            return Spacebars.include(view.lookupTemplate("afQuickField"));                                             // 68
          }), "\n\n      ", HTML.Comment('\n      <label class="help">Question</label>{{> afFieldInput name=this.current.name}}\n      <label class="help">Question instruction</label>{{> afFieldInput name=this.current.instructions}}\n      <label class="help">Question timeout</label>{{> afFieldInput name=this.current.timeout}}\n       '), "\n\n      ", Blaze._TemplateWith(function() {
            return {                                                                                                   // 70
              name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "type")),                                // 71
              template: Spacebars.call("bootstrap3-horizontal"),                                                       // 72
              "label-class": Spacebars.call("col-sm-3"),                                                               // 73
              "input-col-class": Spacebars.call("col-sm-9")                                                            // 74
            };                                                                                                         // 75
          }, function() {                                                                                              // 76
            return Spacebars.include(view.lookupTemplate("afQuickField"));                                             // 77
          }), "\n\n      ", Blaze.If(function() {                                                                      // 78
            return Spacebars.dataMustache(view.lookup("afFieldValueIs"), Spacebars.kw({                                // 79
              name: Spacebars.dot(view.lookup("."), "current", "type"),                                                // 80
              value: "Multiple Choice"                                                                                 // 81
            }));                                                                                                       // 82
          }, function() {                                                                                              // 83
            return [ "\n        ", Blaze._TemplateWith(function() {                                                    // 84
              return {                                                                                                 // 85
                name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "checkboxes"))                         // 86
              };                                                                                                       // 87
            }, function() {                                                                                            // 88
              return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                            // 89
                return [ "\n          ", Blaze._TemplateWith(function() {                                              // 90
                  return {                                                                                             // 91
                    name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "option")),                        // 92
                    template: Spacebars.call("bootstrap3-horizontal"),                                                 // 93
                    "label-class": Spacebars.call("col-sm-2 col-sm-offset-3"),                                         // 94
                    "input-col-class": Spacebars.call("col-sm-6")                                                      // 95
                  };                                                                                                   // 96
                }, function() {                                                                                        // 97
                  return Spacebars.include(view.lookupTemplate("afQuickField"));                                       // 98
                }), "\n          ", HTML.BUTTON({                                                                      // 99
                  "class": "btn btn-primary autoform-remove-item",                                                     // 100
                  "data-autoform-field": "items"                                                                       // 101
                }, "x"), "\n        " ];                                                                               // 102
              });                                                                                                      // 103
            }), "\n        ", HTML.BUTTON({                                                                            // 104
              "class": "btn btn-primary autoform-add-item col-sm-offset-5 col-sm-7",                                   // 105
              "data-autoform-field": function() {                                                                      // 106
                return Spacebars.mustache(Spacebars.dot(view.lookup("."), "current", "checkboxes"));                   // 107
              }                                                                                                        // 108
            }, "Add option"), "\n      " ];                                                                            // 109
          }), "\n      ", Blaze.If(function() {                                                                        // 110
            return Spacebars.dataMustache(view.lookup("afFieldValueIs"), Spacebars.kw({                                // 111
              name: Spacebars.dot(view.lookup("."), "current", "type"),                                                // 112
              value: "Slider"                                                                                          // 113
            }));                                                                                                       // 114
          }, function() {                                                                                              // 115
            return [ "\n        ", Blaze._TemplateWith(function() {                                                    // 116
              return {                                                                                                 // 117
                name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "minValue")),                          // 118
                template: Spacebars.call("bootstrap3-horizontal"),                                                     // 119
                "label-class": Spacebars.call("col-sm-4 col-sm-offset-3"),                                             // 120
                "input-col-class": Spacebars.call("col-sm-5")                                                          // 121
              };                                                                                                       // 122
            }, function() {                                                                                            // 123
              return Spacebars.include(view.lookupTemplate("afQuickField"));                                           // 124
            }), "\n        ", Blaze._TemplateWith(function() {                                                         // 125
              return {                                                                                                 // 126
                name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "maxValue")),                          // 127
                template: Spacebars.call("bootstrap3-horizontal"),                                                     // 128
                "label-class": Spacebars.call("col-sm-4 col-sm-offset-3"),                                             // 129
                "input-col-class": Spacebars.call("col-sm-5")                                                          // 130
              };                                                                                                       // 131
            }, function() {                                                                                            // 132
              return Spacebars.include(view.lookupTemplate("afQuickField"));                                           // 133
            }), "\n      " ];                                                                                          // 134
          }), "\n\n      ", HTML.BR(), "\n\n      ", HTML.BUTTON({                                                     // 135
            "class": "btn btn-primary autoform-remove-item",                                                           // 136
            "data-autoform-field": "items"                                                                             // 137
          }, "Remove question"), "\n\n      ", HTML.HR({                                                               // 138
            style: "border-bottom:1px solid #000;"                                                                     // 139
          }), "\n    " ];                                                                                              // 140
        });                                                                                                            // 141
      }), "\n\n    ", HTML.BUTTON({                                                                                    // 142
        "class": "btn btn-primary autoform-add-item",                                                                  // 143
        "data-autoform-field": "questions"                                                                             // 144
      }, "Add question"), "\n\n    ", HTML.BUTTON({                                                                    // 145
        type: "submit"                                                                                                 // 146
      }, "Submit"), "\n    " ];                                                                                        // 147
    });                                                                                                                // 148
  }), "\n  ") ];                                                                                                       // 149
}));                                                                                                                   // 150
                                                                                                                       // 151
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.QuestionnaireSingleConfig.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/template.QuestionnaireSingleConfig.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("QuestionnaireSingleConfig");                                                                     // 2
Template["QuestionnaireSingleConfig"] = new Template("Template.QuestionnaireSingleConfig", (function() {               // 3
  var view = this;                                                                                                     // 4
  return [ HTML.H1(Blaze.View("lookup:questionnaire.name", function() {                                                // 5
    return Spacebars.mustache(Spacebars.dot(view.lookup("questionnaire"), "name"));                                    // 6
  })), "\n\n  ", Spacebars.include(view.lookupTemplate("SingleQuestionnaireNav")), "\n\n  ", HTML.DIV({                // 7
    "class": "new-recipe-container"                                                                                    // 8
  }, "\n    ", HTML.Raw("<h2>Configuration</h2>"), "\n\n    ", HTML.Raw("<h3>Questionnaire start and end date</h3>"), "\n    ", HTML.Raw('<!-- {{> quickForm collection="Questionnaires" id="updateQuestionnaireId" type="update" doc=questionnaire class="new-recipe-form"}} -->'), "\n\n    ", Blaze._TemplateWith(function() {
    return {                                                                                                           // 10
      collection: Spacebars.call("Questionnaires"),                                                                    // 11
      id: Spacebars.call("updateQuestionnaireId"),                                                                     // 12
      type: Spacebars.call("update"),                                                                                  // 13
      doc: Spacebars.call(view.lookup("questionnaire"))                                                                // 14
    };                                                                                                                 // 15
  }, function() {                                                                                                      // 16
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 17
      return [ "\n      ", Blaze._TemplateWith(function() {                                                            // 18
        return {                                                                                                       // 19
          name: Spacebars.call("configuration")                                                                        // 20
        };                                                                                                             // 21
      }, function() {                                                                                                  // 22
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 23
      }), "\n\n      ", HTML.DIV("\n        ", HTML.BUTTON({                                                           // 24
        type: "submit"                                                                                                 // 25
      }, "Submit"), "\n      "), "\n\n    " ];                                                                         // 26
    });                                                                                                                // 27
  }), "\n\n  ") ];                                                                                                     // 28
}));                                                                                                                   // 29
                                                                                                                       // 30
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.QuestionnaireSingleExport.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/template.QuestionnaireSingleExport.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("QuestionnaireSingleExport");                                                                     // 2
Template["QuestionnaireSingleExport"] = new Template("Template.QuestionnaireSingleExport", (function() {               // 3
  var view = this;                                                                                                     // 4
  return [ HTML.H1(Blaze.View("lookup:questionnaire.name", function() {                                                // 5
    return Spacebars.mustache(Spacebars.dot(view.lookup("questionnaire"), "name"));                                    // 6
  })), "\n\n  ", Spacebars.include(view.lookupTemplate("SingleQuestionnaireNav")), HTML.Raw('\n\n  <div>\n    <h2>Export Questionnaire</h2>\n\n    <p>Test questionnaire in AWARE.</p>\n\n    <button>Export to AWARE</button>\n\n    <div id="qrcode"></div>\n\n  </div>') ];
}));                                                                                                                   // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.QuestionnaireSingleSensor.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/template.QuestionnaireSingleSensor.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("QuestionnaireSingleSensor");                                                                     // 2
Template["QuestionnaireSingleSensor"] = new Template("Template.QuestionnaireSingleSensor", (function() {               // 3
  var view = this;                                                                                                     // 4
  return [ HTML.H1(Blaze.View("lookup:questionnaire.name", function() {                                                // 5
    return Spacebars.mustache(Spacebars.dot(view.lookup("questionnaire"), "name"));                                    // 6
  })), "\n\n  ", Spacebars.include(view.lookupTemplate("SingleQuestionnaireNav")), "\n\n  ", HTML.DIV({                // 7
    "class": "new-recipe-container"                                                                                    // 8
  }, "\n    ", HTML.Raw("<h2>Sensor magic</h2>"), "\n\n    ", Blaze._TemplateWith(function() {                         // 9
    return {                                                                                                           // 10
      collection: Spacebars.call("Questionnaires"),                                                                    // 11
      type: Spacebars.call("update"),                                                                                  // 12
      doc: Spacebars.call(view.lookup(".")),                                                                           // 13
      id: Spacebars.call("FieldValueIsForm")                                                                           // 14
    };                                                                                                                 // 15
  }, function() {                                                                                                      // 16
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 17
      return [ "\n\n      ", Blaze._TemplateWith(function() {                                                          // 18
        return {                                                                                                       // 19
          name: Spacebars.call("sensors")                                                                              // 20
        };                                                                                                             // 21
      }, function() {                                                                                                  // 22
        return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                                  // 23
          return [ "\n          ", Blaze._TemplateWith(function() {                                                    // 24
            return {                                                                                                   // 25
              name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "sensorType"))                           // 26
            };                                                                                                         // 27
          }, function() {                                                                                              // 28
            return Spacebars.include(view.lookupTemplate("afFieldInput"));                                             // 29
          }), "\n          ", Blaze._TemplateWith(function() {                                                         // 30
            return {                                                                                                   // 31
              name: Spacebars.call(Spacebars.dot(view.lookup("."), "current", "sensorActive"))                         // 32
            };                                                                                                         // 33
          }, function() {                                                                                              // 34
            return Spacebars.include(view.lookupTemplate("afFieldInput"));                                             // 35
          }), "\n      " ];                                                                                            // 36
        });                                                                                                            // 37
      }), "\n\n", HTML.Comment('\n\n      {{> afQuickField name="GUCCI.$.sensorActive" noselect=true }}\n\n      {{> afQuickField name="CHANEL" noselect=true }}\n\n      {{> afQuickField name="GUCCI" noselect=true }}\n\n      {{#each sensors}}\n\n        <h3>{{this.type}}</h3>\n\n\n\n        {{#if afFieldValueIs name="sensorType" value="GUCCI"}}\n           {{> afQuickField name="shotsTaken"}}\n        {{/if}}\n\n\n        {{> afQuickField name="sensors.$.sensorActive" noselect=true }}\n\n        {{#if afFieldValueIs type="CHANEL" value=true}}\n          {{> afQuickField name="sensors.$.frequency" value=this.frequency}}\n        {{/if}}\n      {{/each}}\n\n      {{#if afFieldValueIs name="sensors.$.sensorType" value="CHANEL"}}\n        {{> afQuickField name="frequency"}}\n      {{/if}}\n'), "\n      ", HTML.DIV("\n        ", HTML.BUTTON({
        type: "submit"                                                                                                 // 39
      }, "Submit"), "\n      "), "\n    " ];                                                                           // 40
    });                                                                                                                // 41
  }), "\n  ") ];                                                                                                       // 42
}));                                                                                                                   // 43
                                                                                                                       // 44
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Questionnaires.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/template.Questionnaires.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Questionnaires");                                                                                // 2
Template["Questionnaires"] = new Template("Template.Questionnaires", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return [ HTML.SECTION({                                                                                              // 5
    "class": "questionnaires"                                                                                          // 6
  }, "\n    ", Blaze.If(function() {                                                                                   // 7
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", Blaze.Each(function() {                                                                       // 10
      return Spacebars.call(view.lookup("questionnaires"));                                                            // 11
    }, function() {                                                                                                    // 12
      return [ "\n        ", Spacebars.include(view.lookupTemplate("SingleQuestionnaire")), "\n      " ];              // 13
    }), "\n    " ];                                                                                                    // 14
  }, function() {                                                                                                      // 15
    return [ "\n      ", HTML.P("Loading"), "\n    " ];                                                                // 16
  }), "\n  "), "\n  ", Spacebars.include(view.lookupTemplate("NewQuestionnaire")) ];                                   // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.SingleQuestionnaire.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/template.SingleQuestionnaire.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("SingleQuestionnaire");                                                                           // 2
Template["SingleQuestionnaire"] = new Template("Template.SingleQuestionnaire", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return HTML.ARTICLE({                                                                                                // 5
    "class": "recipe"                                                                                                  // 6
  }, "\n    ", HTML.H3(Blaze.View("lookup:name", function() {                                                          // 7
    return Spacebars.mustache(view.lookup("name"));                                                                    // 8
  })), "\n    ", HTML.P(Blaze.View("lookup:description", function() {                                                  // 9
    return Spacebars.mustache(view.lookup("description"));                                                             // 10
  })), "\n    ", HTML.P({                                                                                              // 11
    "class": "meta"                                                                                                    // 12
  }, "Created ", Blaze.View("lookup:formatDate", function() {                                                          // 13
    return Spacebars.mustache(view.lookup("formatDate"), view.lookup("createdAt"));                                    // 14
  }), "."), "\n\n    ", Blaze.View("lookup:nrQuestionnaires", function() {                                             // 15
    return Spacebars.mustache(view.lookup("nrQuestionnaires"));                                                        // 16
  }), HTML.Raw('\n    <!-- <p>\n      {{#each questions}}\n        <span class="ingredient">{{name}} - {{type}}</span>\n      {{/each}}\n    </p> -->\n    '), HTML.A({
    href: function() {                                                                                                 // 18
      return [ "/questionnaire/", Spacebars.mustache(view.lookup("_id")) ];                                            // 19
    }                                                                                                                  // 20
  }, "View Details"), HTML.Raw('\n\n    <i class="fa fa-trash"></i>\n  '));                                            // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"QuestionnaireSingle.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/QuestionnaireSingle.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.QuestionnaireSingle.onCreated(function () {                                                                   // 1
  var self = this;                                                                                                     // 2
  self.autorun(function () {                                                                                           // 3
    var id = FlowRouter.getParam('id');                                                                                // 4
    self.subscribe('singleQuestionnaire', id);                                                                         // 5
  });                                                                                                                  // 6
});                                                                                                                    // 7
                                                                                                                       //
Template.QuestionnaireSingle.helpers({                                                                                 // 9
  questionnaire: function () {                                                                                         // 10
    function questionnaire() {                                                                                         // 10
      var id = FlowRouter.getParam('id');                                                                              // 11
      return Questionnaires.findOne({ _id: id });                                                                      // 12
    }                                                                                                                  // 13
                                                                                                                       //
    return questionnaire;                                                                                              // 10
  }(),                                                                                                                 // 10
  updateQuestionnaireId: function () {                                                                                 // 14
    function updateQuestionnaireId() {                                                                                 // 14
      var id = FlowRouter.getParam('id');                                                                              // 15
      return Questionnaires.findOne({ _id: id });                                                                      // 16
    }                                                                                                                  // 17
                                                                                                                       //
    return updateQuestionnaireId;                                                                                      // 14
  }()                                                                                                                  // 14
});                                                                                                                    // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"QuestionnaireSingleConfig.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/QuestionnaireSingleConfig.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.QuestionnaireSingleConfig.onCreated(function () {                                                             // 1
  var self = this;                                                                                                     // 2
  self.autorun(function () {                                                                                           // 3
    var id = FlowRouter.getParam('id');                                                                                // 4
    self.subscribe('singleQuestionnaire', id);                                                                         // 5
  });                                                                                                                  // 6
});                                                                                                                    // 7
                                                                                                                       //
Template.QuestionnaireSingleConfig.helpers({                                                                           // 9
  questionnaire: function () {                                                                                         // 10
    function questionnaire() {                                                                                         // 10
      var id = FlowRouter.getParam('id');                                                                              // 11
      return Questionnaires.findOne({ _id: id });                                                                      // 12
    }                                                                                                                  // 13
                                                                                                                       //
    return questionnaire;                                                                                              // 10
  }(),                                                                                                                 // 10
  updateQuestionnaireId: function () {                                                                                 // 14
    function updateQuestionnaireId() {                                                                                 // 14
      var id = FlowRouter.getParam('id');                                                                              // 15
      return Questionnaires.findOne({ _id: id });                                                                      // 16
    }                                                                                                                  // 17
                                                                                                                       //
    return updateQuestionnaireId;                                                                                      // 14
  }()                                                                                                                  // 14
});                                                                                                                    // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"QuestionnaireSingleExport.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/QuestionnaireSingleExport.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.QuestionnaireSingleExport.onCreated(function () {                                                             // 1
  var self = this;                                                                                                     // 2
  self.autorun(function () {                                                                                           // 3
    var id = FlowRouter.getParam('id');                                                                                // 4
    self.subscribe('singleQuestionnaire', id);                                                                         // 5
  });                                                                                                                  // 6
});                                                                                                                    // 7
                                                                                                                       //
Template.QuestionnaireSingleExport.onRendered(function () {                                                            // 9
  $('#qrcode').qrcode({ text: 'http://www.google.com' });                                                              // 10
});                                                                                                                    // 11
                                                                                                                       //
Template.QuestionnaireSingleExport.helpers({                                                                           // 13
  questionnaire: function () {                                                                                         // 14
    function questionnaire() {                                                                                         // 14
      var id = FlowRouter.getParam('id');                                                                              // 15
      return Questionnaires.findOne({ _id: id });                                                                      // 16
    }                                                                                                                  // 17
                                                                                                                       //
    return questionnaire;                                                                                              // 14
  }()                                                                                                                  // 14
});                                                                                                                    // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"QuestionnaireSingleSensor.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/QuestionnaireSingleSensor.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.QuestionnaireSingleSensor.onCreated(function () {                                                             // 1
  var self = this;                                                                                                     // 2
  self.autorun(function () {                                                                                           // 3
    var id = FlowRouter.getParam('id');                                                                                // 4
    self.subscribe('singleQuestionnaire', id);                                                                         // 5
  });                                                                                                                  // 6
});                                                                                                                    // 7
                                                                                                                       //
Template.QuestionnaireSingleSensor.helpers({                                                                           // 9
  questionnaire: function () {                                                                                         // 10
    function questionnaire() {                                                                                         // 10
      var id = FlowRouter.getParam('id');                                                                              // 11
      return Questionnaires.findOne({ _id: id });                                                                      // 12
    }                                                                                                                  // 13
                                                                                                                       //
    return questionnaire;                                                                                              // 10
  }(),                                                                                                                 // 10
  updateQuestionnaireId: function () {                                                                                 // 14
    function updateQuestionnaireId() {                                                                                 // 14
      var id = FlowRouter.getParam('id');                                                                              // 15
      return Questionnaires.findOne({ _id: id });                                                                      // 16
    }                                                                                                                  // 17
                                                                                                                       //
    return updateQuestionnaireId;                                                                                      // 14
  }()                                                                                                                  // 14
});                                                                                                                    // 9
                                                                                                                       //
Template.registerHelper("currentFieldValue", function (fieldName) {                                                    // 20
  return AutoForm.getFieldValue("reactiveCurrentValueForm", fieldName) || "not selected";                              // 21
});                                                                                                                    // 22
                                                                                                                       //
Template.registerHelper("currentFieldValue2", function (fieldName) {                                                   // 24
  return AutoForm.getFieldValue(fieldName) || "empty";                                                                 // 25
});                                                                                                                    // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Questionnaires.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/Questionnaires.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Questionnaires.onCreated(function () {                                                                        // 1
  var self = this;                                                                                                     // 2
  self.autorun(function () {                                                                                           // 3
    self.subscribe('questionnaires');                                                                                  // 4
  });                                                                                                                  // 5
});                                                                                                                    // 6
                                                                                                                       //
Template.Questionnaires.helpers({                                                                                      // 8
  questionnaires: function () {                                                                                        // 9
    function questionnaires() {                                                                                        // 9
      return Questionnaires.find({});                                                                                  // 10
    }                                                                                                                  // 11
                                                                                                                       //
    return questionnaires;                                                                                             // 9
  }(),                                                                                                                 // 9
  updateQuestionnaireId: function () {                                                                                 // 12
    function updateQuestionnaireId() {                                                                                 // 12
      return this._id;                                                                                                 // 13
    }                                                                                                                  // 14
                                                                                                                       //
    return updateQuestionnaireId;                                                                                      // 12
  }()                                                                                                                  // 12
});                                                                                                                    // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SingleQuestionnaire.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/questionnaires/SingleQuestionnaire.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.SingleQuestionnaire.events({                                                                                  // 1
  'click .fa-trash': function () {                                                                                     // 2
    function clickFaTrash() {                                                                                          // 2
      Meteor.call('deleteQuestionnaire', this._id);                                                                    // 3
    }                                                                                                                  // 4
                                                                                                                       //
    return clickFaTrash;                                                                                               // 2
  }()                                                                                                                  // 2
});                                                                                                                    // 1
                                                                                                                       //
Template.SingleQuestionnaire.helpers({                                                                                 // 14
  nrQuestionnaires: function () {                                                                                      // 15
    function nrQuestionnaires() {                                                                                      // 15
      var id = FlowRouter.getParam('id');                                                                              // 16
                                                                                                                       //
      var questionnaire = Questionnaires.findOne({ _id: id });                                                         // 18
                                                                                                                       //
      console.log(questionnaire + "TEST");                                                                             // 20
                                                                                                                       //
      return Questionnaires.findOne({ _id: id });                                                                      // 23
    }                                                                                                                  // 24
                                                                                                                       //
    return nrQuestionnaires;                                                                                           // 15
  }()                                                                                                                  // 15
});                                                                                                                    // 14
                                                                                                                       //
Template.registerHelper('formatDate', function (date) {                                                                // 28
  return moment(date).format('Do of MMMM, YYYY');                                                                      // 29
});                                                                                                                    // 30
                                                                                                                       //
Template.QuestionnaireSingleSensor.helpers({                                                                           // 34
  questionnaire: function () {                                                                                         // 35
    function questionnaire() {                                                                                         // 35
      var id = FlowRouter.getParam('id');                                                                              // 36
      return Questionnaires.findOne({ _id: id });                                                                      // 37
    }                                                                                                                  // 38
                                                                                                                       //
    return questionnaire;                                                                                              // 35
  }(),                                                                                                                 // 35
  updateQuestionnaireId: function () {                                                                                 // 39
    function updateQuestionnaireId() {                                                                                 // 39
      var id = FlowRouter.getParam('id');                                                                              // 40
      return Questionnaires.findOne({ _id: id });                                                                      // 41
    }                                                                                                                  // 42
                                                                                                                       //
    return updateQuestionnaireId;                                                                                      // 39
  }(),                                                                                                                 // 39
  sensors: function () {                                                                                               // 43
    function sensors() {                                                                                               // 43
      return Sensors.find().fetch();                                                                                   // 44
    }                                                                                                                  // 45
                                                                                                                       //
    return sensors;                                                                                                    // 43
  }()                                                                                                                  // 43
});                                                                                                                    // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"routes.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/routes.js                                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Accounts.onLogin(function () {                                                                                         // 1
  FlowRouter.go('questionnaire-overview');                                                                             // 2
});                                                                                                                    // 3
                                                                                                                       //
Accounts.onLogout(function () {                                                                                        // 5
  FlowRouter.go('home');                                                                                               // 6
});                                                                                                                    // 7
                                                                                                                       //
// Users that are not logged in should always be redictered to the home page.                                          //
FlowRouter.triggers.enter([function (context, redirect) {                                                              // 10
  if (!Meteor.userId()) {                                                                                              // 11
    FlowRouter.go('home');                                                                                             // 12
  }                                                                                                                    // 13
}]);                                                                                                                   // 14
                                                                                                                       //
FlowRouter.route('/', {                                                                                                // 16
  name: 'home',                                                                                                        // 17
  action: function () {                                                                                                // 18
    function action() {                                                                                                // 16
      // if(Meteor.userId()) {                                                                                         //
      //   FlowRouter.go('questionnaire-overview');                                                                    //
      // }                                                                                                             //
      GAnalytics.pageview();                                                                                           // 22
      BlazeLayout.render('HomeLayout');                                                                                // 23
    }                                                                                                                  // 24
                                                                                                                       //
    return action;                                                                                                     // 16
  }()                                                                                                                  // 16
});                                                                                                                    // 16
                                                                                                                       //
FlowRouter.route('/about', {                                                                                           // 27
  name: 'about',                                                                                                       // 28
  action: function () {                                                                                                // 29
    function action() {                                                                                                // 27
      GAnalytics.pageview();                                                                                           // 30
      BlazeLayout.render('About', { main: 'About' });                                                                  // 31
    }                                                                                                                  // 32
                                                                                                                       //
    return action;                                                                                                     // 27
  }()                                                                                                                  // 27
});                                                                                                                    // 27
                                                                                                                       //
FlowRouter.route('/questionnaire-overview', {                                                                          // 35
  name: 'questionnaire-overview',                                                                                      // 36
  action: function () {                                                                                                // 37
    function action() {                                                                                                // 35
      GAnalytics.pageview();                                                                                           // 38
      BlazeLayout.render('MainLayout', { main: 'Questionnaires' });                                                    // 39
    }                                                                                                                  // 40
                                                                                                                       //
    return action;                                                                                                     // 35
  }()                                                                                                                  // 35
});                                                                                                                    // 35
                                                                                                                       //
FlowRouter.route('/questionnaire/:id', {                                                                               // 43
  name: 'questionnaire-single',                                                                                        // 44
  action: function () {                                                                                                // 45
    function action() {                                                                                                // 43
      GAnalytics.pageview();                                                                                           // 46
      BlazeLayout.render('MainLayout', { main: 'QuestionnaireSingle' });                                               // 47
    }                                                                                                                  // 48
                                                                                                                       //
    return action;                                                                                                     // 43
  }()                                                                                                                  // 43
});                                                                                                                    // 43
                                                                                                                       //
FlowRouter.route('/questionnaire/:id/sensor', {                                                                        // 51
  name: 'questionnaire-single-sensor',                                                                                 // 52
  action: function () {                                                                                                // 53
    function action() {                                                                                                // 51
      GAnalytics.pageview();                                                                                           // 54
      BlazeLayout.render('MainLayout', { main: 'QuestionnaireSingleSensor' });                                         // 55
    }                                                                                                                  // 56
                                                                                                                       //
    return action;                                                                                                     // 51
  }()                                                                                                                  // 51
});                                                                                                                    // 51
                                                                                                                       //
FlowRouter.route('/questionnaire/:id/configuration', {                                                                 // 59
  name: 'questionnaire-single-config',                                                                                 // 60
  action: function () {                                                                                                // 61
    function action() {                                                                                                // 59
      GAnalytics.pageview();                                                                                           // 62
      BlazeLayout.render('MainLayout', { main: 'QuestionnaireSingleConfig' });                                         // 63
    }                                                                                                                  // 64
                                                                                                                       //
    return action;                                                                                                     // 59
  }()                                                                                                                  // 59
});                                                                                                                    // 59
                                                                                                                       //
FlowRouter.route('/questionnaire/:id/export', {                                                                        // 67
  name: 'questionnaire-single-export',                                                                                 // 68
  action: function () {                                                                                                // 69
    function action() {                                                                                                // 67
      GAnalytics.pageview();                                                                                           // 70
      BlazeLayout.render('MainLayout', { main: 'QuestionnaireSingleExport' });                                         // 71
    }                                                                                                                  // 72
                                                                                                                       //
    return action;                                                                                                     // 67
  }()                                                                                                                  // 67
});                                                                                                                    // 67
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"Questionnaires.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/Questionnaires.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Questionnaires = new Mongo.Collection('questionnaires');                                                               // 1
                                                                                                                       //
Questionnaires.allow({                                                                                                 // 3
  insert: function () {                                                                                                // 4
    function insert(userId, doc) {                                                                                     // 4
      return !!userId;                                                                                                 // 5
    }                                                                                                                  // 6
                                                                                                                       //
    return insert;                                                                                                     // 4
  }(),                                                                                                                 // 4
  update: function () {                                                                                                // 7
    function update(userId, doc) {                                                                                     // 7
      return !!userId;                                                                                                 // 8
    }                                                                                                                  // 9
                                                                                                                       //
    return update;                                                                                                     // 7
  }()                                                                                                                  // 7
});                                                                                                                    // 3
                                                                                                                       //
SingleCheckbox = new SimpleSchema({                                                                                    // 12
  option: {                                                                                                            // 13
    type: String,                                                                                                      // 14
    label: "Option",                                                                                                   // 15
    optional: true                                                                                                     // 16
  }                                                                                                                    // 13
});                                                                                                                    // 12
                                                                                                                       //
SingleQuestion = new SimpleSchema({                                                                                    // 20
  name: {                                                                                                              // 21
    type: String,                                                                                                      // 22
    label: "Question"                                                                                                  // 23
  },                                                                                                                   // 21
  instructions: {                                                                                                      // 25
    type: String,                                                                                                      // 26
    label: "Instructions",                                                                                             // 27
    optional: true                                                                                                     // 28
  },                                                                                                                   // 25
  timeout: {                                                                                                           // 30
    type: Number,                                                                                                      // 31
    label: "Expiration threshold",                                                                                     // 32
    defaultValue: 0,                                                                                                   // 33
    optional: true,                                                                                                    // 34
    min: 0                                                                                                             // 35
  },                                                                                                                   // 30
  type: {                                                                                                              // 37
    type: String,                                                                                                      // 38
    label: "Question type",                                                                                            // 39
    optional: true,                                                                                                    // 40
    autoform: {                                                                                                        // 41
      type: "select",                                                                                                  // 42
      options: function () {                                                                                           // 43
        function options() {                                                                                           // 43
          return [{ label: "Free Text", value: "Free Text" }, { label: "Multiple Choice", value: "Multiple Choice" }, { label: "Slider", value: "Slider" }];
        }                                                                                                              // 49
                                                                                                                       //
        return options;                                                                                                // 43
      }()                                                                                                              // 43
    }                                                                                                                  // 41
  },                                                                                                                   // 37
  checkboxes: {                                                                                                        // 52
    type: [SingleCheckbox],                                                                                            // 53
    optional: true                                                                                                     // 54
  },                                                                                                                   // 52
  // Slider                                                                                                            //
  minValue: {                                                                                                          // 57
    type: Number,                                                                                                      // 58
    label: "Minimum value",                                                                                            // 59
    optional: true,                                                                                                    // 60
    defaultValue: 0                                                                                                    // 61
  },                                                                                                                   // 57
  maxValue: {                                                                                                          // 63
    type: Number,                                                                                                      // 64
    label: "Maximum value",                                                                                            // 65
    optional: true,                                                                                                    // 66
    defaultValue: 0                                                                                                    // 67
  }                                                                                                                    // 63
});                                                                                                                    // 20
                                                                                                                       //
Configuration = new SimpleSchema({                                                                                     // 71
  startDate: {                                                                                                         // 72
    type: Date,                                                                                                        // 73
    // autoform: {                                                                                                     //
    //     type: "bootstrap-datepicker",                                                                               //
    //     datePickerOptions: {                                                                                        //
    //         format: "dd/mm/yyyy",                                                                                   //
    //         autoclose: true                                                                                         //
    //     }                                                                                                           //
    // },                                                                                                              //
    label: "Study start date",                                                                                         // 81
    optional: true                                                                                                     // 82
  },                                                                                                                   // 72
  endDate: {                                                                                                           // 84
    type: Date,                                                                                                        // 85
    label: "Study end date",                                                                                           // 86
    optional: true                                                                                                     // 87
  }                                                                                                                    // 84
});                                                                                                                    // 71
                                                                                                                       //
SingleSensor = new SimpleSchema({                                                                                      // 91
  sensorType: {                                                                                                        // 92
    type: String                                                                                                       // 93
  },                                                                                                                   // 92
  sensorActive: {                                                                                                      // 95
    type: Boolean,                                                                                                     // 96
    label: "Do you want to enable this option?",                                                                       // 97
    autoform: {                                                                                                        // 98
      type: "boolean-radios",                                                                                          // 99
      trueLabel: "Enabled",                                                                                            // 100
      falseLabel: "Disabled",                                                                                          // 101
      value: false                                                                                                     // 102
    }                                                                                                                  // 98
  },                                                                                                                   // 95
  frequency: {                                                                                                         // 105
    type: Number,                                                                                                      // 106
    label: "Frequency (in microsends)",                                                                                // 107
    optional: true                                                                                                     // 108
  }                                                                                                                    // 105
});                                                                                                                    // 91
                                                                                                                       //
QuestionnaireSchema = new SimpleSchema({                                                                               // 112
  name: {                                                                                                              // 113
    type: String,                                                                                                      // 114
    label: "Name"                                                                                                      // 115
  },                                                                                                                   // 113
  description: {                                                                                                       // 117
    type: String,                                                                                                      // 118
    label: "Description"                                                                                               // 119
  },                                                                                                                   // 117
  questions: {                                                                                                         // 121
    type: [SingleQuestion],                                                                                            // 122
    label: "",                                                                                                         // 123
    optional: true                                                                                                     // 124
  },                                                                                                                   // 121
  configuration: {                                                                                                     // 126
    type: [Configuration],                                                                                             // 127
    optional: true                                                                                                     // 128
  },                                                                                                                   // 126
  sensors: {                                                                                                           // 130
    type: [SingleSensor],                                                                                              // 131
    optional: true                                                                                                     // 132
  },                                                                                                                   // 130
  author: {                                                                                                            // 134
    type: String,                                                                                                      // 135
    label: "Author",                                                                                                   // 136
    autoValue: function () {                                                                                           // 137
      function autoValue() {                                                                                           // 137
        return this.userId;                                                                                            // 138
      }                                                                                                                // 139
                                                                                                                       //
      return autoValue;                                                                                                // 137
    }(),                                                                                                               // 137
    autoform: {                                                                                                        // 140
      type: "hidden"                                                                                                   // 141
    }                                                                                                                  // 140
  },                                                                                                                   // 134
  createdAt: {                                                                                                         // 144
    type: Date,                                                                                                        // 145
    label: "Created at",                                                                                               // 146
    autoValue: function () {                                                                                           // 147
      function autoValue() {                                                                                           // 147
        return new Date();                                                                                             // 148
      }                                                                                                                // 149
                                                                                                                       //
      return autoValue;                                                                                                // 147
    }(),                                                                                                               // 147
    autoform: {                                                                                                        // 150
      type: "hidden"                                                                                                   // 151
    }                                                                                                                  // 150
  }                                                                                                                    // 144
});                                                                                                                    // 112
                                                                                                                       //
Meteor.methods({                                                                                                       // 156
  deleteQuestionnaire: function () {                                                                                   // 157
    function deleteQuestionnaire(id) {                                                                                 // 157
      Questionnaires.remove(id);                                                                                       // 158
    }                                                                                                                  // 159
                                                                                                                       //
    return deleteQuestionnaire;                                                                                        // 157
  }()                                                                                                                  // 157
});                                                                                                                    // 156
                                                                                                                       //
Questionnaires.attachSchema(QuestionnaireSchema);                                                                      // 162
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Sensors.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/Sensors.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Sensors = new Mongo.Collection('sensors');                                                                             // 1
                                                                                                                       //
Sensors.allow({                                                                                                        // 3
  insert: function () {                                                                                                // 4
    function insert(userId, doc) {                                                                                     // 4
      return !!userId;                                                                                                 // 5
    }                                                                                                                  // 6
                                                                                                                       //
    return insert;                                                                                                     // 4
  }()                                                                                                                  // 4
});                                                                                                                    // 3
                                                                                                                       //
SensorSchema = new SimpleSchema({                                                                                      // 9
  type: {                                                                                                              // 10
    type: String                                                                                                       // 11
  },                                                                                                                   // 10
  active: {                                                                                                            // 13
    type: Boolean,                                                                                                     // 14
    defaultValue: false                                                                                                // 15
  },                                                                                                                   // 13
  frequency: {                                                                                                         // 17
    type: Number,                                                                                                      // 18
    label: "Frequency (in microsends)"                                                                                 // 19
  }                                                                                                                    // 17
});                                                                                                                    // 9
                                                                                                                       //
Sensors.attachSchema(SensorSchema);                                                                                    // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.js":["meteor/meteor",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// main.js                                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});                                            // 1
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 3
  // code to run on server at startup                                                                                  //
});                                                                                                                    // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},{"extensions":[".js",".json",".html"]});
require("./client/layouts/template.About.js");
require("./client/layouts/template.HomeLayout.js");
require("./client/layouts/template.MainLayout.js");
require("./client/partials/template.Footer.js");
require("./client/partials/template.Header.js");
require("./client/partials/template.SideNav.js");
require("./client/partials/template.SingleQuestionnaireNav.js");
require("./client/questionnaires/template.NewQuestionnaire.js");
require("./client/questionnaires/template.QuestionnaireSingle.js");
require("./client/questionnaires/template.QuestionnaireSingleConfig.js");
require("./client/questionnaires/template.QuestionnaireSingleExport.js");
require("./client/questionnaires/template.QuestionnaireSingleSensor.js");
require("./client/questionnaires/template.Questionnaires.js");
require("./client/questionnaires/template.SingleQuestionnaire.js");
require("./lib/routes.js");
require("./client/partials/SingleQuestionnaireNav.js");
require("./client/questionnaires/QuestionnaireSingle.js");
require("./client/questionnaires/QuestionnaireSingleConfig.js");
require("./client/questionnaires/QuestionnaireSingleExport.js");
require("./client/questionnaires/QuestionnaireSingleSensor.js");
require("./client/questionnaires/Questionnaires.js");
require("./client/questionnaires/SingleQuestionnaire.js");
require("./collections/Questionnaires.js");
require("./collections/Sensors.js");
require("./main.js");