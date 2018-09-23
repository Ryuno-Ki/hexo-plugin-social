const hexo = require('hexo');

hexo.entend.tag.register('twitter', function (args, content) {
    const twitter = args[ 0 ];
    return [
      '<a',
        `href="https://twitter.com/${ twitter }"`,
        'class="twitter-follow-button"',
        'data-button="blue"',
        'data-text-color="#FFFFFF"',
        'data-link-color="#FFFFFF"',
        'data-show-screen-name="false"',
        'data-show-count="true">',
        `Follow @${ twitter }`,
      '</a>'
    ].join(' ');
});

hexo.entend.tag.register('facebook', function (args, content) {
    const facebook = args[ 0 ];
    return [
      '<iframe',
        'id="fb"',
        `src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2F${ facebook }&amp;send=false&amp;layout=button_count&amp;width=110&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=segoe+ui&amp;height=20"`,
        'scrolling="no"',
        'frameborder="0"',
        'allowTransparency="true">'
      '</iframe>'
    ].join(' ');
});
