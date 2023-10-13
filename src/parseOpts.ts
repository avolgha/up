import minimist from "minimist";
import { Opts } from "./types";

export function parseOpts(): Opts {
	let args = process.argv;
	args = args.slice(args[0].startsWith("node") ? 3 : 2);
	const argv = minimist(args);

	const port = parseInt(argv._.at(0) || "5173");
	const renderMarkdown = argv.renderMd === true;

	return { port, renderMarkdown };
}
