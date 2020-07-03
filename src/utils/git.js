import request from "request";
import { getAll } from "./rc";
import downLoadGit from "download-git-repo";
import { DOWNLOAD } from "./constants";
let fetch = async (url) => {
  return new Promise((resolve, reject) => {
    let config = {
      url,
      method: "get",
      headers: {
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
        "Cache-Control": "max-age=0",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36",
      },
    };
    request(config, (err, response, body) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(body));
    });
  });
};
export let repoList = async () => {
  let { orgs } = await getAll();
  let api = `https://api.github.com/orgs/vuejs/repos`;
  return await fetch(api);
};
export let downTemp = async (src, dest) => {
  return new Promise((res, rej) => {
    downLoadGit(src, dest, (err) => {
      if (err) rej(err);
      res();
    });
  });
};
export let downloadLocal = async (project, version) => {
  let conf = await getAll();
  // let api = ``;
  return await downTemp(api, DOWNLOAD + "/" + project);
};
