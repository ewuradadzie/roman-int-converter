const value_map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function convertRomToInt(roman) {
    let roman_chars = roman.split('');
    let integer = 0;

    for (char in roman_chars) {
        let current_char = +value_map[roman_chars[char]];
        let next_char = +value_map[roman_chars[+char+1]];
        if (next_char && (current_char < next_char)) {
            integer -= current_char;
        } else {
            integer+=current_char;
        }
    }
    console.log(`The integer equivalent of ${roman} is ${integer}!`)
}


// function breakDownNumber(num){
//     var nums = num.toString().split('');
//     var len = nums.length;
//     var answer = nums.map(function(n, i) {
//       return n + (Array(len - i - 1).fill(0)).join('');
//     });
//       return answer.map(Number).filter(function(n) {return n !== 0;});
//   }

// function findClosestNumber(num) {
//     var roman_values = Object.values(value_map)
//     for (value in roman_values) {

//     }
// }

// function convertIntToRom(integer) {
//     let integer_parts = breakDownNumber(integer);
//     let roman = '';

//     for (num of integer_parts) {
//         // console.log('num', num);
//         let value_index = Object.values(value_map).indexOf(num);
//         // console.log('value index', value_index)
//         if (value_index !== -1) {
//             let roman_value = Object.keys(value_map)[value_index]
//             roman = roman.concat(roman_value)
//             // console.log('roman',roman)
//         } else {

//         }
//     }
//     console.log(roman)
// }

convertRomToInt('XIV')
// convertIntToRom(100)

