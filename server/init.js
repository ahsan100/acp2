Meteor.startup(function() {
  // Populate Sensors collection if empty
  if (Sensors.find().count() === 0) {
    Sensors.insert({
      type: 'LIGHT'
    });
    Sensors.insert({
      type: 'ACCELEROMETER'
    });
    Sensors.insert({
      type: 'GRAVITY'
    });
    Sensors.insert({
      type: 'BAROMETER'
    });
  }
});

