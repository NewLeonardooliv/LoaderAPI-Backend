import { DownloadVideoUseCase } from './DownloadUseCase';
import { Request, Response } from 'express';

class DownloadVideoController {
	constructor(private downloadVideoUseCase: DownloadVideoUseCase) {}

	handle(request: Request, response: Response) {
		const { link, type } = request.body;

		response.header('Content-Disposition', 'attachment; filename="video.mp4"');
		return this.downloadVideoUseCase.execute({ link, type }).pipe(response);
	}
}

export { DownloadVideoController };
