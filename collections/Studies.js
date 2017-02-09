try{
Studies = new Mongo.Collection('studies');


Studies.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});
 
 // For Checkbox, Radio & Quick Answer Options
Option = new SimpleSchema({
  option: {
    type: String,
    label: "Option",
    optional: true
  }
});

Question = new SimpleSchema({

	question: {
		type: String,
		label: "Question"	
	},

	instructions: {
		type: String,
		label: "Instructions"	
	},

	timeout: {
    	type: Number,
    	label: "Expiration threshold",
    	defaultValue: 0,
    	min: 0
    },

    type: {
    type: Number,
    label: "Question type",
    optional: true,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Free Text", value: 1},
          {label: "Radio", value: 2},
          {label: "Checkbox", value: 3},
          {label: "Likeart Scale", value: 4},
          {label: "Quick Answer", value: 5},
          {label: "Scale", value: 6},
          {label: "Numeric", value: 7}
        ];
      }
    }
  },

  submit: {
  	type: String,
  	label: "Submit Label",
  	optional: true
  },

  notiTimeout: {
  	type: Number,
  	label: "Notification Timeout",
  	optional: true,
  	defaultValue: 0
  },

  options: {
  	type: [Option],
  	optional: true
  },

  //Scale
  minValue: {
    type: Number,
    optional: true,
    label: "Minimum value"
  },

  // Likeart Scale can also use same Max Value and Step Size

  maxLabel: {
  	type: String,
    optional: true,
    label: "Maximum Label"
  },

  minLabel: {
  	type: String,
    optional: true,
    label: "Minimum Label"
  },

  maxValue: {
    type: Number,
    optional: true,
    label: "Maximum value"
  },

  stepSize: {
  	type: Number,
    optional: true,
  	label: "Step Size"
  },

  scaleStart:{
    type: Number,
    optional: true,
    label: "Scale Start"
  }

});

Sensor = new SimpleSchema({
  sensorType: {
    type: String,
    allowedValues: ["Accelerometer","Application", "Barometer","Battery","Bluetooth","Communication","Gravity", "Gyroscope","Installations",
    "Light","Linear Accelerometer", "Location", "Magnetometer","Network","Processer","Proximity","Rotation",
    "Screen","Telephony","Temperature","Wi-Fi"],
    autoform: {
      type: "hidden"
    }
  },
  sensorActive: {
    type: Boolean,
    autoform:{
      type: "boolean-radios",
      trueLabel: "Enabled",
      falseLabel: "Disabled",
      defaultValue: false,
      label:false
    }
  },
  frequency: {
    type: Number,
    label: "Frequency (in microsends)",
    optional: true
  },
  application: {
    type: [String],
    label: "Application Options",
    optional: true,
    autoform: {
      type: "select-checkbox",
          options: function () {
            return [
              {label: "Status Notifications", value: "Notification"},{label: "Status Crashes", value: "crash"},
              {label: "Status keyboard", value: "keyboard"}
            ];
        }
    }
  },
  communication: {
    type: [String],
    optional: true,
    label: "Communication Options",
    autoform: {
      type: "select-checkbox",
          options: function () {
            return [
              {label: "Status Calls", value: "calls"},{label: "Status Messages", value: "messages"}
            ];
        }
    }
  },
  network: {
    type: [String],
    optional: true,
    label: "Network Options",
    autoform: {
      type: "select-checkbox",
          options: function () {
            return [
              {label: "Status Network Events", value: "network"},{label: "Status Network Traffic", value: "traffic"}
            ];
        }
    }
  }
});


Schedule = new SimpleSchema({

	hours: {
		type: [Number],
		optional: true,
    label: "Hour",
    autoform: {
      type: "select-checkbox-inline",
      label:false,
          options: function () {
            return [
              {label: "00:00", value: 0},{label: "01:00", value: 1},{label: "02:00", value: 2},{label: "04:00", value: 4},
              {label: "05:00", value: 5},{label: "06:00", value: 6},{label: "07:00", value: 7},{label: "08:00", value: 8},
              {label: "09:00", value: 9},{label: "10:00", value: 10},{label: "11:00", value: 11},{label: "12:00", value: 12},
              {label: "13:00", value: 13},{label: "14:00", value: 14},{label: "15:00", value: 15},{label: "16:00", value: 16},
              {label: "17:00", value: 17},{label: "18:00", value: 18},{label: "19:00", value: 19},{label: "20:00", value: 20},
              {label: "21:00", value: 21},{label: "22:00", value: 22},{label: "23:00", value: 23}
            ];
        }
    }
	},

	weekdays: {
		type: [String],
		optional: true,
    label: "Weekday",
    autoform: {
      type: "select-checkbox-inline",
      label:false,
          options: function () {
            return [
              {label: "Monday", value: "monday"},{label: "Tuesday", value: "tuesday"},{label: "Wednesday", value: "wednesday"},
              {label: "Thursday", value: "thursday"},{label: "Friday", value: "friday"},
              {label: "Saturday", value: "saturday"},{label: "Sunday", value: "sunday"}
            ];
        }
    }
	},

	months: {
		type: [String],
		optional: true,
    label: "Month",
     autoform: {
      type: "select-checkbox-inline",
      label:false,
          options: function () {
            return [
              {label: "January", value: "january"},{label: "February", value: "february"},{label: "March", value: "march"},
              {label: "April", value: "april"},{label: "May", value: "may"},{label: "June", value: "june"},
              {label: "July", value: "july"},{label: "August", value: "august"},{label: "September", value: "september"},
              {label: "October", value: "october"},{label: "November", value: "november"},{label: "December", value: "december"}
            ];
        }
    }
	},
	interval:{
		type: Number,
		label: "Interval",
		optional: true
	}

});

Studies.attachSchema(new SimpleSchema({
  study_id: {
  	type: Number,
  	label: "Study_id",
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  user_id: {
  	type: String,
  	label: "User_id",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  title: {
  	type: String,
  	label: "Title"
  },
  description: {
  	type: String,
  	label: "Description"
  },

  questions : {
  	type: [Question],
    optional: true
  },

  sensorCheck: {
    type: Boolean,
    label:"Do you want to enable the Sensors?",
	optional: true,
    autoform:{
      type: "boolean-radios",
      trueLabel: "Enabled",
      falseLabel: "Disabled",
      defaultValue: false,
    }
  },

  sensor: {
  	type: [Sensor],
  	label: "Sensor",
  	optional: true
  },

  scheduler: {
  	type: [Schedule],
  	optional: true
  },

  start_date: {
  	type: Date,
  	label: "Start_date",
  	optional: true,
    autoform: {
        type: "bootstrap-datepicker",
        datePickerOptions:
                {
                    format: "mm-dd-yyyy"
                }
      }
  },
  end_date: {
  	type: Date,
  	label: "End_date",
  	optional: true,
    autoform: {
        type: "bootstrap-datepicker",
        datePickerOptions:
                {
                    format: "mm-dd-yyyy"
                }
      }
  },
  createdAt: {
    type: Date,
    label: "Created at",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  },
  exported: {
    type: Boolean,
    label: "Exported",
	  optional: true,
    defaultValue: false,
    autoform: {
      type: "hidden"
    }
  }
}));

Meteor.methods({
  deleteStudies: function(id) {
    Studies.remove(id);
  }
});

}
catch(err){
	console.log(err);
}
