'use strict'
const twitter = function twitter (args) {
  const twitter = args[ 0 ]
  return [
    '<a',
    `href="https://twitter.com/${twitter}"`,
    'class="twitter-follow-button"',
    'data-button="blue"',
    'data-text-color="#FFFFFF"',
    'data-link-color="#FFFFFF"',
    'data-show-screen-name="false"',
    'data-show-count="true">',
    `Follow @${twitter}`,
    '</a>'
  ].join(' ')
}

module.exports = twitter
