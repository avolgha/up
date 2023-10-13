import log from "@avolgha/log";
import { RenderFunction } from "./types";

const renderDirectory: RenderFunction = (_req, res) => {
	log.debug("TODO: make directories readable.");
	res.writeHead(404);
	res.write("Error: Directories are not readable currently.");
	res.end();
};

export default renderDirectory;
