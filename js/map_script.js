
		var geocoder;
		var map;
		var a,b;
		var markersArray = [];
		var info_window = new google.maps.InfoWindow({content: ''});

		function add_marker(point, note) {
			var marker = new google.maps.Marker({map: map, position: point, clickable: true});
			marker.note = note;
			google.maps.event.addListener(marker, 'click', function() {
				info_window.content = marker.note;
				info_window.open(map, marker);
			});
			return marker;
		}

		function initialize() {
			i=2;
			var infoArray = 
			[ 
			new google.maps.LatLng(53.385846,-1.471385),
			new google.maps.LatLng(54.385846,-3.471385)
			];

			for(var j=0;j<i; j++)
			{
				marker = add_marker(infoArray[j],'<b>City: </b> ' + "city name" + ' <br>');
				markersArray.push(marker);	
			}

		//	geocoder = new google.maps.Geocoder();
			var latlng = new google.maps.LatLng(53.385846,-1.471385);
			var mapOptions = {
				zoom: 2,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
			/*
			google.maps.Map.prototype.clearOverlays = function() {
				if (markersArray) {
					for (i in markersArray) {
						markersArray[i].setMap(null);
					}
					markersArray.length = 0;
				}
			}
			*/
			//ajaxfun(0,0);
			//ajaxCallSucceed();
		}

		function ajaxCallSucceed() {
			var i=0;
			map.setCenter(new google.maps.LatLng(infoArray[0].lat,infoArray[0].lng));
			marker = add_marker(0,new google.maps.LatLng(infoArray[i].lat,infoArray[i].lng),
			'<b>Latitude: </b> ' + infoArray[i].lat + ' <br>' +
			'<b>Longitude: </b> ' + infoArray[i].lng + ' <br>' +
			'<b>Magnitude: </b> ' + infoArray[i].magnitude + ' <br>' +
			'<b>datetime: </b> ' + infoArray[i].datetime + ' <br>' +
			'<b>depth: </b> ' + infoArray[i].depth + ' <br>');
			markersArray.push(marker);
			i=1;
			while(infoArray[i].lng){
				marker = add_marker(0,new google.maps.LatLng(infoArray[i].lat,infoArray[i].lng),
				'<b>Latitude: </b> ' + infoArray[i].lat + ' <br>' +
				'<b>Longitude: </b> ' + infoArray[i].lng + ' <br>' +
				'<b>Magnitude: </b> ' + infoArray[i].magnitude + ' <br>' +
				'<b>datetime: </b> ' + infoArray[i].datetime + ' <br>' +
				'<b>depth: </b> ' + infoArray[i].depth + ' <br>');
				markersArray.push(marker);
				i++;
			}
		}

		function ajaxCallFailed(error) {
			log.message("Falied..");
		}

		function ajaxfun(a,b){
			var q = "http://api.geonames.org/earthquakesJSON?north=-200&south=200&east=200&west=-170&username=gurumukhi&date=2012-08-01&callback=?";
			$.ajax({
				type: "POST",
				data: "{'prefix':''}",
				url: q,
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: ajaxCallSucceed,
				failure: ajaxCallFailed
			});
		}

		function codeAddress() {
			var address = document.getElementById("address").value;
			geocoder.geocode( { 'address': address}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					ajaxfun(results[0].geometry.location.lng(),results[0].geometry.location.lat());
				} else {
					console.log("Geocode was not successful for the following reason: " + status);
				}
			});
		}
