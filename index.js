const arvish = require('arvish');

arvish.fetch('https://api.github.com/emojis', { maxAge: 24 * 60 * 60 }).then((emojis) => {
    const items = Object.keys(emojis).map((emojiName) => {
        return {
            title: emojiName,
            subtitle: `Press enter to copy emoji name`,
            icon: emojis[emojiName],
            arg: `:${emojiName}:`,
            quicklookurl: emojis[emojiName],
        }
    });

    arvish.output(arvish.inputMatches(items, 'title'));
});