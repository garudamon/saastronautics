<template>
  <div>
    <LazyDashboardTopBar mascot="gift" :input="true" />
    <div class="modal fade show" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel" aria-modal="true" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLiveLabel">{{action.type}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Woohoo, you're reading this text in a modal!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div class="table-fixed mt-4">
      <table>
        <thead>
          <tr>
            <th class="text-uppercase text-secondary" colspan="2">deal name</th>
            <th class="text-uppercase text-secondary" width="180"></th>
            <th class="text-uppercase text-secondary" width="185">purchase date</th>
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
            <td>
              <button
                class="btn btn-info btn-sm"
                @click="toggleCode(key)"
              >{{`${item.show?'Hide':'Show'} ${item.quantity} ${item.quantity>1?'codes':'code'}`}}</button>
              <ul v-show="item.show" class="list-unstyled pt-2">
                <ul>
                  <li v-for="license in item.lincecode" :key="license._id">{{license.code}}</li>
                </ul>
              </ul>
            </td>
            <td>{{$formattedDate(item.mycartcreatedat)}}</td>
            <td>
              <span
                :class="{'badge':true, 'badge-secondary':item.status!=1, 'badge-success':item.status==1}"
              >{{item.status==1?'active':'inactive'}}</span>
            </td>
            <td>{{$formattedMoney(item.subtotal)}}</td>
            <td>
              <DashboardMoreAction :onClick="selectData" :data="item" />
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
  name: 'MyDeals',
  head: () => ({
    titleTemplate: 'My Deals - %s'
  }),
  data() {
    return {
      items: [],
      action: {
        type: '',
        selectedDeal: {}
      }
    }
  },
  methods: {
    selectData(type, selectedDeal) {
      this.action = {...this.action, type, selectedDeal}
    },
    getData() {
      this.$axios.get(`/product/mydeals?limit=25&skip=0`).then(res => {
        let {
          data: { success, data }
        } = res
        if (success) this.items = [...data]
      })
    },
    toggleCode(key) {
      let finding = this.items
      finding[key]['show'] = finding[key]['show'] ? !finding[key]['show'] : true
      this.items = [...finding]
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
          button {
            font-size: 0.6rem;
          }
          ul {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
</style>