import { IDownloadYoutubeRepository } from '../../Repository/InterfacesRepository';

interface IRequest {
	link: string;
	type: string;
}

class DownloadYoutubeUseCase {
	constructor(private downloaderRepository: IDownloadYoutubeRepository) {}

	execute({ link, type }: IRequest) {
		const validateDonwloader = this.downloaderRepository.checkValid(link, type);

		if (!validateDonwloader) {
			throw new Error('Problemas ao validar link de download.');
		}

		return this.downloaderRepository.list(link, type);
	}
}

export { DownloadYoutubeUseCase };
