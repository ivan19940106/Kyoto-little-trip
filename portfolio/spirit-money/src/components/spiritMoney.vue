<template>
  <div class="spirit-money" v-for="page in pages" :key="page" @click="fade">
    <div class="image"></div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'spiritMoney',
  props: {
    mtype: String,
    mindex: Number,
    gindex: Number
  },
  data() {
    return {
      pages: 10,
      daibyaku: {name: '大百壽金', size: {width: '100px', height: '250px'}, image: {'background-image': 'url(../assets/images/jukin.jpg)', border: '8px solid #D1104C'}},
      jukin: {name: '壽金', size: {width: '200px', height: '150px'}, image: {'background-image': 'url(/img/jukin.eb070586.jpg)', border: '15px solid #D1104C'}},
      karikin: {name: '刈金', size: {width: '180px', height: '135px'}, image: {'background-image': 'radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #9f7928 62.5%, #8A6E2F 100%);', border: '15px solid #FF8C00'}},
      fukukin: {name: '福金', size: {width: '150px', height: '112.5px'}, image: {'background-image': 'radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #9f7928 62.5%, #8A6E2F 100%);', border: '15px solid #FF8C00'}},
      daigin: {name: '大銀紙', size: {width: '180px', height: '135px'}, image: {'background-image': 'radial-gradient(ellipse farthest-corner at right bottom, #D3D3D3 0%, #C0C0C0 8%, #A9A9A9 30%, #9c9c9c 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #D3D3D3 8%, #C0C0C0 25%, #A9A9A9 62.5%, #9c9c9c 100%);', border: '15px solid #FF8C00'}},
      kogin: {name: '小銀紙', size: {width: '150px', height: '112.5px'}, image: {'background-image': 'radial-gradient(ellipse farthest-corner at right bottom, #D3D3D3 0%, #C0C0C0 8%, #A9A9A9 30%, #9c9c9c 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #D3D3D3 8%, #C0C0C0 25%, #A9A9A9 62.5%, #9c9c9c 100%);', border: '15px solid #FF8C00'}}
    }
  },
  methods: {
    fade () {
      var clicks = 0;
      $('.spirit-money').click(function(){
        if(clicks >= this.pages-1){
            clicks = this.pages-1
        } else {
            $(this).eq(clicks).fadeOut();
            clicks ++;
        }
      });
    }
  },
  mounted () {
    // arrange spirit-money
    for(var i=0;i<this.pages;i++){
      var top = 325/2.3-i*2;
      var width = 200-i*2;
      var z = -1*i;
      for(var j=0;j<$('.money-container').length;j++){
        $('.money-container').eq(j).find('.spirit-money').eq(i).css({
          top: top+'px',
          width: width+'px',
          'z-index': this.pages+z
        });
      }
    }

    // replace image according to mtype
    var type = this.mtype;
    var gindex = this.gindex;
    var mindex = this.mindex;

    switch(type){
      case 'daibyaku':
        for(var k=0;k<this.pages;k++){
          $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.image').eq(k).css(this.daibyaku.image);
          $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.spirit-money').eq(k).css(this.daibyaku.size);
          // var top = 325/2.3-k*2;
          // var width = this.daibyaku.size.width-k*2;
          // var z = -1*k;
          // $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.spirit-money').eq(k).css({
          //   top: top+'px',
          //   width: width+'px',
          //   'z-index': this.pages+z
          // });
        }
      break;

      case 'jukin':
        for(var k=0;k<this.pages;k++){
          $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.image').eq(k).css(this.jukin.image);
          $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.spirit-money').eq(k).css(this.jukin.size);
        }
      break;

      case 'karikin':
        for(var k=0;k<this.pages;k++){
          $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.image').eq(k).css(this.karikin.image);console.log(this.karikin.image);
          $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.spirit-money').eq(k).css(this.karikin.size);
        }
      break;

      case 'fukukin':
        for(var k=0;k<this.pages;k++){
          $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.image').eq(k).css(this.fukukin.image);
          $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.spirit-money').eq(k).css(this.fukukin.size);
        }
      break;

      case 'daigin':
        for(var k=0;k<this.pages;k++){
          $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.image').eq(k).css(this.daigin.image);
          $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.spirit-money').eq(k).css(this.daigin.size);
        }
      break;

      case 'kogin':
        for(var k=0;k<this.pages;k++){
          $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.image').eq(k).css(this.kogin.image);
          $('.card-wrapper').eq(gindex).find('.money-container').eq(mindex).find('.spirit-money').eq(k).css(this.kogin.size);
        }
      break;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* spirit-money */
.spirit-money {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 150px;
  background-color: #C18D30;
  /* background-image: url(../assets/images/noise.png); */
  box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
}
.image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  border: 15px solid #D1104C;
  /* background-image: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #9f7928 62.5%, #8A6E2F 100%); */
  /* background-image: radial-gradient(ellipse farthest-corner at right bottom, #D3D3D3 0%, #C0C0C0 8%, #A9A9A9 30%, #9c9c9c 40%, transparent 80%),
                    radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #D3D3D3 8%, #C0C0C0 25%, #A9A9A9 62.5%, #9c9c9c 100%); */
  /* background-image: url(../assets/images/jukin.jpg); */
  background-size: cover;
  background-repeat: no-repeat;
}
@media(max-width: 768px){
  
}
</style>
