// function countWords (str) {

//   str.trim()

//   str = str.replace(/(^\s*)|(\s*$)/gi,"");
//   str = str.replace(/[ ]{2,}/gi," ");
//   str = str.replace(/\n /,"\n");

//   // if (str.match(/\d/g))

//   return str.split(' ')
// }

// console.info(countWords("aaa 1 2"))

// var input = "b? Dl )B 4(V! A. MK            ,            YtG ](f 1m )CNxuNUR {PG?";
// var input1 = ")}OJR 92ww. z )UPl 49e ]S  g. zrZEnQ  D. FoKp ]ow 1EceB 3oK }w ]CA? L 3LPbDN! trqJY 0sBmm. Nwn"
// var countWord = function(input){
//     var res = 0;
//     var words = input.split(' ')

//     words.forEach(element => {
//         if(element.match(/^([a-zA-Z])+([^<>()\[\]\(\)\;:\s@"])$/)){
//             res++;
//         }
//     });
//     console.info(words)
//     return res
// }

// console.info(countWord(input1))

name = ['ball', 'ball', 'ball', 'ball', 'ball', 'ball'] 
price = [1, 1, 1, 1, 1, 1] 
weight = [1, 1, 1, 1, 1, 2]

var a = function numDuplicates(name, price, weight) {
  var arr = []
  const charObj = {}
  var count = 0;
  if (name.length === price.length && weight.length === name.length) {
      if (name !== null) {
          for(let i = 0; i < name.length; i++){
              var obj = name[i] + price[i] + weight[i];
              arr.push(obj)
          }

          // var arrList = arr.map(v => v[''])
  
          for (let char of arr) {
              charObj[char] = charObj[char] + 1 || 1
          }
  
          // return charObj
          count = 0;
          for(let i in charObj){
              if (charObj[i] > 1)
                  count += charObj[i] - 1   
          }
      }
      console.info(charObj)
  }
  return count;
}

console.info(a(name, price, weight))
