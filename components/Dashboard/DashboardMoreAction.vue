<template>
  <div class="more-actions">
    <span
      class="fa fa-2x fa-ellipsis-v text-red more-actions-trigger"
      @click="show = !show"
    ></span>
    <transition name="slide-fade">
      <ul v-if="show" class="more-actions-list">
        <li class="text-left">
          <a href="#" @click="clicked('redeem')">
            <span class="fa fa-fw fa-trophy text-red"></span>
            Mark As Redeem
          </a>
        </li>
        <li class="text-left">
          <a href="#" @click="clicked('refund')">
            <span class="fa fa-fw fa-long-arrow-right text-red"></span>
            Refund
          </a>
        </li>
        <li class="text-left">
          <a href="#" @click="clicked('redeemed')">
            <span class="fa fa-fw fa-check-circle text-red"></span>
            Redeemed
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  props: ['data', 'onClick'],
  methods: {
    clicked(type) {
      this.onClick(type, this.data)
    }
  },
  mounted() {
    window.addEventListener('click', e => {
      if (
        document.querySelector('.more-actions-list') &&
        !document.querySelector('.more-actions-list').contains(e.target) &&
        !e.target.classList.contains('more-actions-trigger') &&
        !e.target.classList.contains('external-link')
      ) {
        e.preventDefault()
        this.show = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.more-actions {
  position: relative;
  .fa-ellipsis-v {
    cursor: pointer;
  }
  ul {
    list-style: none;
    margin: 0;
    position: absolute;
    padding: 0;
    left: -275%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
    background: white;
    border-radius: 10px;
    font-size: 14px;
    width: 180px;
    z-index: 10;
    a {
      color: rgba(0, 0, 0, 0.33);
      padding: 5px 10px;
      display: block;
      border-bottom: solid thin rgba(0, 0, 0, 0.05);
      text-decoration: none;
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

@media only screen and (max-width: 1280px) {
  .more-actions {
    ul {
      left: -180px;
    }
  }
}
</style>