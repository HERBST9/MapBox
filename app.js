  const MAPBOX_TOKEN = 
  "pk.eyJ1IjoiYW5hc3R6YWYiLCJhIjoiY2w4MWpqY2l5MGd2NjNvdDlnZWRiZXE4ayJ9.wNIAV7i68kiarydMNLAcaQ"
  
  var map = new mapboxgl.Map({
    accessToken: MAPBOX_TOKEN,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  })

  navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation, {
        enableHighAccuracy: true
    })


    function setupMap(centerPosition) {
        const map = new mapboxgl.Map({
            accessToken: MAPBOX_TOKEN,
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: centerPosition,
            zoom: 15
          })

          const navigationControls = new mapboxgl.NavigationControl()
          map.addControl(navigationControls)

          const directionControls = new MapboxDirections({
            accessToken: MAPBOX_TOKEN
          })
          map.addControl(directionControls, "top-left")
    }

    function successLocation(position) {
        setupMap([position.coords.longitude, position.coords.latitude])

    }

    function errorLocation() {
        setupMap([-2.24, 53.48])
        console.log("Error!")

    }