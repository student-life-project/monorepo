"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleFunction = void 0;
const exampleFunction = () => console.log('Hello world');
exports.exampleFunction = exampleFunction;
__exportStar(require("./types/Addres"), exports);
__exportStar(require("./types/Characteristic.type"), exports);
__exportStar(require("./types/Image.type"), exports);
__exportStar(require("./types/Message.type"), exports);
__exportStar(require("./types/Owner.type"), exports);
__exportStar(require("./types/Rate.type"), exports);
__exportStar(require("./types/RentalPlace.type"), exports);
__exportStar(require("./types/Report.type"), exports);
__exportStar(require("./types/Rule.type"), exports);
__exportStar(require("./types/School.type"), exports);
__exportStar(require("./types/Security.type"), exports);
__exportStar(require("./types/Service.type"), exports);
__exportStar(require("./types/Student.type"), exports);
__exportStar(require("./types/User.type"), exports);
__exportStar(require("./utility/isServer"), exports);
//# sourceMappingURL=index.js.map