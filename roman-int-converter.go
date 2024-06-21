package main

import (
	"fmt"
	"strings"
)

var value_map = map[string]int{ "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }

func main() {
	convertRomanToInt("MCMXCIV")
}

func convertRomanToInt(roman string) {
	roman_chars := strings.Split(roman, "")
	var integer = 0
	for index := range roman_chars {
		var current_char = value_map[roman_chars[index]]

		// Check if next character exists and if it is greater than the current value
		if (index < len(roman_chars) - 1) && (current_char < value_map[roman_chars[index+1]]) {
			integer -= current_char
		} else {
			integer += current_char
		}
	}
	fmt.Println("The integer equivalent of", roman, "is", integer)
}