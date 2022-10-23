import { IDownloadVideoRepository } from '../../Repository/IDownloadRepository';

interface IRequest {
	link: string;
	type: string;
}

class DownloadVideoUseCase {
	constructor(private downloaderRepository: IDownloadVideoRepository) {}

	execute({ link, type }: IRequest) {
		const validateDonwloader = this.downloaderRepository.checkValid(link, type);

		if (!validateDonwloader) {
			throw new Error('Problemas ao validar download.');
		}
		const setedType = this.downloaderRepository.choseType(type);

		return this.downloaderRepository.download(link, setedType);
	}
}

export { DownloadVideoUseCase };
