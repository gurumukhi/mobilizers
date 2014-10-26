$(document).ready(function() {

	//------- Google Maps ---------//
		  
	// Creating a LatLng object containing the coordinate for the center of the map
	var latlng = [
	new google.maps.LatLng(22.7253,75.8655), //indore0
	new google.maps.LatLng(17.3660,78.4760), //hyd1
	new google.maps.LatLng(13.0839, 80.2700), //chennai2
	new google.maps.LatLng(9.9700,76.28), //cochin3
	new google.maps.LatLng(26.926,75.8235), //jaipur4
	new google.maps.LatLng(18.9750,72.8258), //mumbai5
	new google.maps.LatLng(18.5203,73.8567), //pune6
	new google.maps.LatLng(28.6139, 77.2089), //delhi7
	new google.maps.LatLng(21.1500,79.0900), //nagpur
	new google.maps.LatLng(12.9667, 77.5667), //bangalore
	new google.maps.LatLng(20.0000, 73.7800), //nasik
	new google.maps.LatLng(12.9202, 79.1333), //vellor
	new google.maps.LatLng(11.2500, 75.7700), //kozhikode
	new google.maps.LatLng(15.4989, 73.8278), //goa
	new google.maps.LatLng(24.5800, 73.6800) //udaipur
	]
	// Creating an object literal containing the properties we want to pass to the map  
	var options = {  
		zoom: 7, // This number can be set to define the initial zoom level of the map
		center: latlng[7],
		mapTypeId: google.maps.MapTypeId.ROADMAP // This value can be set to define the map type ROADMAP/SATELLITE/HYBRID/TERRAIN
	};  
	// Calling the constructor, thereby initializing the map  
	var map = new google.maps.Map(document.getElementById('map-canvas'), options);  
	
	// Define Marker properties
	var image = new google.maps.MarkerImage('images/marker.png',
			
		// This marker image size
		new google.maps.Size(44, 65),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image is the base of the flagpole at  20,100??
		new google.maps.Point(0,0)
	);

	// Add Marker
	for(varr = 0 ; varr < 15; varr++){
		var marker1 = new google.maps.Marker({
			position: latlng[varr], 
			map: map		
			//,icon: image // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
		});	
	}
		console.log("added marker");
	// Add listener for a click on the pin
	google.maps.event.addListener(marker1, 'click', function() {  
		infowindow1.open(map, marker1);  
	});
		
	// Add information window
	var infowindow1 = new google.maps.InfoWindow({  
		content:  createInfo('Evoluted New Media', 'Ground Floor,<br />35 Lambert Street,<br />Sheffield,<br />South Yorkshire,<br />S3 7BH<br /><a href="http://www.evoluted.net" title="Click to view our website">Our Website</a>')
	}); 
	
	// Create information window
	function createInfo(title, content) {
		return '<div class="infowindow"><strong>'+ title +'</strong><br />'+content+'</div>';
	} 

});


