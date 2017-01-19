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

  // Quick Answer
  quickAnswer: {
  	type: [String],
  	label: "Quick Answer",
  	optional: true
  },

  //Scale
  minValue: {
    type: Number,
    label: "Minimum value",
    optional: true,
    defaultValue: 0
  },

  // Likeart Scale can also use same Max Value and Step Size

  maxLabel: {
  	type: String,
    label: "Maximum Label",
    optional: true
  },

  minLabel: {
  	type: String,
    label: "Minimum Label",
    optional: true
  },

  maxValue: {
    type: Number,
    label: "Maximum value",
    optional: true,
    defaultValue: 0
  },

  stepSize: {
  	type: Number,
  	label: "Step Size",
  	optional: true,
  	defaultValue: 0
  }

});

Sensor = new SimpleSchema({
	sensorType: {
    	type: String
  	},
  	sensorActive: {
   		type: Boolean,
    	label: "Do you want to enable this option?",
    	autoform:{
        	type: "boolean-radios",
        	trueLabel: "Enabled",
        	falseLabel: "Disabled",
        	value: false
    	}
  	},
  	frequency: {
    	type: Number,
    	label: "Frequency (in microsends)",
    	optional: true
  	}
});

Scheduler = new SimpleSchema({

	hour: {
		type: [Number],
		label: "Hour",
		optional: true
	},
	weekday: {
		type: [Number],
		label: "Weekday",
		optional: true
	},
	month: {
		type: [Number],
		label: "Month",
		optional: true
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
  	type: [Scheduler],
  	label: "scheduler",
  	optional: true
  },

  start_date: {
  	type: Date,
  	label: "Start_date",
  	optional: true
  },
  end_date: {
  	type: Date,
  	label: "End_date",
  	optional: true
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