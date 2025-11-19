#!/usr/bin/env node
const util = require('util');
const exec = util.promisify(require('child_process').exec);

(async function () {
    const {stdout, stderr} = await exec(
        `git add -A && git commit --no-verify -am "woohoo" && git push --all`,
    );
    console.log(stdout);
    console.log(stderr);
})();
