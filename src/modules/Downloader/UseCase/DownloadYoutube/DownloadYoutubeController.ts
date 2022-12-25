import { Request, Response } from 'express';
import { Util } from '../../../Util/RandomInt';
import { DownloadYoutubeUseCase } from './DownloadYoutubeUseCase';

class DownloadYoutubeController {
	constructor(private downloadYoutubeUseCase: DownloadYoutubeUseCase) {}

	async handle(request: Request, response: Response) {
		const { link, type } = request.body;

		const download = await this.downloadYoutubeUseCase.execute({ link, type });
		return response.status(200).json({ response: download });
	}
}

export { DownloadYoutubeController };
