import { NewPoint } from "./Point";
import { SurfaceType } from "./SurfaceType";

export interface NewPath {
  surface: SurfaceType;
  points: NewPoint[];
}
