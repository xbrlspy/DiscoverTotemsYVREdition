function getPlacemarks() {
    console.log('in getPlacemarks');
  var lat = 'undefined' !== typeof $params.lat ? $params.lat : 49.299277,
      lon = 'undefined' !== typeof $params.lon ? $params.lon : -123.120867;
  // Add the passed in location to a points array
  var points = [{lat: lat, lon: lon, title: 'Totem Pole Central: Stanley Park!'}];
    
  // Push some more closeby points onto the array
  //my Vancouver Edition list
points.push({lat: 49.1943167455, lon: -123.179767288, title: 'Airport Totems'});
points.push({lat: lat + 49.299353, lon: lon -123.121044, title: 'Stanley Park'});
points.push({lat: lat + 49.266569, lon: lon -123.099169, title: 'Burrard Bridge'});
points.push({lat: lat + 49.287894, lon: lon -123.113692, title: 'Canada Place'});
points.push({lat: lat + 49.26505, lon: lon -123.114486, title: 'Canadian Tire on Cambie'});
points.push({lat: lat + 49.343708, lon: lon -123.112897, title: 'Capilano Suspension Bridge'});
points.push({lat: lat + 49.301867, lon: lon -122.955133, title: 'Cates Park, Deep Cove'});
points.push({lat: lat + 49.37395, lon: lon -123.272981, title: 'Horseshoe Bay Ferry Terminal'});
points.push({lat: lat + 49.375106, lon: lon -123.275267, title: 'Horseshoe Bay Park'});
points.push({lat: lat + 49.249625, lon: lon -123.095836, title: 'Jomar Lanot Memorial Pole'});
points.push({lat: lat + 49.269339, lon: lon -123.260689, title: 'Museum of Anthropology at UBC'});
points.push({lat: lat + 49.282361, lon: lon -123.094147, title: 'Oppenheimer Park'});
points.push({lat: lat + 49.278572, lon: lon -123.120892, title: 'Seymour Street'});
points.push({lat: lat + 49.319883, lon: lon -123.1262, title: 'Squamish Nation, North Vancouver'});
points.push({lat: lat + 49.266569, lon: lon -123.099169, title: 'Wil Sayt Bakwhlgat & Longhouse (NEC)'});
points.push({lat: lat + 49.35835, lon: lon -123.267, title: 'Thunderbird Marina'});
points.push({lat: lat + 49.268483, lon: lon -123.252483, title: 'Thunderbird Totem Pole'});
points.push({lat: lat + 49.322797, lon: lon -123.113275, title: 'Tomahawk Cafe Totem Poles'});
points.push({lat: lat + 49.23865, lon: lon -123.129617, title: 'Van Dusen Gardens'});
points.push({lat: lat + 49.194433, lon: lon -123.176008, title: 'Vancouver Airport'});
points.push({lat: lat + 49.2771, lon: lon -123.147683, title: 'Vanier Park'});
points.push({lat: lat + 49.322983, lon: lon -123.150567, title: 'Welcome Guardian Woman '});
points.push({lat: lat + 49.35755, lon: lon -123.271547, title: 'West Vancouver Yacht Club'});
points.push({lat: lat + 49.26355, lon: lon -123.254083, title: 'Whaler Pole'});
points.push({lat: lat + 49.322797, lon: lon -123.113275, title: 'Tomahawk Cafe Poles'});
  //end of my list
  return {points: points};
}