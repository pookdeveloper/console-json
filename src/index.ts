// const colorize = require("json-colorizer");

export function cjson(json: any): void {
  console.log(this.fjson(json));
}

export function cgjson(json: any, text_group = "JSON Formatted"): void {
  console.groupCollapsed(text_group);
  console.log(this.fjson(json));
  console.groupEnd();
}

export function fjson(json: any): any {
  // return colorize(JSON.stringify(json, null, "\t"));
  return JSON.stringify(json, null, "\t");
}

module.exports = {
  cjson,
  cgjson,
  fjson,
};
