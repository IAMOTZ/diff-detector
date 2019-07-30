const { pathToMessageIndex, paths, messages } = require('./loadConfig');

/**
 * This is the main entrypoint to your app
 * @param {import('probot').Application} app
 */
module.exports = (app) => {
  const regExpToPath = {};
  const pathRegExps = paths.map(path => {
    const regExp = new RegExp(`diff --git a\/{0,1}${path}.+? b\/{0,1}${path}.+`, 'g');
    regExpToPath[regExp.toString()] = path;
    return regExp;
  });

  app.log('App configured to detect the following paths:\n' + paths.join('\n'));

  app.on('pull_request.opened', async (context) => {
    context.log('Pull request event handler triggered.');

    const { diff_url } = context.payload.pull_request;

    context.log('Fetching pull request diffs from: ', diff_url);
    const { data: diffs } = await context.github.request({ url: diff_url });
    context.log('These are the file diffs I got: ', diffs);

    context.log('Identifying expected file diffs...');
    let messageIndexes = [];
    pathRegExps.forEach((regExp) => {
      const match = diffs.match(regExp);
      if (match) {
        const path = regExpToPath[regExp.toString()];
        const messageIndex = pathToMessageIndex[path];
        messageIndexes.push(messageIndex);
      }
    });

    // Remove duplicate messages
    messageIndexes = Array.from(new Set(messageIndexes));

    if(!messageIndexes.length) {
      context.log('No file changes detected... Event handler is done executing.');
      return;
    }
  
    messageIndexes.forEach((messageIndex) => {
      context.log('Creating a comment on the PR...');
      const issueComment = context.issue({ body: messages[messageIndex] });
      context.github.issues.createComment(issueComment);
    });
  });
};
