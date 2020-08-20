<template>
  <div class="more-actions">
    <span class="fa fa-2x fa-ellipsis-v text-red" @click="show = !show"></span>
    <transition name="slide-fade">
      <ul v-if="show">
        <li>
          <nuxt-link to>
            <span class="fa fa-fw fa-trophy text-red"></span>
            Redeem
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to>
            <span class="fa fa-fw fa-long-arrow-right text-red"></span>
            Refund
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to>
            <span class="fa fa-fw fa-check-circle text-red"></span>
            Mark as Redeemed
          </nuxt-link>
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
  mounted() {
    window.addEventListener('click', function(e) {
      if (!document.querySelector('.more-actions').contains(e.target)) {
        console.log('Clicked outside the box')
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
    left: -140px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
    background: white;
    border-radius: 10px;
    font-size: 12px;
    width: 150px;
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
</style>