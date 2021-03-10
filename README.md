# The Exam House

The Exam House's website and blog built on Gatsby.

## Requirements

- [Node.js](https://nodejs.org/en/) version 14.16.0 or later
- [Yarn](https://yarnpkg.com/) package manager v1.22.5 or later

> Note: It is recommended to install [Volta](https://volta.sh/) to take care of the versioning of your environment

## Installation

1. Clone this repository on your local environment
2. On your terminal `cd` into the project's directory
3. Run `yarn install` to install the project's dependencies
4. Run `yarn dev` to run Gatsby on development mode

## Maintenance and code styling

The project includes EditorConfig, ESLint and Prettier configurations in order to check syntax, find problems, and enforce code style across the codebase.

It is highly recommended to install the corresponding extensions for your code editor.

A couple yarn scripts are included in `package.json` to make use of these tools:

- Run `yarn lint` to lint files using ESLint
- Run `yarn format` to use Prettier to format files
- Run `yarn validate` to ensure the project is in a valid state (lint, formatting wise and build correctly)

Note that these tasks will run automatically when you commit files to Git so in most cases you won't need to use the scripts yourself 😉
