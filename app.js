// // const input = document.querySelector("#input")
// // const button = document.querySelector("#button")

// // button.addEventListener("click", (e) => {
// //   let inputValue = input.value.toString()
// //   idNumberValidator(inputValue);

// //   e.preventDefault()
// // }
// // )

// //! 2. TR National ID Validator

// const idNumberValidator = (id) => {
//   // if (id[0] == 0) {
//   //   alert("Tc 0 ile başlayamaz");
//   // } else {
//   //   //! 1.Adım Başlangıcı Tek Sayılı ve Çift Sayılı İndisleri Ayırdık
//   //   let id1 = id.toString().split("").splice(0,9)
//   //   let odd = [];
//   //   let even = [];
//   //   for (let i = 0; i < id1.length; i++) {
//   //     if (i % 2 == 0) {
//   //       odd.push(id1[i]);
//   //     } else {
//   //       even.push(id1[i]);
//   //     }
//   //   }
//   //   //! 1.Adım Bitişi
//   //   //! 2.Adım Başlangıcı Tek ve Çift Sayılı İndisleri Topladık
//   //   // sumOfOdd --------------
//   //   let sumOfOdd = 0;
//   //   for (let i = 0; i < odd.length; i++) {
//   //     sumOfOdd = sumOfOdd + Number(odd[i]);
//   //   }
//   //   // console.log(sumOfOdd);
//   //   // sumOfEven -------------
//   //   let sumOfEven = 0;
//   //   for (let i = 0; i < even.length; i++) {
//   //     sumOfEven = sumOfEven + Number(even[i]);
//   //   }
//   //   // console.log(sumOfEven);
//   //   //! 2.Adım Bitişi
//   //   //! 3.Adım Başlangıcı 10.Rakamı Bulduk
//   //   let subtract = sumOfOdd * 7 - sumOfEven;
//   //   subtract = subtract.toString().split("").at(-1);
//   //   let digit10nth = subtract;
//   //   // console.log(digit10nth, "10.basamak");
//   //   //! 3.Adım Bitişi
//   //   //! 4.Adım Başlangıcı Burada 11. Rakamı Bulucaz
//   //   let  digit11 = id.toString().split("").slice(0,10)
//   //   let sumOf10Digit = 0;
//   //   for (let i = 0; i < digit11.length; i++) {
//   //     sumOf10Digit = sumOf10Digit + Number(digit11[i]);
//   //   }
//   //   let digit11nth = sumOf10Digit.toString().split("").at(-1);
//   //   // console.log(digit11nth, "11.basamak");
//   //   //! 4.Adım Bitişi
//   //   //! Tc Validate
//   //   if(digit10nth == id[9] && digit11nth == id[10]  ){
//   //     console.log("Tc Doğru")
//   //   }else{
//   //     console.log("Tc Yanlış")
//   //   }
//   // }
// };

// //! ÖNEMLİ

// // const arr1 = ['a', 'b', 'c'];
// // const arr2 = ['b', 'c', 'a'];

// // let arr5 = {}
// // let arr6 = {}

// // console.log(arr5 == arr6)
// //! Dice
// // const dice = (repeat) => {
// //   for (let i = 0; i < repeat; i++) {
// //     let arr = ["one", "two", "three", "four", "five", "six"];
// //     let random1 = Math.floor(Math.random() * 6);
// //     let random2 = Math.floor(Math.random() * 6);
// //     console.log(`Dice ${i+1}: `, random1 < random2 ? `${random1}  ${random2}` : `${random2} ${random1}` );
// //   }
// // };

// // dice(12);

// //! Camel Case Formatter

// // const camelCaseFormatter = (str) => {
// //   const strSplitted = str.split(" ");
// //   let ltr = strSplitted.map((x,indis) => {
// //     if(indis === 0){
// //       return x.toLowerCase()
// //     }
// //   });
// //   ltr = ltr.join(" ")
// //   console.log(ltr);
// // };


// // let str = "yuSUF KAyMAz dsa";

// // camelCaseFormatter(str)


// function toCamelCase(str){
//   return str.split(' ').map(function(word,index){
//     if(index == 0){
//       return word.toLowerCase();
//     }
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }).join('');
// }
// // console.log(toCamelCase("java Script coDING "))



// const deneme = (x)  => {

// return x.split(" ").map((item,indis) => {

//     if(indis == 0 ){
//      return item.toLowerCase()
//     }

//     return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()

//   }).join(" ")
// }

// // console.log(deneme("jAVa Script coDING"))







const repeatedLetter = (str) => {
  console.log(str)
  
  console.log(str.split(" "))
  str.split(" ").forEach((word) => {

    console.log(word)

  });


}





// repeatedLetter(str1)

/* letterCount.js

  to test the solution open terminal and type following command
$ node letterCount.js

*/
function letterCount(str) {
  let count2 = 0;
  let count1 = 0;
  let greatestWord = "";
  let newArr = str.split(" ");
  for (const kelime of newArr) {
    for (const harf of kelime) {
      for (var i = 0; i < kelime.length; i++) {
        if (kelime[i] == harf) {
          count1++;
        }
      }
      if (count1 > count2) {
        count2 = count1;
        greatestWord = kelime;
        count1 = 0;
      } else {
        count1 = 0;
      }
    }
  }
  if (count2 >= 2) {
    return greatestWord;
  } else {
    return -1;
  }
}

let str1 = "Muhammed ali nasılsınız"

// console.log(letterCount(str1))



// let str2 ="merhaba nasılsınız arkadaşlar"

// let count1 = 0
// let newArr = str2.split(" ")
// console.log(newArr)
// for(let word of newArr){
//   for(let letter of word){
//     for(let i = 0; i<word.length;i++){
//       if(word[i] == letter){
//           count1++
//       }
//     }
//   }
// }

// console.log(count1)



// let str2 = "merhaba arkadaşlar nasılsınız"
// let count1 = 0

// // console.log(str2)

// for(let word of str2){
//   for(let letter of word){

//     for(let i = 0; i<word.length;i++){
//       if(word[i] == letter){
//         count1++
//       }
//    }
//   }
// }

// console.log(count1)


console.log('I');
setTimeout(() => {
 console.log('love');
}, 0);
console.log('Javascript!');