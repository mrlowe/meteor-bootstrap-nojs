Package.describe({
  name: 'mrlowe:bootstrap-nojs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This package provides bootstrap 3 css and fonts, but no javascript. For use with react-bootstrap.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.mainModule('meteor-bootstrap-nojs.js');
  api.addFiles('bootstrap.css', 'client');
  api.addAssets([
      'fonts/glyphicons-halflings-regular.eot',
      'fonts/glyphicons-halflings-regular.svg',
      'fonts/glyphicons-halflings-regular.ttf',
      'fonts/glyphicons-halflings-regular.woff',
      'fonts/glyphicons-halflings-regular.woff2'
    ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mrlowe:bootstrap-nojs');
  api.mainModule('meteor-bootstrap-nojs-tests.js');
});
