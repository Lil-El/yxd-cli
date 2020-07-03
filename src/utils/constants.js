import { version } from "../../package.json";

export const VERSION = version;

const HOME = process.env[process.platform === "win32" ? "USERPROFILE" : "HOME"];
// 获取用户的.yxdclirc的地址
export const RC = `${HOME}/.yxdclirc`;

// 默认配置
export const DEFAULTS = {
  registry: "yxd-cli",
  owner: "lil-el",
  orgs: "vuejs",
  type: "orgs",
};

export const DOWNLOAD = `${HOME}/.template`;
