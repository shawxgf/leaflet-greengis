// Import stylesheets
import './style.css';
import { Map, TileLayer, LayerGroup, Control } from 'leaflet';


// Write Javascript code!
const map = new Map('map');

const amapLayer = new TileLayer(
  'http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7',
  // 'http://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
  {
    subdomains: '1234'
  }
);

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