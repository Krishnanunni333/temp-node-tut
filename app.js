/*
npm -  global command comes with node
npm --version

local dependency - use it only in this particular project
npm i <packagename>

global dependency - use it in any project
npm install -g <packagename>

package.json - manifest file
manual approach
npm init
npm init -y
*/

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)