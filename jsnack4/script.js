let firstWord = prompt('insert the first word');
let secondWord = prompt('insert the second word');

if (wordLengthEqual(firstWord, secondWord)){
    console.log ('words are the same length');
} else if (firstWord > secondWord) {
    console.log ('The first word is longer');
} else {
    console.log ('The second word is longer');
}

/**
 * 
 * @param word1 - First word to check
 * @param word2 - Second word to check
 */

function wordLengthEqual(word1, word2){
    if (word1.length === word2.length){
        return true;
    }   
    return false;
}
