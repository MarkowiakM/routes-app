import { FC } from "react";
import { Polyline } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { SURFACE_COLORS } from "@/constants/surfaceTypes";
import { NewPath } from "@/types/Path";

interface Props {
  path: NewPath;
}

const Path: FC<Props> = ({ path: { points, surface } }) => {
  return <Polyline pathOptions={{ color: SURFACE_COLORS[surface] }} positions={points} />;
};

export default Path;
