'use strict';
const facebook = function facebook (args) {
    const facebook = args[ 0 ];
    return [
      '<iframe',
        'id="fb"',
        `src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2F${ facebook }&amp;send=false&amp;layout=button_count&amp;width=110&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=segoe+ui&amp;height=20"`,
        'scrolling="no"',
        'frameborder="0"',
        'allowTransparency="true">',
      '</iframe>'
    ].join(' ');
};

module.exports = facebook;
