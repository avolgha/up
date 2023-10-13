import log from "@avolgha/log";
import fs from "fs";
import { marked } from "marked";
import { RenderFunction } from "./types";

const renderMarkdown: RenderFunction = (req, res, filename) => {
	const fileContent = fs.readFileSync(filename, "utf-8");

	log.info("request arrived.", { route: req.url || "" });

	res.writeHead(200, {
		"Content-Type": "text/html",
	});

	const rendered = marked(fileContent);
	res.write(`
<!DOCTYPE html>
<html data-theme="dark">
<head>
  <meta charset="utf-8" />
  <title>${filename}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8.0/build/styles/default.min.css">
  <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8.0/build/highlight.min.js"></script>
  <style>
    .hljs {
      color: #abb2bf;
      background: #282c34;
    }
    
    .hljs-comment,
    .hljs-quote {
      color: #5c6370;
      font-style: italic;
    }
    
    .hljs-doctag,
    .hljs-keyword,
    .hljs-formula {
      color: #c678dd;
    }
    
    .hljs-section,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-deletion,
    .hljs-subst {
      color: #e06c75;
    }
    
    .hljs-literal {
      color: #56b6c2;
    }
    
    .hljs-string,
    .hljs-regexp,
    .hljs-addition,
    .hljs-attribute,
    .hljs-meta .hljs-string {
      color: #98c379;
    }
    
    .hljs-attr,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-type,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-number {
      color: #d19a66;
    }
    
    .hljs-symbol,
    .hljs-bullet,
    .hljs-link,
    .hljs-meta,
    .hljs-selector-id,
    .hljs-title {
      color: #61aeee;
    }
    
    .hljs-built_in,
    .hljs-title.class_,
    .hljs-class .hljs-title {
      color: #e6c07b;
    }
    
    .hljs-emphasis {
      font-style: italic;
    }
    
    .hljs-strong {
      font-weight: bold;
    }
    
    .hljs-link {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <main class="container">
	${rendered}
  </main>
  <script>hljs.highlightAll();</script>
</body>
</html>
`);
	res.end();
};

export default renderMarkdown;
