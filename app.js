import { bookTitle } from './source/books.mjs';
import { matchString } from './modules/fuzzy.mjs'

import { createInterface } from 'readline';

const rdline = createInterface({
    input: process.stdin,
    output: process.stdout
});


rdline.question('masukan judul yang ingin dicari:', text => {
    let results = [];

    bookTitle.forEach(title => {
        let match = matchString(title, text);
        if (match) {
            results.push(match)
        }
    });

    console.log(results)
    rdline.close();
});