export function cgjson(json: any, text_group = "JSON Formatted"): void {
  console.groupCollapsed(text_group);
  console.log(JSON.stringify(json, null, "\t"));
  console.groupEnd();
  console.log(JSON.stringify(json, null, "\t"));
}

export function fjson(json: any): any {
  return JSON.stringify(json, null, "\t");
}

module.exports = {
  cgjson,
  fjson,
};
