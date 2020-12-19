export const matchString = (source, text) => {
    let search = text.replace(/\ /g, '');
    let tokens = [];
    let search_pos = 0;

    for (let i = 0; i < source.length; i++) {
        var char = source[i];

        if (search_pos < search.length && char.toLowerCase() == search[search_pos]) {
            char = char;
            search_pos += 1;
        }
        tokens.push(char)
    }

    if (search_pos != search.length) {
        return '';
    }
    return tokens.join('')
}