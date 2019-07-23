# Diff Detector

> A GitHub App that helps to check specific file changes in GitHub pull requests and respond by creating pull reqeust comments if needed.

## Setting Up

The instructions below would get you a copy of this project up and running on your local machine

#### Prerequisites

You need to have the following intalled on your machine:
- Git
- Node

#### Installation

- Clone this repsitory
- Change into the root directory of the project
- Use `$ npm install` to install all the dependency packages
- Create a `.env` file in the root folder to provide all the environment variables as specified in `.env.example`. 
  - Leave the `APP_ID` empty, it would be set programatically
  - Visit this [url](https://smee.io/new) to get a value for the `WEBHOOK_PROXY_URL` for development purpose
- Execute `npm start` script in your terminal to start the app
- Visit the url the app launches, by default it should be `http://localhost:3000`
- Use the `Register GitHub App` button on the page that loads to register the GitHub app and then install it in any of **your** repository.

## Testing
@TODO: I should add instructions on how to test the app  
@TODO: I should add instructions on how to customize the files to check and the message to respond with.

## Note on Deploying
When deploying, the `WEBHOOK_PROXY_URL` should point to the url the project would be deployed and not the url from smee.io.


## Contributing

If you have suggestions for how diff-detector could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2019 Tunmise Ogunniyi <ogunniyitunmise@gmail.com>
