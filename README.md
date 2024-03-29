![Electron-PHP Banner](https://raw.githubusercontent.com/Padrio/electron-php/develop/.github/banner.png)

# electron-php

Build ~~cross-platform~~ (coming soon) desktop applications using PHP as backend and electron for rendering.
Currently, we only support Windows, but we already work on support for mac and linux.

### Build an application

First you need to make sure that you have NodeJS and NPM installed. Also make sure that you have modified your environment variables according to their needs.
Now we can clone the repository code and install the dependencies.

```
git clone https://github.com/Andre-Rodrigues-Dev-Web/ElectronPHP-8.2
```

To install the dependencies you need to run the setup script. Use either the setup.bat (windows) or setup.sh (macOS/linux)

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**

## Configuration

You can pass a callback to the run method, this will get called when the PHP server is up and running. If you don't pass a callback to the run method, a promise will be returned that resolves when the PHP server is up and running. These you need to do at main.js file from where you find comment of // PHP SERVER CREATION /////

## Configuration

| Name           | Default         | Description                                                                                                        |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| `php`        | `php`         | The php command file                                                                                               |
| `host`       | `127.0.0.1`   | The server's host                                                                                                  |
| `port`       | `8000`        | The port used                                                                                                      |
| `directory`  | `null`        | The document root. By default is the current working directory                                                     |
| `script`     | `null`        | The "router" script                                                                                                |
| `stdio`      | `inherit`     | stdio option passed to the spawned process - https://nodejs.org/api/child_process.html#child_process_options_stdio |
| `directives` | `{}`          | An object with the custom PHP directives                                                                           |
| `config`     | `null`        | The path of a custom php.ini file                                                                                  |
| `env`        | `process.env` | The environment variables passed                                                                                   |

## Volunteer

Feel free to simply contribute.
