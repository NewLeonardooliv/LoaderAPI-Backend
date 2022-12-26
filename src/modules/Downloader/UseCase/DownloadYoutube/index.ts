import { DownloadYoutubeRepository } from '../../Repository/DownloadYoutubeRepository';
import { DownloadYoutubeController } from './DownloadYoutubeController';
import { DownloadYoutubeUseCase } from './DownloadYoutubeUseCase';

const downloadYoutubeRepository = new DownloadYoutubeRepository();
const downloadYoutubeUseCase = new DownloadYoutubeUseCase(downloadYoutubeRepository);
const downloadYoutubeController = new DownloadYoutubeController(downloadYoutubeUseCase);

export { downloadYoutubeController };
