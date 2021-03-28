var sentenceObj = {
  names: ['Kim Seok Jin', 'Kim Namjoon', 'Jeon Hoseuk', 'Min Yoongi', 'Kim Taehyung', 'Park Jimin', 'Jeon Jungkook', 'Bang Si Hyuk'],
  adjectives: ['charming', 'confident', 'dedicated', 'honest', 'kind', 'likeable', 'thoughtful'],
  verbs: ['dancing', 'singing', 'humor', 'smile', 'appreciation', 'love', 'work ethic']
};


const mixedMessages = (obj) => {
  const randomGeneratorNames = () => {
    return Math.floor(Math.random() * obj.names.length);
  };
  const randomGeneratorAdjectives = () => {
    return Math.floor(Math.random() * obj.adjectives.length);
  };
  const randomGeneratorVerbs = () => {
    return Math.floor(Math.random() * obj.verbs.length);
  };

  const person = obj.names[randomGeneratorNames()];
  const adj = obj.adjectives[randomGeneratorAdjectives()];
  const verb = obj.verbs[randomGeneratorVerbs()]

  const sentence = `${person}'s ${adj} ${verb} is absolutely wonderful!`
  return sentence;
}


console.log(mixedMessages(sentenceObj));
