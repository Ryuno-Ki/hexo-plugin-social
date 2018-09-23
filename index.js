'use strict';
const Hexo = require('hexo');
const hexo = new Hexo(process.cwd(), {});

const twitter = require('./social/twitter');
const facebook = require('./social/facebook');

hexo.entend.tag.register('twitter', twitter);
hexo.entend.tag.register('facebook', facebook);
