const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const col = collection.isArray ? collection : Object.values(collection)
      col.map(elem => callback(elem))
      return collection
    },

    map: function(collection, callback) {
      let col = collection.isArray ? collection : Object.values(collection)
      col = col.map(elem => callback(elem))
      return col
    },

    reduce: function(collection = [], callback = () => {}, acc) {
      let col = collection.slice(0)
      if (!acc){
        acc = col[0]
        col = col.slice(1)
      }
      for (let i = 0;i < col.length;i++){
        acc = callback(acc, col[i], col)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length ; i++){
        if (predicate(collection[i]))
          return collection[i]
      }
    },

    filter: function(col, predicate) {
      const ret = []
      for (let i = 0; i < col.length ; i++){
        if (predicate(col[i]))
          ret.push(col[i])
      }
      return ret
    },

    size: function(collection) {
      return collection.isArray ? collection.length : Object.values(collection).length
    },

    first: function(array, n) {
      if (!n)
        return array[0]
      return array.slice(0,n)
    },

    last: function(array, n) {
      if (!n)
        return array[array.length-1]
      return array.slice(array.length-n, array.length)
    },

    compact: function(array) {
      return array.filter( val => !!val === true )
    },

    sortBy: function(array, callback) {
      const arr = array.slice(0)
      arr.sort((a, b) => callback(a) - callback(b))    
      return arr  
    },

    flatten: function(array, shallow) {
      if (!shallow) {
        return array.flat(Infinity)
      }
      return array.flat()

    },

    uniq: function(array, isSorted, callback) {
      let arr = array
      if (!!callback){
        arr = arr.map(elem => callback(elem))
      }
      if (!isSorted){
        arr.sort()
      }
      const ret = []
      for (let i = 0; i<arr.length; i++){
        if (!ret.includes(arr[i])){
          ret.push(arr[i])
        }
      }
      return ret
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      const keys = Object.keys(object)
      const ret = keys.filter(elem => typeof object[elem] === 'function').sort()
      return ret
    }
  }
})()

fi.libraryMethod()
