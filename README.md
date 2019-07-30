# Diff Detector

> A GitHub App that helps to check specific file changes in GitHub pull requests and respond by creating pull reqeust comments if needed.

## Setting Up

The instructions below would get you a copy of this project up and running on your local machine

#### Prerequisites

You need to have the following intalled on your machine:
- Git
- Node

#### Installing

- Clone this repsitory
- Change into the root directory of the project
- Use `$ npm install` to install all the dependency packages
- Create a `.env` file in the root folder to provide all the environment variables as specified in `.env.example`. 
  - Leave the `APP_ID` empty, it would be set programatically
  - Visit this [url](https://smee.io/new) to get a value for the `WEBHOOK_PROXY_URL` for development purpose
- Execute `npm start` script in your terminal to start the app
- Visit the url the app launches, by default it should be `http://localhost:3000`
- Use the `Register GitHub App` button on the page that loads to register the GitHub app and then install it in any of **your** repository.

### Configuring
There is a `diffConfig.json` file at the root folder of the project, this is the file that can be used to configure the files this app would
check in every PR and the message to respond with if any of the file changes.  
The `diffConfig.json` file is such that it exports a `config` array, each object in that array is a configuration with a `path` and `message` property.  
The `path` property is an array listing all the paths to check, the `message` property is a string specifying the message to post as comment.  
You can check the sample configuration in `diffConfig.json.sample` for guide on how to write your own configuration.

## Testing
- After setting up the project with the instructions above
- Open a pull request on any of the github repository you've installed the app
- If you've modified and of the files in the path configured in the `diffConfig.json`, the message attached to that path should be posted as comment in the PR.

## Note on Deploying
When deploying, the `WEBHOOK_PROXY_URL` should point to the url the project would be deployed and not the url from smee.io.


## Contributing

If you have suggestions for how diff-detector could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2019 Tunmise Ogunniyi <ogunniyitunmise@gmail.com>
