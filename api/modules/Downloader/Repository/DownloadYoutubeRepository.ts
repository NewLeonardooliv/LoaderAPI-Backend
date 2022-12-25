import { IDownloadYoutubeRepository } from './InterfacesRepository';
import ytdl from 'ytdl-core';

class DownloadYoutubeRepository implements IDownloadYoutubeRepository {
	async list(link: string, type: string) {
		let datas: any;
		datas = {};
		let i: any;
		i = 0;
		const metadata = await ytdl.getInfo(link);

		for (const [key, value] of Object.entries(metadata.formats)) {
			if (value.hasAudio && !value.hasVideo && type == 'audio') {
				datas[i] = value;
			}

			if (value.hasAudio && value.hasVideo && type == 'video') {
				datas[i] = value;
			}

			if (value.hasAudio && type == undefined) {
				datas[i] = value;
			}
			i++;
		}

		return datas;
	}

	checkValid(link: string, type: string) {
		return ytdl.validateURL(link);
	}
}

export { DownloadYoutubeRepository };
