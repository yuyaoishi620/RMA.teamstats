

var leagueTable = new Vue({
  el: '#leagueTable',
  data: {
    items : null,
  },
  created: function() {
    this.getTable()
  },
  methods: {
    getTable: function() {
      var vm = this
      axios.get('https://api.football-data.org/v2/competitions/PD/standings?standingType=TOTAL', {headers: {"X-Auth-Token" : " f47008b183cf4a34a864f8cac2b34868 "}})
      .then(function(response) {
        console.log(response)
        vm.items = response.data.standings[0].table //各チームの順位表の総合データ
        for (var i = 0; i < 20; i++) {
          if (vm.items[i].team.id === 86) {
            vm.items[i].team.name = "レアル・マドリード"
          } else if (vm.items[i].team.id === 78) {
            vm.items[i].team.name = "アトレティコ・マドリード"
          } else if (vm.items[i].team.id === 81) {
            vm.items[i].team.name = "バルセロナ"
          } else if (vm.items[i].team.id === 559) {
            vm.items[i].team.name = "セビージャ"
          } else if (vm.items[i].team.id === 94) {
            vm.items[i].team.name = "ビジャレアル"
          } else if (vm.items[i].team.id === 92) {
            vm.items[i].team.name = "レアル・ソシエダ"
          } else if (vm.items[i].team.id === 90) {
            vm.items[i].team.name = "レアル・ベティス"
          } else if (vm.items[i].team.id === 83) {
            vm.items[i].team.name = "グラナダ"
          } else if (vm.items[i].team.id === 88) {
            vm.items[i].team.name = "レバンテ"
          } else if (vm.items[i].team.id === 558) {
            vm.items[i].team.name = "セルタ・デ・ビーゴ"
          } else if (vm.items[i].team.id === 77) {
            vm.items[i].team.name = "アスレティック・ビルバオ"
          } else if (vm.items[i].team.id === 82) {
            vm.items[i].team.name = "ヘタフェ"
          } else if (vm.items[i].team.id === 264) {
            vm.items[i].team.name = "カディス"
          } else if (vm.items[i].team.id === 95) {
            vm.items[i].team.name = "バレンシア"
          } else if (vm.items[i].team.id === 263) {
            vm.items[i].team.name = "アラベス"
          } else if (vm.items[i].team.id === 278) {
            vm.items[i].team.name = "エイバル"
          } else if (vm.items[i].team.id === 250) {
            vm.items[i].team.name = "レアル・バジャドリード"
          } else if (vm.items[i].team.id === 79) {
            vm.items[i].team.name = "オサスナ"
          } else if (vm.items[i].team.id === 285) {
            vm.items[i].team.name = "エルチェ"
          } else if (vm.items[i].team.id === 299) {
            vm.items[i].team.name = "ウエスカ"
          }
        }
      })
    }
  }
})

var scheduled = new Vue({
  el: '#scheduled',
  data: {
    items: null
  },
  created: function() {
    this.getScheduled()
  },
  methods: {
    getScheduled: function() {
      var vm = this
      axios.get('https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED', {headers: {"X-Auth-Token" : " f47008b183cf4a34a864f8cac2b34868 "}})
      .then(function(response) {
        console.log(response)
        vm.items = response.data.matches //1試合ごとの総合データ
        for (var i = 0; i < 20; i++) {
          // もともとのオブジェクトにクラブロゴの画像を表示するためのURLがなかったため、新しくオブジェクトを作成。さらにチームid番号とURLと紐付けるために文字列を連結した。
          vm.items[i].awayTeam.crestUrl = "https://crests.football-data.org/"+ vm.items[i].awayTeam.id + ".svg"
          vm.items[i].homeTeam.crestUrl = "https://crests.football-data.org/"+ vm.items[i].homeTeam.id + ".svg"
          if (vm.items[i].awayTeam.id === 86) {
            vm.items[i].awayTeam.name = 'レアル・マドリード'
          } else if (vm.items[i].awayTeam.id === 82) {
            vm.items[i].awayTeam.name = 'ヘタフェ'
          } else if (vm.items[i].awayTeam.id === 95) {
            vm.items[i].awayTeam.name = 'バレンシア'
          } else if (vm.items[i].awayTeam.id === 92) {
            vm.items[i].awayTeam.name = 'レアル・ソシエダ'
          } else if (vm.items[i].awayTeam.id === 285) {
            vm.items[i].awayTeam.name = 'エルチェ'
          } else if (vm.items[i].awayTeam.id === 102) {
            vm.items[i].awayTeam.name = 'アタランタ'
          } else if (vm.items[i].awayTeam.id === 278) {
            vm.items[i].awayTeam.name = 'エイバル'
          } else if (vm.items[i].awayTeam.id === 81) {
            vm.items[i].awayTeam.name = 'バルセロナ'
          } else if (vm.items[i].awayTeam.id === 90) {
            vm.items[i].awayTeam.name = 'レアル・ベティス'
          } else if (vm.items[i].awayTeam.id === 79) {
            vm.items[i].awayTeam.name = 'オサスナ'
          } else if (vm.items[i].awayTeam.id === 559) {
            vm.items[i].awayTeam.name = 'セビージャ'
          } else if (vm.items[i].awayTeam.id === 94) {
            vm.items[i].awayTeam.name = 'ビジャレアル'
          }



          if (vm.items[i].homeTeam.id === 86) {
            vm.items[i].homeTeam.name = 'レアル・マドリード'
          } else if (vm.items[i].homeTeam.id === 102) {
            vm.items[i].homeTeam.name = 'アタランタ'
          } else if (vm.items[i].homeTeam.id === 250) {
            vm.items[i].homeTeam.name = 'レアル・バジャドリード'
          } else if (vm.items[i].homeTeam.id === 78) {
            vm.items[i].homeTeam.name = 'アトレティコ・マドリード'
          } else if (vm.items[i].homeTeam.id === 558) {
            vm.items[i].homeTeam.name = 'セルタ・デ・ビーゴ'
          } else if (vm.items[i].homeTeam.id === 264) {
            vm.items[i].homeTeam.name = 'カディス'
          } else if (vm.items[i].homeTeam.id === 82) {
            vm.items[i].homeTeam.name = 'ヘタフェ'
          } else if (vm.items[i].homeTeam.id === 83) {
            vm.items[i].homeTeam.name = 'グラナダ'
          } else if (vm.items[i].homeTeam.id === 77) {
            vm.items[i].homeTeam.name = 'アスレティック・ビルバオ'
          }


          
          
        }
      })
    }
  }
})

