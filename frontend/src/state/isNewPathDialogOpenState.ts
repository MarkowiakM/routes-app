import { atom } from "recoil";

export const isNewPathDialogOpenState = atom<boolean>({
  key: "new-path-dialog-open",
  default: false,
});
