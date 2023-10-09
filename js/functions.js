function stringLength (string, length) {
  return string.length <= length;
}

stringLength('проверяемая строка', 10);

function palindrome (string) {
  const normalString = string.replaceAll(' ', '').toUpperCase();

  let result = '';
  for (let i = normalString.length - 1; i >= 0; i--) {
    result += normalString[i];
  }
  return result === normalString;
}

palindrome('топот');
