function searchHospital() {
    const hospitalName = document.getElementById("hospitalName").value;
  
    const geocoder = new kakao.maps.services.Geocoder();
  
    geocoder.addressSearch(hospitalName, function(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const location = result[0].address_name;
        const x = result[0].x;
        const y = result[0].y;
  
        displayMap(location, x, y);
      } else {
        alert("병원을 찾을 수 없습니다.");
      }
    });
  }
  
  function displayMap(location, x, y) {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(y, x),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
  
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(y, x),
      map: map
    });
  
    const infowindow = new kakao.maps.InfoWindow({
      position: new kakao.maps.LatLng(y, x),
      content: `<div style="padding:5px;">${location}</div>`
    });
    infowindow.open(map, marker);
  }