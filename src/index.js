import myRequire from "./utils/command";
import path from "path";

let apply = (action, ...args) => {
  myRequire(path.resolve(__dirname, `./cmdHandle/${action}`))(...args);
};
export default apply;
