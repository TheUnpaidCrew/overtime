// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../clicks.js';

Meteor.publish('clicks.all', function () {
  return Clicks.find();
});
