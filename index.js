function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  string.toUpperCase()
  console.log(string)
}


function sayHiToGrandma(greeting) {
  if (greeting === "HELLO") {
    return "YES INDEED!"
  } else if (greeting === "hello") {
    return "I can\'t hear you!"
  } else if (greeting === "I love you, Grandma.") {
    return "I love you, too."
  }
}