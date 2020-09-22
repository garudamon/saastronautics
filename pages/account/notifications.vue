<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <!-- <div class="card-header">Registered Method</div> -->
        <div class="card-body">
          <div class="pl-2">
            <p class="h4 mb-4">Notifications</p>
          </div>
          <p class="text-center font-italic">You have No Notification</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notifications',
  layout: 'account',
  head: () => ({
    titleTemplate: 'Notifications - %s'
  }),
  data: () => ({
    items: []
  }),
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-color: white !important;
}
</style>