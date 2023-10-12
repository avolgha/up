// MIME Types after https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
export const map = {
	".css": "text/css",
	".gif": "image/gif",
	".html": "text/html",
	".ico": "image/vnd.microsoft.icon",
	".jpeg": "image/jpeg",
	".jpg": "image/jpg",
	".js": "text/javascript",
	".mjs": "text/javascript",
	".json": "application/json",
	".mp3": "audio/mpeg",
	".mp4": "video/mp4",
	".mpeg": "video/mpeg",
	".png": "image/png",
	".php": "application/x-httpd-php",
	".svg": "image/svg+xml",
	".ttf": "font/ttf",
	".txt": "text/plain",
	".wav": "audio/wav",
	".weba": "audio/webm",
	".webm": "video/webm",
	".webp": "image/webp",
	".woff": "font/woff",
	".woff2": "font/woff2",
	".xhtml": "application/xhtml+xml",
	".xml": "application/xml",
} as const;

export type Extension = keyof typeof map;
export type ContentType = (typeof map)[Extension];

export function findContentType(extension: string): ContentType {
	if (extension in map) {
		// when the extension is present in the map,
		// we can assume that the given extension would
		// be of type `Extension`.
		return map[extension as Extension];
	}
	return "text/plain";
}
