'use strict'
/* global hexo */
const twitter = require('./social/twitter')
const facebook = require('./social/facebook')

hexo.extend.tag.register('twitter', twitter)
hexo.extend.tag.register('facebook', facebook)
