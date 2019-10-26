const detail = 'ini string'
const numnodeber = 123
const bool = '1'
const object = {nama:'adit',umur:3}
const array = [1,2,3,4]
const array1 = ['a','b','c','d']
const array2 = [
  {nama:'adit',umur:3},
  {nama:'kancil',umur:5},
  {nama:'novan',umur:1}
]
const json = {
  status:'success',
  result: {
    person: {
      name:'user',
      id:1,
      email:'email@gmail.com',
      hobbies:['berenang','makan']
    }
  }
}

function namaFuction(){
  return 'ini text string'
}

const fungsiKe2 = () => {
  console.log('ini arrow function')
}

// const itemIni = namaFuction()

console.log(json.result)