import { Router } from 'express';
import { downloadVideoController } from '../modules/Downloader/UseCase/DownloadVideo';

const main = Router();

main.get('/download', (request, response) => {
	return downloadVideoController.handle(request, response);
});

export { main };
