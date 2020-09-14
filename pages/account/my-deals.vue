<template>
  <div>
    <LazyDashboardTopBar mascot="gift" :input="true" />
    <div class="table-fixed mt-4">
      <table>
        <thead>
          <tr>
            <th class="text-uppercase text-secondary" colspan="2">deal name</th>
            <th class="text-uppercase text-secondary" width="165">purchase date</th>
            <th class="text-uppercase text-secondary" width="100">status</th>
            <th class="text-uppercase text-secondary" width="100">total</th>
            <th class="text-uppercase text-secondary"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in items" :key="key">
            <td width="250">
              <img :src="$getImage(item.id)" alt />
            </td>
            <td>
              <h6 class="font-weight-bold">{{item.name}}</h6>
              <h6 class="font-weight-bold text-red">{{$formattedMoney(item.price)}}</h6>
              <LazyRating size="sm" :value="item.rating" />
            </td>
            <td>{{$formattedDate(item.mycartcreatedat)}}</td>
            <td>
              <span
                :class="{'badge':true, 'badge-secondary':item.status!=1, 'badge-success':item.status==1}"
              >{{item.status==1?'active':'inactive'}}</span>
            </td>
            <td>{{$formattedMoney(item.subtotal)}}</td>
            <td>
              <DashboardMoreAction />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'account',
  data() {
    return {
      items: []
    }
  },
  methods: {
    getData() {
      this.$axios.get(`/product/mydeals?limit=25&skip=0`).then(res => {
        let {
          data: { success, data }
        } = res
        if (success) this.items = [...data]
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.table-fixed {
  overflow-y: auto;
  height: 550px;
  table {
    border-collapse: separate;
    border-spacing: 0 15px;
    width: 100%;
    thead th {
      position: sticky;
      top: 0;
      background: #f5f4f8;
      z-index: 3;
    }
    tbody {
      tr {
        width: 100%;
        td {
          margin-bottom: 10px;
          background-color: white;
          padding: 10px;
          font-weight: 300;
          &:first-child {
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
          }
          &:last-child {
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
          }
        }
      }
    }
  }
}
</style>