'use strict';

try {
  function sayText(text) {
    console.log(text);
  }
  sayText('Hello');
} catch (error) {
  console.error('Error: ' + error);
}
