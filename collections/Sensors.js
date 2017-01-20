Sensors = new Mongo.Collection('sensors');

Sensors.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

Sensors.Schema = new SimpleSchema({
  name: {
    type: String,
    label: "Sensor Name"
  }
});

