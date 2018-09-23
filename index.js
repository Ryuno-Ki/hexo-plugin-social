'use strict';
const hexo = require('hexo');

const twitter = require('./social/twitter');
const facebook = require('./social/facebook');

hexo.entend.tag.register('twitter', twitter);
hexo.entend.tag.register('facebook', facebook);
