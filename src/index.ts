module.exports = {
  cjson: cjson,
  cjson_group: cjson_group,
};

export function cjson_group({
  json,
  group,
  text_group,
}: {
  json: any;
  group?: boolean;
  text_group?: string;
}): any {
  if (group) {
    console.groupCollapsed(text_group || "JSON Formated");
    console.log(JSON.stringify(json, null, "\t"));
    console.groupEnd();
  } else {
    console.log(JSON.stringify(json, null, "\t"));
  }
  return json;
}

export function fjson(json: any): any {
  return JSON.stringify(json, null, "\t");
}

export function cjson(json: any): any {
  console.log(JSON.stringify(json, null, "\t"));
}
