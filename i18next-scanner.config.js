const fs = require('fs');
const chalk = require('chalk');
//i18next-scanner
module.exports = {
    input: [
        'src/**/*.{htm,html,js,jsx,vue}',
        // Use ! to filter out files or directories
        '!app/**/*.spec.{js,jsx}',
        '!app/i18n/**',
        '!**/node_modules/**'
    ],
    output: './',
    options: {
        debug: true,
        func: {
            list: ['\\$t', 'i18n.t', 't'],
            extensions: ['.js', '.jsx', '.vue', '.html', '.htm', '.ts']
        },
        trans: {
            component: 'Trans',
            extensions: []
        },
        lngs: ['fr', 'en'],
        ns: ['fr'],
        defaultLng: 'fr',
        defaultNs: 'fr',
        /* defaultValue: '__STRING_NOT_TRANSLATED__', */
        resource: {
            loadPath: 'src/plugins/i18n/locales/{{ns}}.json',
            savePath: 'src/plugins/i18n/locales/{{ns}}.json',
            jsonIndent: 4,
            lineEnding: '\n'
        },
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    },
    transform: function customTransform(file, enc, done) {
        'use strict';
        const parser = this.parser;
        const content = fs.readFileSync(file.path, enc);
        let count = 0;

        parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__', '\\$t', 'i18n.t', 't'] }, (key, options) => {
            options.defaultValue = key; // use key as the value
            parser.set(key, options);
            /* parser.set(key, Object.assign({}, options, {
                nsSeparator: false,
                keySeparator: false
            })); */
            ++count;
        });

        if (count > 0) {
            console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
        }

        done();
    }
};
