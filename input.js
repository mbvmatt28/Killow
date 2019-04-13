//Grab address from input field after pressing enter
$(document).ready(function() {   
    $(document).keyup(function(event) {
      localStorage.setItem("key", event.key)
        if ($("#autocomplete").is(":focus") && event.key == "Enter") {
          var address = $('#autocomplete').val().trim();
          localStorage.clear();
          localStorage.setItem("location", address);
          console.log(event.key)
          window.location.assign("https://mbvmatt28.github.io/Killow/mm.html");
          
            var geocoder = new google.maps.Geocoder();
            
            console.log(address)
            geocoder.geocode( { 'location': address}, function(results, status) {
            
            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                $('#coordinates').val(latitude+', '+longitude);
                console.log(Geocoder);
                console.log(latitude, longitude);
                } 
            }); 
        }
    });
  });
  var pinColor = "FE7569";
  var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
      new google.maps.Size(21, 34),
      new google.maps.Point(0,0),
      new google.maps.Point(10, 34));
  var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
      new google.maps.Size(40, 37),
      new google.maps.Point(0, 0),
      new google.maps.Point(12, 35));

    function addMarker2(props) {
      console.log(props);
      var marker = new
        google.maps.Marker({
          position: props,
          map: map,
          icon: pinImage
          
        });
  
      if (props.content) {
        var infoWindow = new
          google.maps.InfoWindow({
            content: props.content
          });
        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        })
      }
    }
  