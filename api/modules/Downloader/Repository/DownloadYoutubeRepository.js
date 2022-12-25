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
exports.DownloadYoutubeRepository = void 0;
const ytdl_core_1 = __importDefault(require("ytdl-core"));
class DownloadYoutubeRepository {
    list(link, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let datas;
            datas = {};
            let i;
            i = 0;
            const metadata = yield ytdl_core_1.default.getInfo(link);
            for (const [key, value] of Object.entries(metadata.formats)) {
                if (value.hasAudio && !value.hasVideo && type == 'audio') {
                    datas[i] = value;
                }
                if (value.hasAudio && value.hasVideo && type == 'video') {
                    datas[i] = value;
                }
                if (value.hasAudio && type == undefined) {
                    datas[i] = value;
                }
                i++;
            }
            return datas;
        });
    }
    checkValid(link, type) {
        return ytdl_core_1.default.validateURL(link);
    }
}
exports.DownloadYoutubeRepository = DownloadYoutubeRepository;
