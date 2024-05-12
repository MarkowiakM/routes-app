import { atom } from "recoil";
import { NewPath } from "@/types/Path";

export const newPathState = atom<NewPath>({
  key: "new-path",
  default: {
    surface: "Droga asfaltowa",
    points: [],
  },
});
