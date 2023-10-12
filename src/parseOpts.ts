import { Opts } from "./types";

export function parseOpts(): Opts {
	let args = process.argv;
	args = args.slice(args[0].startsWith("node") ? 3 : 2);
	const port = parseInt(args.shift() || "5173");

	return { port };
}
