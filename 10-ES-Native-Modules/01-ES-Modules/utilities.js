import './alert.js';
const punct = '!';

const formatName = function(name) {
  return name.replace(/(\w+), (\w+)/, '$2 $1');
};

const upperCaseName = function(name) {
  return name.toUpperCase();
};

/*const yellName = function(name) {
  return upperCaseName(name) + punct;
};*/

export default function yellName(name) {
    return upperCaseName(name) + punct;
};

//export { yellName, formatName };