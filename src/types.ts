import http from "http";

export type RenderFunction = (
	req: http.IncomingMessage,
	res: http.ServerResponse<http.IncomingMessage> & {
		req: http.IncomingMessage;
	},
	pathname: string,
	opts: Opts
) => void;

export interface Opts {
	port: number;
	renderMarkdown: boolean;
}
