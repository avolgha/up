#!/usr/bin/env node
import log from "@avolgha/log";
import fs from "fs";
import http from "http";
import path from "path";
import { parseOpts } from "./parseOpts";
import { RenderFunction } from "./types";
import renderDocument from "./renderDocument";
import renderDirectory from "./renderDirectory";
import renderMarkdown from "./renderMarkdown";

const opts = parseOpts();
const dir = process.cwd();

http.createServer((req, res) => {
	const pathname = path.join(dir, (req.url || "/").slice(1));
	if (!fs.existsSync(pathname) || path.basename(pathname).startsWith(".")) {
		log.fatal("looking for route that does not exists.", {
			route: req.url || "/",
		});
		res.writeHead(404);
		res.write(`Error 404: Could not find Route "${req.url || "/"}".`);
		res.end();
		return;
	}

	let renderFunction: RenderFunction;
	if (fs.statSync(pathname).isDirectory()) {
		renderFunction = renderDirectory;
	} else {
		const extension = path.extname(pathname).toLowerCase();

		if (opts.renderMarkdown && extension === ".md") {
			renderFunction = renderMarkdown;
		} else {
			renderFunction = renderDocument;
		}
	}

	renderFunction(req, res, pathname, opts);
}).listen(opts.port, "127.0.0.1", undefined, () => {
	log.info("started server.", { port: opts.port });
});
