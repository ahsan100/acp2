Picker.route('/study/:id/json', function(params, req, res, next) { 
    var response = Studies.findOne({_id: params.id});

    var finalJSON =[];
    if (response.sensorCheck) {
    	var sensors = [];
    	var count = 0;
    	for(j = 0; j< response.sensor.length;j++){
    		if(response.sensor[j].sensorActive){
    			var sensor_Data ={}
    			var sensor_Freq ={}
    			switch(response.sensor[j].sensorType){
    				case "Accelerometer":
    					sensor_Data.setting = "status_accelerometer";
	    				sensor_Freq.setting = "frequency_accelerometer";
    					break;
    				case "Application":
    					sensor_Data.setting = "status_applications";
    					sensor_Freq.setting = "frequency_applications";
    					if(typeof response.sensor[j].application != "undefined" ){
    						for(k =0; k<response.sensor[j].application.length; k++){
    							var sensor_Extra ={}
    							switch(response.sensor[j].application[k]){
    								case "notification":
	    								sensor_Extra.setting = "status_notifications";
	    								break;
    								case "crash":
	    								sensor_Extra.setting = "status_crashes";
	    								break;
    								case "keyboard":
	    								sensor_Extra.setting = "status_keyboard";
	    								break;
    								default:
    									console.log("error");
    							}
		    					sensor_Extra.value = "true";
		    					sensors[count] =sensor_Extra
		    					count++;
	    					}
    					}
    					break;
    				case "Barometer":
    					sensor_Data.setting = "status_barometer";
	    				sensor_Freq.setting = "frequency_barometer";
    					break;
    				case "Battery":
    					sensor_Data.setting = "status_battery";
    					break;
    				case "Bluetooth":
    					sensor_Data.setting = "status_bluetooth";
	    				sensor_Freq.setting = "frequency_bluetooth";
    					break;
    				case "Communication":
    					sensor_Data.setting = "status_communication_events";
    					if(typeof response.sensor[j].communication != "undefined" ){
    						for(k =0; k<response.sensor[j].communication.length; k++){
    							var sensor_Extra ={}
    							switch(response.sensor[j].communication[k]){
    								case "calls":
	    								sensor_Extra.setting = "status_calls";
	    								break;
    								case "messages":
	    								sensor_Extra.setting = "status_messages";
	    								break;
    								default:
    									console.log("error");
    							}
		    					sensor_Extra.value = "true";
		    					sensors[count] =sensor_Extra
		    					count++;
	    					}
	    				}
    					break;
    				case "Gravity":
    					sensor_Data.setting = "status_gravity";
	    				sensor_Freq.setting = "frequency_gravity";
    					break;
    				case "Gyroscope":
    					sensor_Data.setting = "status_gyroscope";
	    				sensor_Freq.setting = "frequency_gyroscope";
    					break;
    				case "Installations":
    					sensor_Data.setting = "status_installations";
    					break;
    				case "Light":
    					sensor_Data.setting = "status_light";
    					sensor_Freq.setting = "frequency_light";
    					break;
    				case "Linear Accelerometer":
    					sensor_Data.setting = "status_linear_accelerometer";
	    				sensor_Freq.setting = "frequency_linear_accelerometer";
    					break;
    				case "Location":
    					sensor_Data.setting = "status_location";
    					break;
    				case "Magnetometer":
    					sensor_Data.setting = "status_magnetometer";
    					sensor_Freq.setting = "frequency_magnetometer";
    					break;
    				case "Network":
    					break;
    				case "Processer":
    					sensor_Data.setting = "status_processer";
    					sensor_Freq.setting = "frequency_processer";
    					break;
    				case "Proximity":
    					sensor_Data.setting = "status_proximity";
    					sensor_Freq.setting = "frequency_proximity";
    					break;
    				case "Rotation":
    					sensor_Data.setting = "status_rotation";
    					sensor_Freq.setting = "frequency_rotation";
    					break;
    				case "Screen":
    					sensor_Data.setting = "status_screen";
    					break;
    				case "Telephony":
    					sensor_Data.setting = "status_telephony";
    					break;
    				case "Temperature":
    					sensor_Data.setting = "status_temperature";
    					sensor_Freq.setting = "frequency_temperature";
    					break;
    				case "Wi-Fi":
    					sensor_Data.setting = "status_wifi";
	    				sensor_Freq.setting = "frequency_wifi";
    					break;
    				default:
    					console.log("error");

    			}
    			sensor_Data.value = "true";
    			sensors[count] =sensor_Data;
    			count++;
    			if(typeof response.sensor[j].frequency != "undefined" ){
    				sensor_Freq.value = response.sensor[j].frequency;
	    			sensors[count] =sensor_Freq;
	    			count++;
    			}
    		}
    	}
    	var finalSensorJSON ={};
    	finalSensorJSON.sensors = sensors;
    	finalJSON[0] = finalSensorJSON;
    }

    /*var study_config=[{"sensors":[{"setting":"status_accelerometer","value":"true"},{"setting":"status_mqtt","value":"true"},
    {"setting":"mqtt_server","value":"api.awareframework.com"},{"setting":"mqtt_port","value":"8883"},
    {"setting":"mqtt_keep_alive","value":"600"},{"setting":"mqtt_qos","value":"2"},
    {"setting":"status_esm","value":"true"},{"setting":"mqtt_username","value":"c16e1b30-1c37-4d63-bac1-fc6249ffb53a"},
    {"setting":"mqtt_password","value":"wq55LnPK0OG0"},{"setting":"study_id","value":"1078"},
    {"setting":"study_start","value":"1486599448505"},
    {"setting":"webservice_server","value":"https:\/\/api.awareframework.com\/index.php\/webservice\/index\/1078\/3TAjYlSiGyP9"},
    {"setting":"status_webservice","value":"true"}]}]*/

    if(response.questionCheck){

    var obj = {notification_title: response.title , notification_body: response.description ,
    	start_date: response.start_date, end_date: response.end_date};

    if ( typeof response.scheduler[0].hours != 'undefined'){
    	obj.hours = [];
	    for(j = 0; j < response.scheduler[0].hours.length; j++){
	    		obj.hours[j] =response.scheduler[0].hours[j];
	    	}
    }

    if ( typeof response.scheduler[0].weekdays != 'undefined'){
    	obj.weekdays = [];
    	for(j = 0; j < response.scheduler[0].weekdays.length; j++){
	    		obj.weekdays[j] =response.scheduler[0].weekdays[j];
	    	}
    }

    if ( typeof response.scheduler[0].months != 'undefined'){
    	obj.months = [];
    	for(j = 0; j < response.scheduler[0].months.length; j++){
	    		obj.months[j] =response.scheduler[0].months[j];
	    	}
    }

    obj.esms =[];
    for (i = 0; i < response.questions.length; i++) { 
    var data ={esm_type : response.questions[i].type, esm_title :response.questions[i].question, 
    	esm_instructions:response.questions[i].instructions, esm_expiration_threshold :response.questions[i].timeout};
    	switch(response.questions[i].type){
    		case 1:
    			data.esm_submit = response.questions[i].submit;
    			break;
    		case 2:
    			data.esm_submit = response.questions[i].submit;
    			data.esm_radios =[];
    			for(j = 0; j < response.questions[i].options.length; j++){
    				data.esm_radios[j] =response.questions[i].options[j].option;
    			}
    			break;
    		case 3:
    			data.esm_submit = response.questions[i].submit;
    			data.esm_checkboxes =[];
    			for(j = 0; j < response.questions[i].options.length; j++){
    				data.esm_checkboxes[j] =response.questions[i].options[j].option;
    			}
    			
    			break;
    		case 4:
    			data.esm_submit = response.questions[i].submit;
    			data.esm_likert_max = response.questions[i].maxValue;
    			data.esm_likert_max_label = response.questions[i].maxLabel;
    			data.esm_likert_min_label = response.questions[i].minLabel;
    			data.esm_likert_step = response.questions[i].stepSize;
    			break;
    		case 5:
    			data.esm_quick_answers =[];
    			for(j = 0; j < response.questions[i].options.length; j++){
    				data.esm_quick_answers[j] =response.questions[i].options[j].option;
    			}
    			break;
    		case 6:
    			data.esm_submit = response.questions[i].submit;
    			data.esm_scale_min = response.questions[i].minValue;
    			data.esm_scale_max = response.questions[i].maxValue;
    			data.esm_scale_start = response.questions[i].scaleStart;
    			data.esm_scale_max_label = response.questions[i].maxLabel;
    			data.esm_scale_min_label = response.questions[i].minLabel;
    			data.esm_scale_step = response.questions[i].stepSize;
    			break;
    		case 7:
    			data.esm_submit = response.questions[i].submit;
    			break;
    		default:
    			console.log("error");
    	}

    	obj.esms[i] = {esm : data};
	}
	var finalScheduleJSON = {};
	finalScheduleJSON.schedulers = obj;
	finalJSON[1] = finalScheduleJSON
}
	

    res.setHeader( 'Content-Type', 'application/json' );
    res.statusCode = 200;
    res.end(JSON.stringify(finalJSON));
});