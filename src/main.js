import program from "commander";
import { VERSION } from "./utils/constants";
import apply from "./index";
import "babel-polyfill";
const actionMap = {
  install: {
    alias: "i",
    description: "download template",
    examples: ["yxd-cli i", "yxd-cli install"],
  },
  config: {
    alias: "c",
    description: "config .yxdclirc",
    examples: [
      "yxd-cli config set <k> <v>",
      "yxd-cli config get <k>",
      "yxd-cli config remove <k>",
    ],
  },
  "*": {
    alias: "",
    description: "not found",
    examples: [],
  },
};

Object.keys(actionMap).forEach((action) => {
  program
    .command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias)
    .action(() => {
      if (action === "config") {
        apply(action, ...process.argv.slice(3));
      } else if (action === "install") {
        apply(action, ...process.argv.slice(3));
      } else {
        apply(action);
      }
    });
});

function help() {
  console.log("\r\n" + "How to use command?");
  Object.keys(actionMap).forEach((action) => {
    actionMap[action].examples.forEach((exp) => {
      console.log("    - " + exp);
    });
  });
}

program.on("-h", help);
program.on("--help", help);
program.version(VERSION, "-v --version").parse(process.argv);
