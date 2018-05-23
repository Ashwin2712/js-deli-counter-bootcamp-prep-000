var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return 'Welcome, '+name+'. You are number '+katzDeliLine.length+' in line.'
}

function nowServing() {

  var name = []

  if (katzDeliLine.length > 0) {
    name = katzDeliLine[0]
    katzDeliLine.shift()
    return 'Currently serving '+name+'.'

  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine() {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  }
  else {
    return 'The line is currently: '+katzDeliLine.index+'. '+katzDeliLine[katzDeliLine.index]
  }
}
