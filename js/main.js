function device (e) {
  
}

var obj = {
  name: '张三',
  age: 15,
  hasMoney: false
}

// 浅拷贝
function clone (obj) {
  var temp = {}
  for (var key in obj) {
    temp[key] = obj[key]
  }
  return temp
}

// 深拷贝
function deepClone (obj) {
  var temp = {}
  for (var key in obj) {
    var value = obj[key]
    if (Object.prototype.toString.call(value) === '[object Object]') {
      temp[key] = clone(value)
    } else if (Object.prototype.toString.call(value) === '[object Array]') {
      temp[key] = value.map(item => clone(value))
    } else if (Object.prototype.toString.call(value) === '[object Function]') {
      temp[key] = value.bind(temp)
    } else {
      temp[key] = value
    }
  }
  return temp
}

// 数组拷贝
newArr = arr.map(item => {
  return {
    ...item,
    isActive: false
  }
})