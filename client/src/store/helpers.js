
const getKeyValues = (data, key) => {
  let array = []
  for (let i = 0; i < data.length; i++) {
    array.push(data[i][key])
  }
  return array
}

const getCurrentTestDescription = (data, id) => {
  let description = ''
  /*
  ** If id is set then loop through data
  ** and mach id's, the correct ones description
  ** is set to the let above. If not, return
  ** 'no id set'
  */
  if (id) {
    for (let i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        description = data[i].description
        i = data.length // if description found set i high to exit loop
      }
    }
  } else {
    description = 'no id set'
  }
  return description
}

export {
  getKeyValues,
  getCurrentTestDescription
}
