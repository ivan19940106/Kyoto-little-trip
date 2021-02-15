<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      燒金紙一定有順序，不同神明有金有銀，<br>
      燃燒前應詳閱
      <a href="https://paipai.blog" target="_blank" rel="noopener">拜拜基本款 ─ pài-pài</a> 與金紙備忘錄。
    </p>
    <div class="god-container" v-for="(god, gindex) in gods" :key="god">
      <h3>{{ god['name'] }}</h3>
        <ul class="card-wrapper">
          <li class="card" v-for="(money, mindex) in god['moneyInfo']" :key="money">
            <h4 class="money-title">{{ money.moneyName }}</h4>
            <div class="money-container">
              <spiritMoney :mtype="money.moneyType" :gindex="gindex" :mindex="mindex"></spiritMoney>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import spiritMoney from './spiritMoney.vue'

export default {
  name: 'HelloWorld',
  components: {
    spiritMoney
  },
  props: {
    msg: String
  },
  data() {
    return {
      gods: [
        {name: '神明', moneyInfo: [{moneyType: 'daibyaku', moneyName: '大百壽金'}, {moneyType: 'jukin', moneyName: '壽金'}, {moneyType: 'karikin', moneyName: '刈金'}, {moneyType: 'fukukin', moneyName: '福金'}]},
        {name: '公媽', moneyInfo: [{moneyType: 'karikin', moneyName: '刈金'}, {moneyType: 'daigin', moneyName: '大銀紙'}, {moneyType: 'kogin', moneyName: '小銀紙'}]},
        {name: '地基主', moneyInfo: [{moneyType: 'karikin', moneyName: '刈金'}, {moneyType: 'daigin', moneyName: '大銀紙'}, {moneyType: 'kogin', moneyName: '小銀紙'}]}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  font-size: 24px;
}
h4 {
  margin: 0px 0 0;
  font-size: 18px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #9F3E3D;
}

/* layout */
.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 0;
}
.card {
  display: inline-block;
  width: 25%;
  height: 300px;
}
.money-container {
  display: block;
  position: relative;
  height: calc(100% - 25px);
}
@media(max-width: 768px){
  p {
    font-size: 12px;
  }
  .card-wrapper {
    display: block;
    width: 100%;
  }
  .card {
    margin: 20px 0;
    display: block;
    width: 100%;
  }
}
</style>
