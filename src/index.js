/**
 * Copyright © 2017 Mozg. All rights reserved.
 * See LICENSE.txt for license details.
 */

//

console.log(this);

//

var mozg_framework = {};
module['exports'] = mozg_framework;

mozg_framework.version = '1.0.0';

mozg_framework.themes = {};

var defineProps = Object.defineProperties;

console.log(defineProps);

var styles = (function () {
  var ret = {};
  console.log('22');
  return ret;
})();

var proto = defineProps(function mozg_framework() {}, styles);

console.log(proto);

mozg_framework.setTheme = function (theme) {
  if (typeof theme === 'string') {
    try {
    	console.log('33');
      return '44';
    } catch (err) {
      console.log(err);
      return err;
    }
  } else {
    console.log('55');
  }
};

function init() {
  var ret = {};
  console.log('66');
  return ret;
}

defineProps(mozg_framework, init());

//