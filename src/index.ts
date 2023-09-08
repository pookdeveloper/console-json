"use strict";
export function cjson_group(
  json: any,
  {
    group,
    text_group,
  }: {
    group: boolean;
    text_group: string;
  }
): any {
  if (group) {
    console.groupCollapsed(text_group || "JSON Formated");
    console.log(JSON.stringify(json, null, "\t"));
    console.groupEnd();
  } else {
    console.log(JSON.stringify(json, null, "\t"));
  }
  return json;
}

export function cjson(json: any): any {
  return JSON.stringify(json, null, "\t");
}
