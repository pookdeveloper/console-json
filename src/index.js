"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cjson = exports.cjson_group = void 0;
function cjson_group(json, { group, text_group, }) {
    if (group) {
        console.groupCollapsed(text_group || "JSON Formated");
        console.log(JSON.stringify(json, null, "\t"));
        console.groupEnd();
    }
    else {
        console.log(JSON.stringify(json, null, "\t"));
    }
    return json;
}
exports.cjson_group = cjson_group;
function cjson(json) {
    return JSON.stringify(json, null, "\t");
}
exports.cjson = cjson;
