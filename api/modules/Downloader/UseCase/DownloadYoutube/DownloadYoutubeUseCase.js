"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadYoutubeUseCase = void 0;
class DownloadYoutubeUseCase {
    constructor(downloaderRepository) {
        this.downloaderRepository = downloaderRepository;
    }
    execute({ link, type }) {
        const validateDonwloader = this.downloaderRepository.checkValid(link, type);
        if (!validateDonwloader) {
            throw new Error('Problemas ao validar link de download.');
        }
        return this.downloaderRepository.list(link, type);
    }
}
exports.DownloadYoutubeUseCase = DownloadYoutubeUseCase;
