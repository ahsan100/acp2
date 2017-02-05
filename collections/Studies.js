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
    type: String,
    label: "Question type",
    optional: true,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Free Text", value: "Free Text"},
          {label: "Radio", value: "Radio"},
          {label: "Checkbox", value: "Checkbox"},
          {label: "Likeart Scale", value: "Likeart Scale"},
          {label: "Quick Answer", value: "Quick Answer"},
          {label: "Scale", value: "Scale"},
          {label: "Numeric", value: "Numeric"}
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
    label: "Minimum value"
  },

  // Likeart Scale can also use same Max Value and Step Size

  maxLabel: {
  	type: String,
    label: "Maximum Label"
  },

  minLabel: {
  	type: String,
    label: "Minimum Label"
  },

  maxValue: {
    type: Number,
    label: "Maximum value"
  },

  stepSize: {
  	type: Number,
  	label: "Step Size"
  },

  scaleStart:{
    type: Number,
    label: "Scale Start"
  }

});

Sensor = new SimpleSchema({
  sensorType: {
    type: String,
    allowedValues: ["Accelerometer", "Barometer",  "Gravity", "Gyroscope", "Light", "Location", "Magnetometer", "Temperature"],
    autoform: {
      type: "hidden"
    }
  },
  sensorActive: {
    type: Boolean,
    label: "Do you want to enable this option?",
    autoform:{
      type: "boolean-radios",
      trueLabel: "Enabled",
      falseLabel: "Disabled",
      defaultValue: false
    }
  },
  frequency: {
    type: Number,
    label: "Frequency (in microsends)",
    optional: true
  }
});


Schedule = new SimpleSchema({

	hours: {
		type: [Number],
		optional: true,
    label: "Hour",
    autoform: {
      type: "select-multiple",
          options: function () {
            return [
              {label: "00", value: 0},{label: "01", value: 1},{label: "02", value: 2},{label: "04", value: 4},
              {label: "05", value: 5},{label: "06", value: 6},{label: "07", value: 7},{label: "08", value: 8},
              {label: "09", value: 9},{label: "10", value: 10},{label: "11", value: 11},{label: "12", value: 12},
              {label: "13", value: 13},{label: "14", value: 14},{label: "15", value: 15},{label: "16", value: 16},
              {label: "17", value: 17},{label: "18", value: 18},{label: "19", value: 19},{label: "20", value: 20},
              {label: "21", value: 21},{label: "22", value: 22},{label: "23", value: 23}
            ];
        }
    }
	},

	weekdays: {
		type: [String],
		optional: true,
    label: "Weekday",
    autoform: {
      type: "select-multiple",
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
      type: "select-multiple",
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
        type: "bootstrap-datepicker"
      }
  },
  end_date: {
  	type: Date,
  	label: "End_date",
  	optional: true,
    autoform: {
        type: "bootstrap-datepicker"
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