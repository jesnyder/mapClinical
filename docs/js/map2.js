var cities = L.layerGroup();
var layerAllo = L.layerGroup();
var layerAuto = L.layerGroup();
var layerBoth = L.layerGroup();
var layerUndeclared = L.layerGroup();

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://clinicaltrials.gov/">NIH ClinicalTrials.gov</a>';
var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var streets = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> |	Trial Data from <a href="https://clinicaltrials.gov/"  target="_blank" rel="noopener"> ClinicalTrials.gov</a>',
		//maxNativeZoom:10,
    //maxZoom:15
	});

var map = L.map("map2", {
		center: [10, 10],
	zoom: 2,
	minZoom: 2,
	maxZoom: 18,
	zoomSnap: 0.1,
	zoomDelta: 0.1,
	layers: [osm]
	});

var baseLayers = {
		'OpenStreetMap': osm,
		'Streets': streets
	};

var overlays = {
    'Allogeneic MSC Source': layerAllo,
    'Autologous MSC Source': layerAuto,
    'Allo and Auto MSC Source': layerBoth,
    'Undeclared MSC Source': layerUndeclared,
	};

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);
var satellite = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
layerControl.addBaseLayer(satellite, 'Satellite');


function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    }


function trialStyle (feature) {
      return feature.properties && feature.properties.style;
    }

function onEachTrial(feature, layer) {
    var aff = feature.properties.aff;
    var url = feature.properties.url;
    var name = feature.properties.name;

      var popupContent = '<p><b>'
         + feature.properties.name
         + '</b><br>'
         + feature.properties.aff
         + '<br>'
         + 'Enrolled: ' + feature.properties.enrolled
         + '<br>'
         + '<a href="' + feature.properties.url + '" target="_blank" rel="noopener">'
         + feature.properties.url + '</a>'
         + '</p>';

        if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
          }
          layer.bindPopup(popupContent);
        }

function trialToLayer(feature, latlng) {
    map.createPane('labels');
    map.getPane('labels').style.zIndex = feature.properties.zindex;
    return L.circleMarker(latlng, {
      radius: feature.properties.radius,
      opacity: feature.properties.opacity,
      fillOpacity: feature.properties.fillOpacity,
      fillColor: feature.properties.fillColor,
      color: feature.properties.color,
      weight: 1,
      //pane: feature.properties.zindex,
    });
  }


var pointersUndeclared = L.geoJson(groupundeclared_recent, {
	style: trialStyle,
	onEachFeature: onEachTrial,
	pointToLayer: trialToLayer,
	}).addTo(map).addTo(layerUndeclared);

var pointersAllo = L.geoJson(groupallo_recent, {
	style: trialStyle,
	onEachFeature: onEachTrial,
	pointToLayer: trialToLayer,
	}).addTo(map).addTo(layerAllo);

var pointersAuto = L.geoJson(groupauto_recent, {
	style: trialStyle,
	onEachFeature: onEachTrial,
	pointToLayer: trialToLayer,
	}).addTo(map).addTo(layerAuto);

var pointersBoth = L.geoJson(groupboth_recent, {
	style: trialStyle,
	onEachFeature: onEachTrial,
	pointToLayer: trialToLayer,
	}).addTo(map).addTo(layerBoth);
