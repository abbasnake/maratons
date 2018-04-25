
const getKeyValues = (data, key) => {
  let array = []
  for (let i = 0; i < data.length; i++) {
    array.push(data[i][key])
  }
  return array
}

const getCurrentTestKeyValue = (data, id, key) => {
  let value = null
  if (!id) {
    value = ''
  } else {
    let testIndex = findCurrentTestIndex(data, id)
    value = data[testIndex][key]
  }
  return value
}

const findCurrentTestIndex = (data, id) => {
  let index = null
  for (let i = 0; i < data.length; i++) {
    if (id === data[i].id) {
      index = i
      i = data.length // when value found, end loop
    }
  }
  return index
}

const getScore = (userAnswers) => {
  let correctAnswers = 0
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i].correctAnswer === userAnswers[i].userAnswer) {
      correctAnswers++
    }
  }
  return [correctAnswers, userAnswers.length]
}

export {
  getKeyValues,
  getCurrentTestKeyValue,
  getScore
}
