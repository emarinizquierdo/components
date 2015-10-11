<riot-map>

<div id="map"></div>


 <style scoped>
    :scope {
      	width: 100%;
    	height: 400px;
    	position: relative;
    }

    #map{
      	width: 100%;
    	height: 100%;
    }
                    
  </style>


    <script>


		var map,
			mapWrapper;

		function initMap() {
			  map = new google.maps.Map(mapWrapper, {
			    center: {lat: -34.397, lng: 150.644},
			    zoom: 8
			  });

$.get("/api/route", function(data, status){

			  		var routeCorrd = data[0].geometry.coordinates.map(function(a){return {lat : a[1], lng: a[0]}})

			  		var flightPath = new google.maps.Polyline({
			    path: routeCorrd,
			    geodesic: true,
			    strokeColor: '#FF0000',
			    strokeOpacity: 1.0,
			    strokeWeight: 2
			  });

			  		flightPath.setMap(map);

    });




			  

		}

		

		this.on('mount', function(){
		   mapWrapper = document.getElementById('map');
		   initMap();
		})
	
    </script>

</riot-map>