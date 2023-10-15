function reverseSentence(sentence) {

    var words = sentence.split(' ');
    words = words.reverse();
    var reversedSentence = words.join(' ');
    return reversedSentence;
}


var input = "Hello, this is a sample sentence";
var reversedSentence = reverseSentence(input);
console.log(reversedSentence);