<template>
  <div class="dropdown">
    <div class="valueDr_Down">
      <img class="kg" :class="{ kgactive: this.flagstatus }" src="@/iconsHeader/Kyrgyzstan.png" />
      <img :class="{ russ: this.flagstatus }" src="@/iconsHeader/Russia.png" />
      <span>{{ this.nameLang }}</span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="20" height="20" fill="url(#pattern0)" fill-opacity="0.5" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_673_75" transform="scale(0.00195312)" />
          </pattern>
          <image id="image0_673_75" width="512" height="512"
            xlink:href="data:image/png;base64,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" />
        </defs>
      </svg>
    </div>
    <div class="contDr_Down">
      <div class="lang" :class="{ruLang : this.flagstatus === false}" @click="russia">
        <img src="@/iconsHeader/Russia.png">
        <span>(Русс) Русский</span>
      </div>
      <div class="lang" :class="{kgzLang: this.flagstatus}" @click="kgz">
        <img src="@/iconsHeader/Kyrgyzstan.png">
        <span>(Кыр) Кыргызча</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flagstatus: false,
      nameLang: 'Русс',
      // для изменения языка
      statuslang: false
    }

  },
  methods: {
    russia() {
      this.nameLang = 'Русс'
      this.flagstatus = false
      this.statuslang = false
    },
    kgz() {
      this.nameLang = ''
      this.nameLang = 'Кыр'
      this.flagstatus = true
      this.statuslang = true
    }
  }

}
</script>

<style lang="scss" scoped>

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.kgzLang{
  background-color:#306358;

}
.ruLang{
  background-color :#306358;
}
.russ {
  display: none;
}

.kg {
  display: none;
}

.kgactive {
  display: block;
}

.dropdown {
  position: relative;

  .valueDr_Down {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 6px;
    margin-right: 10px;
    border: 0.5px solid #000000;
    border-radius: 8px;
    transition:all 300ms ;

    &:hover {
      border: 1px solid  #ffffff;
      span{
        color: #ffffff;
      }
      svg{
        fill: #000000;
      }
    }
  }
}

.contDr_Down {
  display: none;
  position: absolute;
  width: 200px;
  text-align: start;
  padding: 10px 10px;
  background: #848484;
  border-radius: 10px;
  margin-top: 3px;
  right: -20px;
  -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6);
}

span {
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-left: 10px;
}

.dropdown:hover .contDr_Down {
  display: block;
}
.lang {
  transition: all 300ms;
  width: 170px;
  text-align: center;
  padding: 10px 0;
  border-radius: 10px;

  &:hover {
    span{
      color: #ffffff;
    }
    background-color:#408448;  
  }
  &:active{
    background-color: #4d3737c0;
  }
}
</style>