# browser-logging

Listens for logs from [browser-logging-client](https://www.npmjs.com/package/browser-logging-client).

This is useful for retrieving Cypress UI test browser logs.

Any message sent to `console.log`, `console.warn` and `console.error` will also be sent to and logged by the logging server.

## Server

To start the server which will listen for logs:

### Run with npx

```
$ npx browser-logging-server
Listening for browser logs on ws://localhost:8888
```

### Install globally

Alternatively, install globally and run directly with node:

#### yarn

```
$ yarn global add browser-logging-server
$ node browser-logging-server
Listening for browser logs on ws://localhost:8888
```

#### npm

```
$ npm install --global browser-logging-server
$ node browser-logging-server
Listening for browser logs on ws://localhost:8888
```

## Client

Once the server has started, run the client. See [browser-logging-client](https://www.npmjs.com/package/browser-logging-client).

## Publishing

Install `np` - https://github.com/sindresorhus/np:

```
yarn global add np
```

Run `np` and follow instructions.

## License

[MIT](https://opensource.org/licenses/MIT) License.
