# up

Simple web server you can start in milliseconds!

## Todo

> Would love to receive PRs with additional features!

- [ ] when requesting directory:
  - [ ] search for `index.html` file
  - [ ] otherwise show Directory Browser
- [ ] specifiable 404-error page
- [ ] add `renderMarkdown`-function at [src/bin.ts L26](https://github.com/avolgha/up/blob/dev/src/bin.ts#L26)

## Installation

You can install the package via:

````shell
$ pnpm add -D @avolgha/up
````

## Usage

````shell
$ up [port] [--renderMd]
````

> Port will default to `5173` if no other is specified.
