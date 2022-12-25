import { Router } from 'express';
import { downloadTwitterController } from '../modules/Downloader/UseCase/DownloadTwitter';
import { downloadYoutubeController } from '../modules/Downloader/UseCase/DownloadYoutube';

const main = Router();

main.get('/', (request, response) => {
	return response.status(200).json({ response: `home` });
});

main.post('/youtube', (request, response) => {
	return downloadYoutubeController.handle(request, response);
});

main.post('/twitter', (request, response) => {
	return downloadTwitterController.handle(request, response);
});

export { main };
