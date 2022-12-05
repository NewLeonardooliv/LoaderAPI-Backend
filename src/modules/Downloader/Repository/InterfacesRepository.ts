interface IDownloadYoutubeRepository {
	list(link: string, type: string): any;
	checkValid(link: string, type: string): boolean;
}

interface IDownloadTwitterRepository {
	downloadVideo(link: string): any;
}

export { IDownloadYoutubeRepository, IDownloadTwitterRepository };
