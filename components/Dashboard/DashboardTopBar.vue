<template>
  <div class="dashboard-top-bar">
    <div :class="{'background-gift': true, 'giving': mascot == 'gift'}"></div>
    <div class="background-paw"></div>
    <div class="content h-100 d-flex flex-column align-items-center justify-content-center">
      <h3 class="font-weight-bold mb-4">Welcome, John!</h3>
      <div class="input-group" v-if="input">
        <input type="text" class="form-control pl-3" placeholder="Search Product" />
        <div class="input-group-append">
          <span class="input-group-text bg-transparent">
            <i class="fa fa-search"></i>
          </span>
        </div>
      </div>
      <p v-else>Cupcake ipsum sit dolor candy and coffee</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mascot: {
      default: 'react-out'
    },
    input: {
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-top-bar {
  height: 225px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  .input-group {
    border-radius: 33px;
    background-color: white;
    overflow: hidden;
    border: none;
    max-width: 450px;
    input {
      border: none;
      outline: none;
    }
    .input-group-append {
      border: none;
      cursor: pointer;
      .input-group-text {
        border: none;
        .fa {
          color: var(--primary-color-red);
        }
      }
    }
  }
  .background-gift {
    width: 634px;
    background: transparent url('../../assets/images/react-out-half.png') 0% 0%
      no-repeat padding-box;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 1;
    &.giving {
      background: transparent url('../../assets/images/gift-half.png') 0% 0%;
    }
  }
  .background-paw {
    width: 634px;
    background: transparent url('../../assets/images/paw-half.png') 0% 0%
      no-repeat padding-box;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
  }
  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background: rgba($color: #4b028c, $alpha: 0.08);
  }
}
</style>