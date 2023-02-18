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


// 添加maker
// const marker = new Marker([39.909186, 116.397411], {
//   icon: new Icon({
//     // iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//     iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg),
//     iconSize: [25, 41],
//     iconAnchor: [12.5, 41]
//   })
// });

// marker.addTo(map)

// 加载医院和学校矢量svg
const svgSchol = '<svg t="1676687667781" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4958" width="200" height="200"><path d="M512 128L42.666667 384l469.333333 256 384-209.493333V725.333333h85.333333V384M213.333333 562.346667v170.666666L512 896l298.666667-162.986667v-170.666666L512 725.333333l-298.666667-162.986666z" fill="" p-id="4959"></path></svg>'

const svgHospital ='<svg t="1676687716942" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6107" width="200" height="200"><path d="M320 488v-80c0-13.254 10.746-24 24-24h80c13.254 0 24 10.746 24 24v80c0 13.254-10.746 24-24 24h-80c-13.254 0-24-10.746-24-24z m280 24h80c13.254 0 24-10.746 24-24v-80c0-13.254-10.746-24-24-24h-80c-13.254 0-24 10.746-24 24v80c0 13.254 10.746 24 24 24z m-152 168v-80c0-13.254-10.746-24-24-24h-80c-13.254 0-24 10.746-24 24v80c0 13.254 10.746 24 24 24h80c13.254 0 24-10.746 24-24z m152 24h80c13.254 0 24-10.746 24-24v-80c0-13.254-10.746-24-24-24h-80c-13.254 0-24 10.746-24 24v80c0 13.254 10.746 24 24 24z m360 248v72H64v-72c0-13.254 10.746-24 24-24h39V170.07C127 146.836 148.49 128 175 128H352V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48v80h177c26.51 0 48 18.836 48 42.07V928H936c13.254 0 24 10.746 24 24zM223 926H448v-134c0-13.254 10.746-24 24-24h80c13.254 0 24 10.746 24 24v134h225V224H672v48c0 26.51-21.49 48-48 48H400c-26.51 0-48-21.49-48-48v-48H223v702zM596 128h-52V76a12 12 0 0 0-12-12h-40a12 12 0 0 0-12 12v52h-52a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h52v52a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12V192h52a12 12 0 0 0 12-12V140a12 12 0 0 0-12-12z" p-id="6108"></path></svg>'

// 包含医院和学校两种类型矢量数据
const dataPoint = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "NAME": "医院A",
        "TYPE": "医院"
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
        "NAME": "学校A",
        "TYPE": "学校"
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
        "NAME": "医院B",
        "TYPE": "医院"
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

// const glayer = new GeoJSON(dataPoint, {
//   pointToLayer: (geoJsonPoint, latlng) => {
//     return new Marker(latlng, {
//       icon: new Icon({
//         iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svg),
//         iconSize: [32, 32],
//         iconAnchor: [16, 32]
//       })
//     });
//   }
// });

const glayer = new GeoJSON(dataPoint, {
  pointToLayer: (geoJsonPoint, latlng) => {
    switch (geoJsonPoint.properties['TYPE']) {
      case "医院":
      return new Marker(latlng, {
        icon: new Icon({
          iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svgHospital),
          iconSize: [16, 16],
          iconAnchor: [8, 16]
          })
      });
      case "学校":
        return new Marker(latlng, {
          icon: new Icon({
            iconUrl: 'data:image/svg+xml,' + encodeURIComponent(svgSchol),
            iconSize: [16, 16],
            iconAnchor: [8, 16]
          })
        });
    }
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