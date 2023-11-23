import log from "@avolgha/log";
import fs from "fs";
import path from "path";
import { RenderFunction } from "./types";
import renderDocument from "./renderDocument";

const renderDirectory: RenderFunction = (req, res, dirname, opts) => {
	const indexFilePath = path.resolve(dirname, "index.html");
	if (fs.existsSync(indexFilePath)) {
		renderDocument(req, res, indexFilePath, opts);
		return;
	}

	log.debug("TODO: make directories readable.");
	res.writeHead(404);
	res.write("Error: Directories are not readable currently.");
	res.end();
};

export default renderDirectory;
