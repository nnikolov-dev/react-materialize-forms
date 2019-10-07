const ghpages = require('gh-pages');

ghpages.publish('build', {
    branch: 'master',
    repo: 'nnikolov-dev/react-materialize-forms.github.io'
});