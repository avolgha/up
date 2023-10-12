import http from "http";

export type RenderFunction = (
	req: http.IncomingMessage,
	res: http.ServerResponse<http.IncomingMessage> & {
		req: http.IncomingMessage;
	},
	pathname: string
) => void;
export interface Opts {
	port: number;
}
