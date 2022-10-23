import { DownloadVideoRepository } from '../../Repository/DownloadRepository';
import { DownloadVideoController } from './DownloadController';
import { DownloadVideoUseCase } from './DownloadUseCase';

const downloadRepository = new DownloadVideoRepository();
const downloaderRepositoryUseCase = new DownloadVideoUseCase(downloadRepository);
const downloadVideoController = new DownloadVideoController(downloaderRepositoryUseCase);

export { downloadVideoController };
