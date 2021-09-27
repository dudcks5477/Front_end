// this

/*
const chan = {
  name: 'Chan',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
chan.normal()
chan.arrow()

const seock = {
  name: 'Seock',
  normal: chan.normal,
  arrow: chan.arrow
}
seock.normal()
seock.arrow()
*/

function User(name) {
  this.name = name
}
User.prototype.normal = function () {
  console.log(this.name)
}
User.prototype.arrow = () => {
  console.log(this.name)
}

const chan = new User('Chan')

chan.normal()
chan.arrow()

const timer = {
  name: 'Chan!!',
  timeout: function () {
    // setTimeout(함수, 시간)
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout()