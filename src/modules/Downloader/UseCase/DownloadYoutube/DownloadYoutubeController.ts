import { Request, Response } from 'express';
import { DownloadYoutubeUseCase } from './DownloadYoutubeUseCase';

class DownloadYoutubeController {
	constructor(private downloadYoutubeUseCase: DownloadYoutubeUseCase) {}

	handle(request: Request, response: Response) {
		const { link, type } = request.body;

		response.header('Content-Disposition', 'attachment; filename="video.mp4"');
		return this.downloadYoutubeUseCase.execute({ link, type }).pipe(response);
	}
}

export { DownloadYoutubeController };
