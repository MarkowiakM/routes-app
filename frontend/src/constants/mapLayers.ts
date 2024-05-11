export const MAP_LAYERS = [
  {
    name: "Open Street Map",
    checked: true,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  },
  {
    name: "Google Map",
    checked: false,
    attribution: "Google Maps",
    url: "https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}",
  },
  {
    name: "Google Map Satellite",
    checked: false,
    subLayers: [
      {
        name: "Google Maps Satellite",
        attribution: "Google Maps Satellite",
        url: "https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
      },
      {
        name: "Google Maps Satellite Labels",
        attribution: "Google Maps Satellite Labels",
        url: "https://www.google.cn/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}",
      },
    ],
  },
];