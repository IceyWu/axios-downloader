/**
 * @url file download url
 * @fileName file name
 * @fileSize file size
 * @downloadSize download size
 * @downloadProgress download progress
 */
interface DefaultOptons {
    url: string | undefined;
    fileName: string;
    fileSize: number;
    downloadSize: number;
    downloadProgress: number;
}

declare function AxDownLoader(options: DefaultOptons): Promise<unknown>;

export { AxDownLoader as default };
