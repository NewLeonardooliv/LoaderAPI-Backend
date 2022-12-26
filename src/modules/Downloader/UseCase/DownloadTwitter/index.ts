import { DownloadTwitterRepository } from "../../Repository/DownloadTwitterRepository";
import { DownloadTwitterController } from "./DownloadTwitterController";
import { DownloadTwitterUseCase } from "./DownloadTwitterUseCase";

const downloadTwitterRepository = new DownloadTwitterRepository();
const downloadTwitterUseCase = new DownloadTwitterUseCase(downloadTwitterRepository);
const downloadTwitterController = new DownloadTwitterController(downloadTwitterUseCase);

export { downloadTwitterController };
