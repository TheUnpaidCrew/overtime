// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './clicks.js';
import { Clicks } from './clicks.js';

Meteor.methods({
  'clicks.update'(user) {
    try {
      var test = Clicks.findOne({user: user});
      var mvvinc = 1*test.mult;
      console.log("Increase");
      Clicks.update({user:Meteor.userId()},{$inc:{cash: mvvinc}})
    } catch (e) {
      console.log("Create");
      Clicks.insert({user:Meteor.userId(), cash: 0, mult: 1})
    }
  },
},);
