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
const svg = '<svg t="1676548805490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2776" width="200" height="200"><path d="M188.64 913.44a365.416 90.56 0 1 0 730.832 0 365.416 90.56 0 1 0-730.832 0Z" fill="#B8CBCD" p-id="2777"></path><path d="M846.496 376.472c0 176.328-319.28 517.224-319.28 517.224S207.944 551.808 207.944 375.472c0-176.32 142.944-318.272 319.272-318.272s319.28 142.944 319.28 319.272z" fill="#F7BB83" p-id="2778"></path><path d="M527.216 917.696H527.2a24.016 24.016 0 0 1-17.52-7.616c-13.304-14.24-325.736-350.92-325.736-534.608 0-188.728 153.992-342.272 343.272-342.272 189.288 0 343.28 153.992 343.28 343.272 0 183.704-312.464 519.432-325.768 533.632a24 24 0 0 1-17.512 7.592z m0-836.504c-162.816 0-295.272 132.008-295.272 294.272 0 128.448 198.808 375.648 295.208 482.632 65.864-73.488 295.344-339.736 295.344-481.632 0-162.808-132.464-295.272-295.28-295.272z" fill="#6E4123" p-id="2779"></path><path d="M830.296 432.576c0 167.384-303.08 490.976-303.08 490.976S224.144 599.96 224.144 432.576c0-167.376 135.688-303.072 303.072-303.072 167.384 0 303.08 135.696 303.08 303.072z" fill="#F7BB83" p-id="2780"></path><path d="M527.216 939.552a16 16 0 0 1-11.68-5.064c-12.544-13.4-307.392-330.176-307.392-501.912 0-175.936 143.136-319.072 319.072-319.072s319.08 143.136 319.08 319.072c0 171.736-294.848 488.512-307.4 501.912a16 16 0 0 1-11.68 5.064z m0-794.048c-158.288 0-287.072 128.784-287.072 287.072 0 140.912 231.84 406.104 287.072 467.256 55.224-61.16 287.08-326.344 287.08-467.256 0-158.288-128.784-287.072-287.08-287.072z" fill="#6E4123" p-id="2781"></path><path d="M836.984 432.576c0 167.384-309.768 490.976-309.768 490.976S217.072 599.96 217.072 432.576" fill="#F7BB83" p-id="2782"></path><path d="M527.216 947.552c-6.536 0-12.8-2.672-17.328-7.392-12.936-13.504-316.816-332.568-316.816-507.584a24 24 0 1 1 48 0c0 121.232 192.504 354.624 286.136 455.92 93.512-101.312 285.776-334.688 285.776-455.92a24 24 0 1 1 48 0c0 175.008-303.512 494.08-316.432 507.568a24 24 0 0 1-17.336 7.408z" fill="#6E4123" p-id="2783"></path><path d="M528.64 432m-196 0a196 196 0 1 0 392 0 196 196 0 1 0-392 0Z" fill="#FFFFFF" p-id="2784"></path><path d="M528.344 642.12c-118.488 0-214.896-93.032-214.896-207.384 0-56.808 23.336-109.808 65.696-149.248a16.008 16.008 0 0 1 21.816 23.424c-35.8 33.32-55.504 78.008-55.504 125.832 0 96.704 82.048 175.384 182.896 175.384 100.848 0 182.896-78.68 182.896-175.384 0-49.736-22.152-97.32-60.792-130.568a16 16 0 1 1 20.872-24.248c45.704 39.328 71.912 95.76 71.912 154.824 0 114.336-96.408 207.368-214.896 207.368z" fill="#6E4123" p-id="2785"></path><path d="M528.344 570.88c-105.344 0-192.096-76.488-203.624-174.88a194.112 194.112 0 0 0-1.336 22.328c0 108.912 91.768 197.208 204.96 197.208s204.968-88.296 204.968-197.208c0-7.552-0.488-15-1.352-22.328-11.528 98.4-98.272 174.88-203.616 174.88z" fill="#6E4123" p-id="2786"></path><path d="M548.64 476c0 13.2-10.8 24-24 24s-24-10.8-24-24v-96c0-13.2 10.8-24 24-24s24 10.8 24 24v96z" fill="#6E4123" p-id="2787"></path><path d="M476.64 452c-13.2 0-24-10.8-24-24s10.8-24 24-24h96c13.2 0 24 10.8 24 24s-10.8 24-24 24h-96z" fill="#6E4123" p-id="2788"></path></svg>'

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
const dataPoly = {
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
    },
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

const player = new GeoJSON(dataPoly, {
  style: function(feature) {
    switch (feature.properties.name) {
        case 'Jiangshan Park': return {color: "#ff0000"};
        case 'Forbiden City':   return {color: "#0000ff"};
    }
}
});

glayer.addTo(map);
player.addTo(map);