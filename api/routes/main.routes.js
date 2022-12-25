"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const express_1 = require("express");
const DownloadTwitter_1 = require("../modules/Downloader/UseCase/DownloadTwitter");
const DownloadYoutube_1 = require("../modules/Downloader/UseCase/DownloadYoutube");
const main = (0, express_1.Router)();
exports.main = main;
main.get('/', (request, response) => {
    return response.status(200).json({ response: `home` });
});
main.post('/youtube', (request, response) => {
    return DownloadYoutube_1.downloadYoutubeController.handle(request, response);
});
main.post('/twitter', (request, response) => {
    return DownloadTwitter_1.downloadTwitterController.handle(request, response);
});
