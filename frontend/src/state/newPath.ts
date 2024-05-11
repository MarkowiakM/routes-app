import { atom } from "recoil";

export const newPathState = atom<boolean>({
  key: "new-path-dialog-open",
  default: false,
});
