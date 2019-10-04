const ghpages = require('gh-pages');

ghpages.publish('build', {
    branch: 'master',
    repo: 'https://github.com/nnikolov-dev/react-materialize-forms.github.io.git'
});