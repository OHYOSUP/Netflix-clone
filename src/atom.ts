import { atom } from "recoil";
import { v1 } from "uuid";

export const getKeyword = atom<string>({
  key: `keywords/${v1()}`,
  default: "",
});


export const turnContent = atom({
  key: "turnContent",
  default: true
})