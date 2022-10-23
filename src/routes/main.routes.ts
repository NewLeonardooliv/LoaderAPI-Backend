import { Router } from 'express';
import { downloadYoutubeController } from '../modules/Downloader/UseCase/DownloadYoutube';

const main = Router();

main.post('/youtube', (request, response) => {
	return downloadYoutubeController.handle(request, response);
});

export { main };
