function rightBrackets(str) {
  const result = []
  const dict = {
    '}': '{',
    ']': '[',
    ')': '('
  }

  for (let i = 0; i < str.length; i++) {
    const curChar = str[i]
    if (isOpenBrc(curChar)) {
      result.push(curChar)
    } else if (dict[curChar] !== result.pop()) {
       return false
    }
  }


  return result.length === 0
}

function isOpenBrc(char) {
  return ['{', '[', '('].includes(char)
}

console.log(rightBrackets('()'))
console.log(rightBrackets('([[]])'))
console.log(rightBrackets('({[]})'))
console.log(rightBrackets('([)]'))
console.log(rightBrackets('{'))
