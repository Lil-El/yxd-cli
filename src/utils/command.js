export default function (absPath) {
  let module = require(absPath);
  if (module.default) {
    return module.default;
  }
  return module;
}
