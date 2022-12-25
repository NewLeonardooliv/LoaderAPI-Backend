import { IDownloadTwitterRepository } from "../../Repository/InterfacesRepository";

interface IRequest {
	link: string;
}

class DownloadTwitterUseCase {
	constructor(private downloaderRepository: IDownloadTwitterRepository) { }

	async execute({ link }: IRequest) {
		return await this.downloaderRepository.downloadVideo(link);
	}
}

export { DownloadTwitterUseCase };
