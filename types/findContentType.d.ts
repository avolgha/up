export declare const map: {
    readonly ".css": "text/css";
    readonly ".gif": "image/gif";
    readonly ".html": "text/html";
    readonly ".ico": "image/vnd.microsoft.icon";
    readonly ".jpeg": "image/jpeg";
    readonly ".jpg": "image/jpg";
    readonly ".js": "text/javascript";
    readonly ".mjs": "text/javascript";
    readonly ".json": "application/json";
    readonly ".mp3": "audio/mpeg";
    readonly ".mp4": "video/mp4";
    readonly ".mpeg": "video/mpeg";
    readonly ".png": "image/png";
    readonly ".php": "application/x-httpd-php";
    readonly ".svg": "image/svg+xml";
    readonly ".ttf": "font/ttf";
    readonly ".txt": "text/plain";
    readonly ".wav": "audio/wav";
    readonly ".weba": "audio/webm";
    readonly ".webm": "video/webm";
    readonly ".webp": "image/webp";
    readonly ".woff": "font/woff";
    readonly ".woff2": "font/woff2";
    readonly ".xhtml": "application/xhtml+xml";
    readonly ".xml": "application/xml";
};
export type Extension = keyof typeof map;
export type ContentType = (typeof map)[Extension];
export declare function findContentType(extension: string): ContentType;
