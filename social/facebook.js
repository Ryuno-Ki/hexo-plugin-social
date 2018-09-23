'use strict'
const facebook = function facebook (args) {
  const facebook = args[ 0 ]
  return [
    '<iframe',
    'id="fb"',
    `src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2F${facebook}&ampsend=false&amplayout=button_count&ampwidth=110&ampshow_faces=false&ampaction=like&ampcolorscheme=light&ampfont=segoe+ui&ampheight=20"`,
    'scrolling="no"',
    'frameborder="0"',
    'allowTransparency="true">',
    '</iframe>'
  ].join(' ')
}

module.exports = facebook
