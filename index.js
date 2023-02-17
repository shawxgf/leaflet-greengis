// Import stylesheets
import './style.css';
import { Map, TileLayer, LayerGroup, Control, Marker, Icon, GeoJSON} from 'leaflet';


// Write Javascript code!
const map = new Map('map');

// 加载高德地图
const amapLayer = new TileLayer(
  'http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7',
  // 'http://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
  {
    subdomains: '1234'
  }
);

// 加载天地图
const tdtVectorLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/vec_w/wmts?layer=vec&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=11b55a09c9e0df4a1e91741b455b7f28',
  {}
);

const tdtLabelLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/cva_w/wmts?layer=cva&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=11b55a09c9e0df4a1e91741b455b7f28',
  {}
);

const tdtLayer = new LayerGroup([tdtVectorLayer, tdtLabelLayer])

tdtLayer.addTo(map);

map.setView([39.909186, 116.397411], 10);

// const items = document.getElementsByName('base')
// items.forEach(item => {
//   item.onclick = (evt) => {
//     switch (evt.target.value)
//     {
//       case 'amap':
//         tdtLayer.removeFrom(map);
//         amapLayer.addTo(map);
//         break;
//       case 'tdt':
//         amapLayer.removeFrom(map);
//         tdtLayer.removeFrom(map);
//         break;
//     }
//   }
// });

const layerControl = new Control.Layers(
  {
    高德: amapLayer,
    天地图: tdtLayer
  },
  {},
  { collapsed: false }
);
layerControl.addTo(map);

// 加载矢量svg
const svg = '<svg t="1676634187815" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2776" width="200" height="200"><path d="M512 85.333333c-164.949333 0-298.666667 133.738667-298.666667 298.666667 0 164.949333 298.666667 554.666667 298.666667 554.666667s298.666667-389.717333 298.666667-554.666667c0-164.928-133.717333-298.666667-298.666667-298.666667z m0 448a149.333333 149.333333 0 1 1 0-298.666666 149.333333 149.333333 0 0 1 0 298.666666z" fill="#FF3D00" p-id="2777"></path></svg>'

const marker = new Marker([39.909186, 116.397411], {
  icon: new Icon({
    // iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg),
    iconSize: [25, 41],
    iconAnchor: [12.5, 41]
  })
});

marker.addTo(map)


const dataPoint = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "NAME": "西北五环"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          116.22196197509766,
          39.99527080014614
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NAME": "东五环"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          116.53816223144531,
          39.9034155951341
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "NAME": "南五环"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          116.40151977539062,
          39.7631584037253
        ]
      }
    }
  ]
};
const dataPoly1 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Jiangshan Park"
      },
      "geometry": {
        "coordinates": [
          [
            [
              116.38803872314395,
              39.926703361429276
            ],
            [
              116.38821846760192,
              39.92201666464206
            ],
            [
              116.39298167448158,
              39.92218897536861
            ],
            [
              116.39275699491077,
              39.926875660821594
            ],
            [
              116.38803872314395,
              39.926703361429276
            ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}

const dataPoly2 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Forbidden City"
      },
      "geometry": {
        "coordinates": [
          [
            [
              116.3861387064108,
              39.92100651897982
            ],
            [
              116.38633833979986,
              39.912202425898016
            ],
            [
              116.39537175068216,
              39.912317269179454
            ],
            [
              116.3950223922514,
              39.92127445189104
            ],
            [
              116.3861387064108,
              39.92100651897982
            ]
          ]
        ],
        "type": "Polygon"
      }
    }
  ]
}

const glayer = new GeoJSON(dataPoint, {
  pointToLayer: (geoJsonPoint, latlng) => {
    return new Marker(latlng, {
      icon: new Icon({
        iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg),
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      })
    });
  }
});

glayer.addTo(map);

// const player = new GeoJSON(dataPoly, {
//   style: function(feature) {
//     switch (feature.properties.name) {
//         case 'Jiangshan Park': return {color: "#ff0000"};
//         case 'Forbiden City':  return {color: "#0000ff"};
//     }
// }
// });

const player1 = new GeoJSON(dataPoly1, {
  style: function(feature) {
    return {color: "#ff0000"};
    }
});

const player2 = new GeoJSON(dataPoly2, {
  style: function(feature) {
    return {color: "#0000ff"};
    }
});


const check1 = document.getElementById('check1');
check1.onchange = (evt) => {
  if (evt.target.checked) {
    player1.addTo(map);
  } else {
    player1.removeFrom(map);
  }
}

const check2 = document.getElementById('check2');
check2.onchange = (evt) => {
  if (evt.target.checked) {
    player2.addTo(map);
  } else {
    player2.removeFrom(map);
  }
}