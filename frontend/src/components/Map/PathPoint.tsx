/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";
import { X, Landmark } from "lucide-react";
import { NewPoint } from "@/types/Point";
import { Command, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";

interface Props {
  point: NewPoint;
}

const PathPoint: FC<Props> = ({ point }) => {
  const markerRef = useRef(null);
  const pinIcon = divIcon({
    html: `
    <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="location-marker__svg">
  <circle cx="18" cy="18" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
</svg>`,
    className: "location-marker",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${point.lat.toFixed(4)}, ${point.lng.toFixed(4)}`);
  };

  return (
    <Marker
      ref={markerRef}
      icon={pinIcon}
      position={point}
      eventHandlers={{
        contextmenu: e => {
          if (markerRef.current != null) {
            (markerRef.current as any).openPopup();
          }
          e.originalEvent.preventDefault();
        },
        click: e => {
          if (markerRef.current != null) {
            (markerRef.current as any).closePopup();
          }
          e.originalEvent.preventDefault();
        },
      }}
    >
      <Popup>
        <Command className="w-[150px] p-1">
          <CommandList>
            <CommandItem onSelect={copyToClipboard}>
              {point.lat.toFixed(4)}, {point.lng.toFixed(4)}
            </CommandItem>
            <CommandSeparator />
            <CommandItem>
              <X className="mr-4 h-4 w-4" />
              <span>Usuń punkt</span>
            </CommandItem>
            <CommandItem>
              <Landmark className="mr-4 h-4 w-4" />
              <span>Edytuj atrakcję</span>
            </CommandItem>
          </CommandList>
        </Command>
      </Popup>
    </Marker>
  );
};

export default PathPoint;
