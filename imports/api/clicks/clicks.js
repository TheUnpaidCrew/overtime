// Definition of the links collection

import { Mongo } from 'meteor/mongo';

export const Clicks = new Mongo.Collection('clicks');

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './clicks.js';

Meteor.methods({
  '__nan'(user) {
    try {
      var test = Clicks.findOne({user: user});
      var mvvinc = test.mult;
      console.log("Increase");
      Clicks.update({user:Meteor.userId()},{$inc:{cash: mvvinc}});
    } catch (e) {
      console.log("Create");
      Clicks.insert({user:Meteor.userId(), cash: 0, mult: 1});
    }
  },
},);
