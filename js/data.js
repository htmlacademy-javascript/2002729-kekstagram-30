import {getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const NAMES = ['Вася', 'Даша','Мария','Руслан','Кирилл','Лилия'];
const DESCRIPTION = [
  'Новый день ― новый город.',
  'Моя опора в любой ситуации.',
  'Все лучшее впереди.',
  'Это не я на природе, а природа во мне.',
  'Что-то оригинальное',
  'Одна ошибка и ты ошибся. Джейсон Стэтхем.',
  'Тихий океан знаешь? Это я его успокоил. Джейсон Стэтхем.',
  'Если тебе где-то не рады в рваных носках, то и в целых туда ходить не стоит. Джейсон Стэтхем.'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const generatePhotoUrl = createIdGenerator();
const generateCommentId = createIdGenerator();
const generatePhotoId = createIdGenerator();

const createMessage = () => {
  const message = Array.from({length: getRandomInteger(1,2)}, () => getRandomArrayElement(MESSAGES));
  return Array.from(new Set(message)).join(' ');
};

const createComment = () => {
  const generateRandomAvatar = getRandomInteger(1, 6);
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${generateRandomAvatar}`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };
};

const createPhoto = () => {
  const generateRandomComments = getRandomInteger(0, 30);
  const generateRandomLikes = getRandomInteger(15, 200);
  return {
    id: generatePhotoId(),
    url: `photos/${generatePhotoUrl()}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: generateRandomLikes,
    comments: Array.from({length: generateRandomComments}, createComment),
  };
};

const createPosts = () => Array.from({length: 25}, createPhoto);

export {createPosts};

