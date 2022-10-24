interface IDownloadYoutubeRepository {
	list(link: string, type: string);
	checkValid(link: string, type: string): boolean;
}

export { IDownloadYoutubeRepository };
