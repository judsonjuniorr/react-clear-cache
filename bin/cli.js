#!/usr/bin/env node

const fs = require('fs');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;
const parseArgs = require('minimist');
const { v4: uuidv4 } = require('uuid');

const appVersion = uuidv4();

const jsonData = {
  version: appVersion,
};

const jsonContent = JSON.stringify(jsonData);

const args = parseArgs(process.argv.slice(2));

const destination = `${args.destination || './build'}/meta.json`;

const filename = destination.match(/[^\\/]+$/)[0];

writeFile(destination, jsonContent, (err) => {
  if (err) {
    console.log(`An error occured while writing JSON Object to ${filename}`);
    return console.log(err);
  }
  console.log(`${filename} file has been saved with latest version number`);
  return null;
});

function writeFile(path, contents, cb) {
  mkdirp(getDirName(path))
    .then(() => {
      fs.writeFile(path, contents, cb);
    })
    .catch((err) => {
      throw err;
    });
}
