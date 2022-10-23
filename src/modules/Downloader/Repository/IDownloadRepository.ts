interface IDownloadVideoRepository {
	download(link: string, type: object);
	checkValid(link: string, type: string): boolean;
	choseType(type: string): object;
}

interface ITypesLoader {
	quality: string;
	filter: string;
}

export { IDownloadVideoRepository, ITypesLoader };
