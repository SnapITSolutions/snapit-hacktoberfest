# SnapIT HacktoberFest
This is an open source project created to allow our apprentice developers, and others to learn and practice. It is an informational website that directs users to our in-person and virtual hackathons.

We hope you will participate in making this project great, and we look forward to seeing you at the next hackathon!

Here's the [deployed project](https://snapit-hacktoberfest.herokuapp.com/)

## Contribution Guidelines
Please read the [Contribution Guidelines](CONTRIBUTING.md) before opening a pull request.

## Installation

### Install Node Version Manager
We recommend [installing NVM](https://github.com/nvm-sh/nvm#installing-and-updating).
It makes it much easier to switch node versions when working on multiple projects.

### Install Node.js
`nvm install` will install the correct version of node required for the project.

If you don't use nvm, you can [install node](https://nodejs.org/en/) yourself.

### Switch to the project version of Node.js
`nvm use` will switch to the correct version of node required for the project.

### Install Yarn
`https://classic.yarnpkg.com/en/docs/install/`

### Install Packages
`yarn install`

### Run Application
`yarn dev`

## Development

Try to use [MUI](https://mui.com/) components whenever posssible.

We use:
* [React](https://reactjs.org/)
* [MUI](https://mui.com/)

### Testing

All tests must pass before a PR will be accepted.
* `yarn test` will run the test suite.

We use:
* [Jest](https://jestjs.io/)
* [Enzyme](https://enzymejs.github.io/enzyme/)

### Linting and Formatting

All lint must be removed, and the code must be formatted correctly before a PR will be accepted.
* `yarn lint` will run the JavaScript linter.
* `yarn stylelint` will run the css linter.
* `yarn prettier` will run the formatter.

We use:
* [ESLint](https://eslint.org/)
* [AirBnb Style Guide](https://airbnb.io/javascript/react/)
* [stylelint](https://stylelint.io/)
* [Prettier](https://prettier.io/)

### Commits

#### Pre-Commit Hook

This repository has a pre-commit hook that will attempt to correct any linting and formatting
issues. If there are any files that still contain lint after running the pre-commit hook, the commit
will fail, and you will have to manually correct the issues.

### Pull Requests
Pull requests are welcome from anyone. Please follow the documentation provided to ensure your pull request is accepted.

### Issues
We want to improve this project, so if you find an issue, or if you have a suggestion for improvement, search the existing issues section, and if an issue doesn't already exist, open a new issue.

___

[![Greetings](https://github.com/SnapITSolutions/snapit-hacktoberfest/actions/workflows/greetings.yml/badge.svg)](https://github.com/SnapITSolutions/snapit-hacktoberfest/actions/workflows/greetings.yml)

[![CI Pipeline](https://github.com/SnapITSolutions/snapit-hacktoberfest/actions/workflows/ci-pipeline.yml/badge.svg)](https://github.com/SnapITSolutions/snapit-hacktoberfest/actions/workflows/ci-pipeline.yml)

[![CodeQL](https://github.com/SnapITSolutions/snapit-hacktoberfest/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/SnapITSolutions/snapit-hacktoberfest/actions/workflows/codeql-analysis.yml)

[![GitHub Packages](https://github.com/SnapITSolutions/snapit-hacktoberfest/actions/workflows/github-packages.yml/badge.svg)](https://github.com/SnapITSolutions/snapit-hacktoberfest/actions/workflows/github-packages.yml)
