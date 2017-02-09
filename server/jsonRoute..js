Picker.route('/study/:id/json', function(params, req, res, next) { 
    var response = Studies.findOne({_id: params.id});
    /*if (response.sensorCheck) {
    	var sensors = [];
    	var count = 0;
    	for(j = 0; j< response.sensor.length;j++){
    		if(response.sensor[j].sensorActive){
    			switch(response.sensor[j].sensorType){
    				case "Accelerometer":
    					var sensor_Data ={}
    					sensor_Data.setting = "status_accelerometer";
    					sensor_Data.value = "true";
    					sensors[count] =sensor_Data;
    					count++;
    					break;
    				case "Application":
    					break;
    				case "Barometer":
    					var sensor_Data ={}
    					sensor_Data.setting = "status_barometer";
    					sensor_Data.value = "true";
    					sensors[count] =sensor_Data;
    					count++;
    					break;
    				case "Battery":
    					break;
    				case "Bluetooth":
    					break;
    				case "Communication":
    					break;
    				case "Gravity":
    					break;
    				case "Gyroscope":
    					break;
    				case "Installations":
    					break;
    				case "Light":
    					break;
    				case "Linear Accelerometer":
    					break;
    				case "Location":
    					break;
    				case "Magnetometer":
    					break;
    				case "Network":
    					break;
    				case "Processer":
    					break;
    				case "Proximity":
    					break;
    				case "Rotation":
    					break;
    				case "Screen":
    					break;
    				case "Telephony":
    					break;
    				case "Temperature":
    					break;
    				case "Wi-Fi":
    					break;
    				default:
    					console.log("error");

    			}
    		}
    	}
    }*/

    var study_config=[{"sensors":[{"setting":"status_accelerometer","value":"true"},{"setting":"status_mqtt","value":"true"},
    {"setting":"mqtt_server","value":"api.awareframework.com"},{"setting":"mqtt_port","value":"8883"},
    {"setting":"mqtt_keep_alive","value":"600"},{"setting":"mqtt_qos","value":"2"},
    {"setting":"status_esm","value":"true"},{"setting":"mqtt_username","value":"c16e1b30-1c37-4d63-bac1-fc6249ffb53a"},
    {"setting":"mqtt_password","value":"wq55LnPK0OG0"},{"setting":"study_id","value":"1078"},
    {"setting":"study_start","value":"1486599448505"},
    {"setting":"webservice_server","value":"https:\/\/api.awareframework.com\/index.php\/webservice\/index\/1078\/3TAjYlSiGyP9"},
    {"setting":"status_webservice","value":"true"}]}]


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
    res.setHeader( 'Content-Type', 'application/json' );
    res.statusCode = 200;
    res.end(JSON.stringify(obj));
});