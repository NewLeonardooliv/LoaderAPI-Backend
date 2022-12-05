import { IDownloadTwitterRepository } from "./InterfacesRepository";

class DownloadTwitterRepository implements IDownloadTwitterRepository {

	async downloadVideo(link: string) {
		const twitterGetUrl = require("twitter-url-direct")
		let download = await twitterGetUrl(link)

		return download;
	}
}

export { DownloadTwitterRepository };
