#!/usr/bin/env node
var i=require("util"),t=i.promisify(require("child_process").exec);(async function(){let{stdout:o,stderr:e}=await t('git add -A && git commit --no-verify -am "woohoo" && git push --all');console.log(o),console.log(e)})();
