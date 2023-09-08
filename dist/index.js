"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fjson = exports.cgjson = void 0;
function cgjson(json, text_group = "JSON Formatted") {
    console.groupCollapsed(text_group);
    console.log(JSON.stringify(json, null, "\t"));
    console.groupEnd();
    console.log(JSON.stringify(json, null, "\t"));
}
exports.cgjson = cgjson;
function fjson(json) {
    return JSON.stringify(json, null, "\t");
}
exports.fjson = fjson;
module.exports = {
    cgjson,
    fjson,
};
//# sourceMappingURL=index.js.map