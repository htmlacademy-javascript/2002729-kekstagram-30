const checkStringLength = (string, length) => string.length <= length;

checkStringLength('проверяемая строка', 10);

const isPalindrome = (string) => {
  string = string.replaceAll(' ', '').toUpperCase();
  return string === string.split('').reverse().join('');
};

isPalindrome('топот');

const getNumbers = (string) => {
  string = String(string).replace(/[^0-9]/g,'');
  return parseInt(string, 10);
};

getNumbers('keks');
