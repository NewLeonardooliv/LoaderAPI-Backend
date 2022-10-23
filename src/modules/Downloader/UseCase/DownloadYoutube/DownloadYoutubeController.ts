import { Request, Response } from 'express';
import { Util } from '../../../Util/RandomInt';
import { DownloadYoutubeUseCase } from './DownloadYoutubeUseCase';

class DownloadYoutubeController {
	constructor(private downloadYoutubeUseCase: DownloadYoutubeUseCase) {}

	handle(request: Request, response: Response) {
		const { link, type } = request.body;

		const fileName = Util.getRandomInt(100, 10000);
		response.header('Content-Disposition', `attachment; filename="${fileName}.mp4"`);
		return this.downloadYoutubeUseCase.execute({ link, type }).pipe(response);
	}
}

export { DownloadYoutubeController };
