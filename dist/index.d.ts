/**
 * @url file download url
 * @fileName file name
 * @fileSize file size
 * @downloadSize download size
 * @downloadProgress download progress
 * @cancel cancel download
 */
interface DefaultOptons {
    url: string | undefined;
    fileName: string;
    fileSize: number;
    downloadSize: number;
    downloadProgress: number;
    cancel: () => void;
}

declare function AxDownLoader(options: DefaultOptons): Promise<unknown>;

export { AxDownLoader as default };
