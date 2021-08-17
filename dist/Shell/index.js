"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const enquirer_1 = require("enquirer");
const ConfigFile_1 = __importDefault(require("../ConfigFile"));
class Shell {
    constructor() {
        this.parseOptions = (options) => __awaiter(this, void 0, void 0, function* () {
            const baseOptions = yield ConfigFile_1.default.getConfig();
            for (const key in options) {
                baseOptions[key] = options[key];
            }
            return baseOptions !== null && baseOptions !== void 0 ? baseOptions : options;
        });
        this.alreadyExistPromp = (message) => __awaiter(this, void 0, void 0, function* () {
            return enquirer_1.prompt({
                type: 'toggle',
                name: 'overwrite',
                message: chalk_1.default `{yellow ${message}}`,
                required: true,
            });
        });
    }
}
exports.default = new Shell();
//# sourceMappingURL=index.js.map