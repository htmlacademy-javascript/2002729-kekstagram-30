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

getNumbers('2023');

const getTime = (begin, end, meeting, length) => {

  const [beginHours, beginMinutes] = begin.split(':');
  begin = (+beginHours * 60) + (+beginMinutes);

  const [endHours, endMinutes] = end.split(':');
  end = (+endHours * 60) + (+endMinutes);

  const [meetingHours, meetingMinutes] = meeting.split(':');
  meeting = (+meetingHours * 60) + (+meetingMinutes);

  const num = meeting + length;

  if (begin <= meeting && meeting <= end && num <= end) {
    return true;
  } else {
    return false;
  }
};

console.log(getTime('8:0', '10:0', '8:0', 120));
