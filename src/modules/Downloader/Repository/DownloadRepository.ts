import { IDownloadVideoRepository, ITypesLoader } from './IDownloadRepository';
import ytdl from 'ytdl-core';

class DownloadVideoRepository implements IDownloadVideoRepository {
	public type: object;
	download(link: string, type: object) {
		return ytdl(link, type);
	}

	choseType(value: string) {
		if (value == 'audio') {
			this.type = { quality: 'highestaudio', filter: '' };
		}
		if (value == 'video') {
			this.type = { quality: '', filter: 'videoandaudio' };
		}

		return this.type;
	}

	checkValid(link: string, type: string) {
		let boValid = true;

		if (type != 'audio' && type != 'video') {
			boValid = false;
		}
		return boValid;
	}
}

export { DownloadVideoRepository };
