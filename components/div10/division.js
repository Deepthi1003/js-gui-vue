const division1 = (x, y) => { return x / y }

const div = new Vue({
  el: '#div',
  data: {
    first: 6,
    second: 2
  },
  computed: {
    division: function () {
      const i = parseInt(this.first)
      const j = parseInt(this.second)
      return `The average task per developer is ${division1(i, j)}.`
    }
  }
})