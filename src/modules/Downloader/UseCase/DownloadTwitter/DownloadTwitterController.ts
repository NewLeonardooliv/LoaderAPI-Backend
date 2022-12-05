import { Request, Response } from 'express';
import { DownloadTwitterUseCase } from './DownloadTwitterUseCase';

class DownloadTwitterController {
	constructor(private downloadTwitterUseCase: DownloadTwitterUseCase) { }

	async handle(request: Request, response: Response) {
		const { link } = request.body;
		const twitterGetUrl = require("twitter-url-direct")
		let download = await twitterGetUrl(link)

		// const download = await this.downloadTwitterUseCase.execute(link)

		return response.status(200).json(download);
	}
}

export { DownloadTwitterController };
