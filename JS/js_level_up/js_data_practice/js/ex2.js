import _ from 'lodash'

const usersA = [
  { userId: '1', name: 'CHAN' },
  { userId: '2', name: 'Seock'}
]
const usersB = [
  { userId: '1', name: 'CHAN' },
  { userId: '3', name: 'Joo' },
]
const usersC = usersA.concat(usersB)
console.log('concat', usersC) 
console.log('uniqBy', _.uniqBy(usersC, 'userId')) 

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)

console.log('----')

const users = [
  { userId: '1', name: 'CHAN' },
  { userId: '2', name: 'Seock' },
  { userId: '3', name: 'Joo' },
  { userId: '4', name: 'Yun' },
  { userId: '5', name: 'Min' },
]

const foundUser = _.find(users, { name: 'Joo' })
const foundUserIndex = _.findIndex(users, { name: 'Joo' })
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'CHAN' })
console.log(users)