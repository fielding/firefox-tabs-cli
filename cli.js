#!/usr/bin/env node
'use strict';
const meow = require('meow');
const firefoxTabs = require('firefox-tabs');

const cli = meow(`
  Usage
    $ firefox-tabs-cli

  Options
    --count, -c  Return number of firefox tabs open.

  Examples
    $ firefox-tabs-cli
    firefoxTabs object
    $ firefox-tabs-cli --count
    5
  `, {
    alias: {
      c: 'count'
    },
    boolean: 'count'
  });

if (cli.flags.count) {
  console.log(firefoxTabs.sync().tabCount);
} else {
  firefoxTabs().then(console.log);
}
