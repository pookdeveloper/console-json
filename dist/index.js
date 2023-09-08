"use strict";
// const colorize = require("json-colorizer");
Object.defineProperty(exports, "__esModule", { value: true });
exports.fjson = exports.cgjson = exports.cjson = void 0;
function cjson(json) {
    console.log(this.fjson(json));
}
exports.cjson = cjson;
function cgjson(json, text_group = "JSON Formatted") {
    console.groupCollapsed(text_group);
    console.log(this.fjson(json));
    console.groupEnd();
}
exports.cgjson = cgjson;
function fjson(json) {
    // return colorize(JSON.stringify(json, null, "\t"));
    return JSON.stringify(json, null, "\t");
}
exports.fjson = fjson;
module.exports = {
    cjson,
    cgjson,
    fjson,
};
//# sourceMappingURL=index.js.map