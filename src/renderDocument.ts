import log from "@avolgha/log";
import fs from "fs";
import path from "path";
import { findContentType } from "./findContentType";
import { RenderFunction } from "./types";

const renderDocument: RenderFunction = (req, res, filename) => {
	const extension = path.extname(filename).toLowerCase();
	const stream = fs.createReadStream(filename);

	const contentType = findContentType(extension);

	log.info("request arrived.", { route: req.url || "" });

	res.writeHead(200, {
		"Content-Type": contentType,
	});
	stream.pipe(res);
	stream.on("end", () => {
		res.end();
	});
};

export default renderDocument;
