<template>
  <div class="row">
    <div class="col-12 pb-2">
      <h4>Payment</h4>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-header">Registered Account</div>
        <div class="card-body">
          <table class="table table-borderless" v-if="items.length > 0">
            <thead>
              <tr>
                <th scope="col">Method</th>
                <th scope="col">Expired at</th>
                <th scope="col" width="90"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in items" :key="idx">
                <td scope="col">{{`${item.brand} ending in ${item.lastFour}`}}</td>
                <td
                  scope="col"
                >{{`${item.month.toString().padStart(2, '0')}/${item.year.toString().slice(2)}`}}</td>
                <td scope="col" widtd="90">
                  <button class="btn btn-danger btn-sm" @click="deleteMethod(item)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <p class="text-center font-italic" v-else>Your cart empty</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'account',
  data: () => ({
    items: []
  }),
  methods: {
    getData() {
      this.$axios.get('/payment/mystripepayment').then(res => {
        let {
          data: { success, data, message }
        } = res
        if (success) this.items = [...data]
        else this.$swal('Oopss!', message, 'failed')
      })
    },
    deleteMethod(item) {
      let _this = this
      this.$swal({
        title: 'Sure?',
        text: `Are you sure to remove ${item.lastFour} from your account?`,
        icon: 'warning',
        buttons: ['No, cancel it!', 'Yes, I am sure!'],
        dangerMode: true
      }).then(function(isConfirm) {
        if (isConfirm) {
          _this.$axios
            .delete(`/payment/detachmystripepayment/${item.stripePaymentID}`)
            .then(response => {
              let {
                data: { success, message }
              } = response
              if (success) {
                _this
                  .$swal(
                    'Success!',
                    `${item.lastFour} deleted successfully`,
                    'success'
                  )
                  .then(() => {
                    _this.getData()
                  })
              } else {
                _this.$swal('Oops!', `${message}`, 'error')
              }
            })
        }
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style>
</style>