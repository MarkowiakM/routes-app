import { FC } from "react";
import { LayersControl, MapContainer, TileLayer, ZoomControl, LayerGroup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { LOCATION } from "@/constants/location";
import { MAP_LAYERS } from "@/constants/mapLayers";
import "./Map.css";

interface MapProps {
  children?: JSX.Element | JSX.Element[];
}

const Map: FC<MapProps> = ({ children }) => {
  return (
    <MapContainer
      center={LOCATION as LatLngExpression}
      zoom={12}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <LayersControl>
        {MAP_LAYERS.map(layer => (
          <LayersControl.BaseLayer key={layer.name} checked={layer.checked} name={layer.name}>
            {layer.url ? (
              <TileLayer attribution={layer.attribution} url={layer.url} />
            ) : (
              <LayerGroup>
                {layer.subLayers &&
                  layer.subLayers.map(subLayer => (
                    <TileLayer
                      key={subLayer.name}
                      attribution={subLayer.attribution}
                      url={subLayer.url}
                    />
                  ))}
              </LayerGroup>
            )}
          </LayersControl.BaseLayer>
        ))}
      </LayersControl>
      <ZoomControl position="topright" />
      {children}
    </MapContainer>
  );
};

export default Map;
