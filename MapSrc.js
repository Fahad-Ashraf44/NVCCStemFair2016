function initialize()
{
  var mapProp =
      {
          center:new google.maps.LatLng(38.904722,-77.016389),
          zoom:10,
          mapTypeId:google.maps.MapTypeId.ROADMAP
      };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);
