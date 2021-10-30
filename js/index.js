new Vue ({
  el: "#app",
  data: {
    ok: true,
    ok1: false,
    ok2: true,
    maybeOK: true
  },
})

new Vue({
  el: '#template',
  data: {
    ok: true,
  },
})

new Vue({
  el: '#show',
  data: {
    ok: true
  },
})

new Vue({
  el: '#for',
  data: {
    fruits: ['りんご','バナナ','いちご'],
    sports: ['サッカー','バスケ','テニス'],
    object :{
      firstName: '太郎',
      lastName: '田中',
      age: '20',
    },
  },
  methods: {
    remove : function() {
      // 先頭を削除するメソッド
      this.fruits.shift()
    }
  }
})