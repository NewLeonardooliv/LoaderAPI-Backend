interface IDownloadYoutubeRepository {
	download(link: string, type: object);
	checkValid(link: string, type: string): boolean;
	choseType(type: string): object;
}

export { IDownloadYoutubeRepository };
