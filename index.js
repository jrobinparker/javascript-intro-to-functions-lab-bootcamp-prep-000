function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(shout) {
  shout = "hello"
  shout.toUpperCase
  shout.spyOn
  console.log(shout)
}

function logWhisper(whisper) {
  
}

describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})

describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})

function sayHiToGrandma(greeting) {
  if (greeting === "HELLO") {
    return "YES INDEED!"
  } else if (greeting === "hello") {
    return "I can\'t hear you!"
  } else if (greeting === "I love you, Grandma.") {
    return "I love you, too."
  }
}