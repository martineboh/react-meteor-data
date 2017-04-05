Package.describe({
  name: 'orionsoft:react-meteor-data',
  version: '0.1.5',
  summary: 'Fetch Meteor data in React using decorators',
  git: 'https://github.com/orionsoft/react-meteor-data',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.4.1.1')
  api.use('ecmascript')
  api.use('underscore')
  api.use('react-meteor-data@0.2.9')
  api.mainModule('main.js')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('orionsoft:react-meteor-data')
  // api.mainModule('react-meteor-data-tests.js')
})
