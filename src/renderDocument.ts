import log from "@avolgha/log";
import fs from "fs";
import path from "path";
import { findContentType } from "./findContentType";
import { RenderFunction } from "./types";
import renderMarkdown from "./renderMarkdown";

const renderDocument: RenderFunction = (req, res, filename, opts) => {
	const extension = path.extname(filename).toLowerCase();
	const stream = fs.createReadStream(filename);

	if (opts.renderMarkdown && extension === ".md") {
		return renderMarkdown(req, res, filename, opts);
	}

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
