import { set, get, getAll, remove } from "../utils/rc";

export default async function (action, k, v) {
  switch (action) {
    case "set":
      await set(k, v);
      break;
    case "get":
      if (k) {
        let key = await get(k, v);
        console.log(key);
      } else {
        let obj = await getAll();
        console.log(obj);
      }
      break;
    case "getAll":
      let obj = await getAll();
      console.log(obj);
      break;
    case "remove":
      await remove(k, v);
      break;
    default:
      break;
  }
}
