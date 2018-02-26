// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-bootstrap-nojs.js.
import { name as packageName } from "meteor/meteor-bootstrap-nojs";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-bootstrap-nojs - example', function (test) {
  test.equal(packageName, "meteor-bootstrap-nojs");
});
