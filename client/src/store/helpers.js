
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

export {
  getKeyValues,
  getCurrentTestKeyValue
}
