import { repoList, downloadLocal } from "../utils/git";
import ora from "ora";
import inquirer from "inquirer";

export default async function (project) {
  // 1. 获取template
  let load = ora("fetching template.......");
  load.start();
  let list = await repoList();
  load.succeed();
  list = list
    .map(({ name }) => {
      return name;
    })
    .slice(0, 3);
  let answer = await inquirer.prompt([
    {
      type: "list",
      name: "project",
      choices: list,
      questions: "please select template",
    },
  ]);
  // 2. 获取template的版本（省略，步骤同时）
  // 3. 下载对应的template
  await downloadLocal(project); // 可以使用参数，或使用之前所有的选项所选的值
  // more. 使用模板引擎；
}
