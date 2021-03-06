import { RC, DEFAULTS } from "./constants";
import fs from "fs";
import { decode, encode } from "ini";
import { promisify } from "util";
let exists = promisify(fs.exists);
let readFile = promisify(fs.readFile);
let writeFile = promisify(fs.writeFile);

export let get = async (k) => {
  let has = await exists(RC);
  let opts;
  if (has) {
    opts = await readFile(RC, "utf8");
    opts = decode(opts);
    return opts[k];
  }
  return "";
};
export let set = async (k, v) => {
  let has = await exists(RC);
  let opts;
  if (has) {
    opts = await readFile(RC, "utf8");
    opts = decode(opts);
    Object.assign(opts, { [k]: v });
  } else {
    opts = Object.assign(DEFAULTS, { [k]: v });
  }
  await writeFile(RC, encode(opts), "utf8");
};
export let remove = async (k) => {
  let has = await exists(RC);
  let opts;
  if (has) {
    opts = await readFile(RC, "utf8");
    opts = decode(opts);
    delete opts[k];
    await writeFile(RC, encode(opts), "utf8");
  }
};
export let getAll = async () => {
  let has = await exists(RC);
  let opts;
  if (has) {
    opts = await readFile(RC, "utf8");
    opts = decode(opts);
    return opts;
  }
  return {};
};
