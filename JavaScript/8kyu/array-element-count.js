/*
    Filter out all true values
*/


const bools = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

const sheepCount = (array) => {
    const filteredArray = array.filter(item => item === true)
    console.log(filteredArray.length)
}

sheepCount(bools)
