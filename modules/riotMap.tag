<riot-map>

<div id="map"></div>
    <script>

		var map,
			mapWrapper;

		function initMap() {
			  map = new google.maps.Map(this.map, {
			    center: {lat: -34.397, lng: 150.644},
			    zoom: 8
			  });
		}

		

		this.on('mount', function(){
			debugger;
   mapWrapper = document.getElementById('map');
  })
initMap();
    </script>

</riot-map>