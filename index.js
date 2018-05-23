var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return 'Welcome, '+name+'. You are number '+katzDeliLine.length+' in line.'
}

function nowServing(katzDeliLine) {

  //var name = []

  if (katzDeliLine.length == 0) {
    return 'There is nobody waiting to be served!'

  }
  else {
  //name = katzDeliLine[0]
  return 'Currently serving '+katzDeliLine[0]+'.'
  katzDeliLine.shift()
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
