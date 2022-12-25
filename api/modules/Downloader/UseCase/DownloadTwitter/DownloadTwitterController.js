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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadTwitterController = void 0;
class DownloadTwitterController {
    constructor(downloadTwitterUseCase) {
        this.downloadTwitterUseCase = downloadTwitterUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { link } = request.body;
            const twitterGetUrl = require("twitter-url-direct");
            let download = yield twitterGetUrl(link);
            // const download = await this.downloadTwitterUseCase.execute(link)
            return response.status(200).json(download);
        });
    }
}
exports.DownloadTwitterController = DownloadTwitterController;
