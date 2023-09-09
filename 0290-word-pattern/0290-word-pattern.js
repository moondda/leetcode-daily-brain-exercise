var wordPattern = function(pattern, s) {
    const symbol = {};
    const words = s.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        // Check if the character already has a corresponding word
        if (symbol[char]) {
            if (symbol[char] !== word) {
                return false; // Mismatch found, return false
            }
        } else {
            // If the word is already used for another character, return false
            if (Object.values(symbol).includes(word)) {
                return false;
            }
            symbol[char] = word; // Map the character to the word
        }
    }

    return true;
};