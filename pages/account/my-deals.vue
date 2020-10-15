<template>
  <div>
    <LazyDashboardTopBar
      mascot="gift"
      :input="true"
      :name="profile.customer && profile.customer.firstName"
    />
    <div
      class="modal fade show"
      id="redeemRefund"
      tabindex="-1"
      aria-labelledby="redeemRefundLabel"
      aria-modal="true"
      role="dialog"
      style="display: block;"
      v-show="showModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="redeemRefundLabel">Choose your code</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="showModal = false"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div
              v-for="item in action.selectedDeal.lincecode"
              :key="item.id"
              class="d-flex justify-content-between"
            >
              <label @click="toggleSelectedCode(item)" class="code-check">
                <input
                  type="checkbox"
                  :checked="codeSelected.indexOf(item.id) > -1"
                  v-if="item.status == 1"
                />
                <input type="checkbox" checked="checked" disabled v-else />
                {{ item.code }}
              </label>
              <div>
                <span class="badge badge-soft">{{
                  getStatus(item.status)
                }}</span>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="showModal = false"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="submitRequest"
            >
              {{ action.type }} Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade show"
      id="redeemed"
      tabindex="-1"
      aria-labelledby="redeemedLabel"
      aria-modal="true"
      role="dialog"
      style="display: block;"
      v-show="showModalRedeemed"
    >
      <div
        class="modal-dialog modal-dialog-centered"
        v-for="(item, key) in items"
        :key="key"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="redeemedLabel">
              How to redeemed your code
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="showModalRedeemed = false"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              To redeem your code, please go to the link
              <a class="text-red external-link" :href="item.linkredeem" target="_blank">{{ item.linkredeem }}</a>
              You can copy and paste the link and open it in another tab or klik
              the button redeem bellow
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="showModalRedeemed = false"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="submitRedeemed(item)"
            >
              {{ action.type }} Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="table-fixed mt-4 pb-5">
      <table>
        <thead>
          <tr class="gordita-bold">
            <th class="text-uppercase text-grey-smooth" colspan="2">
              deal name
            </th>
            <th class="text-uppercase text-grey-smooth" width="220"></th>
            <th class="text-uppercase text-grey-smooth text-center" width="15%%">
              purchase date
            </th>
            <th class="text-uppercase text-grey-smooth text-center" width="12.5%">status</th>
            <th class="text-uppercase text-grey-smooth text-center" width="12.5%">total</th>
            <th class="text-uppercase text-grey-smooth text-center" width="5%">more</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in items" :key="key">
            <td width="210">
              <img :src="$getImage(item.id)" alt />
            </td>
            <td width="220">
              <h6 class="gordita-bold">{{ item.name }}</h6>
              <h6 class="font-weight-bold text-red">
                {{ $formattedMoney(item.price) }}
              </h6>
              <LazyRating class="rating" size="sm" :value="item.rating" />
            </td>
            <td>
              <h6 class="btn btn-red btn-sm mt-lg-1" @click="toggleCode(key)">
                {{
                  `${item.show ? 'Hide' : 'Show'} ${item.quantity} ${
                    item.quantity > 1 ? 'codes' : 'code'
                  }`
                }}
                <i class="fa fa-eye pl-2"></i>
              </h6>
              <ul v-show="item.show" class="list-unstyled pt-2">
                <ul>
                  <li v-for="license in item.lincecode" :key="license._id">
                    {{ license.code }}
                  </li>
                </ul>
              </ul>
            </td>
            <td class="text-center">{{ $formattedDate(item.mycartcreatedat) }}</td>
            <td class="text-center">
              <span
                :class="{
                  badge: true,
                  'badge-secondary': item.status != 1,
                  'badge-info': item.status == 1
                }"
                >{{ item.status == 1 ? 'Active' : 'Inactive' }}</span
              >
            </td>
            <td class="text-center">{{ $formattedMoney(item.subtotal) }}</td>
            <td class="text-center">
              <DashboardMoreAction :onClick="selectData" :data="item" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  layout: 'account',
  name: 'MyDeals',
  head: () => ({
    titleTemplate: 'My Deals - %s'
  }),
  data() {
    return {
      showModal: false,
      showModalRedeemed: false,
      items: [],
      codeSelected: [],
      action: {
        type: '',
        selectedDeal: {}
      }
    }
  },
  computed: {
    ...mapState(['profile'])
  },
  methods: {
    ...mapMutations(['setProfile']),
    getProfile() {
      this.$axios.get('/user/myprofile').then(response => {
        let {
          data: { success, data }
        } = response
        if (success) {
          this.setProfile(data)
        }
      })
    },
    toggleSelectedCode(item) {
      if (item.status == 1) {
        let temp = [...this.codeSelected]
        if (temp.indexOf(item.id) > -1) temp.splice(temp.indexOf(item.id), 1)
        else temp.push(item.id)
        this.codeSelected = [...temp]
      }
    },
    selectData(type, selectedDeal) {
      this.codeSelected = []
      this.action = { ...this.action, type, selectedDeal }
      if (type == 'redeemed') {
        this.showModalRedeemed = true
        this.showModal = false
      } else {
        this.showModal = true
        this.showModalRedeemed = false
      }
    },
    submitRedeemed(item) {
      window.open(item.linkredeem, '_blank');
      this.showModalRedeemed = false
    },
    submitRequest() {
      if (this.codeSelected.length < 1) {
        this.$swal('Info', `No code selected`, 'info')
        return false
      }
      let param = {
        myCartID: this.action.selectedDeal.mycartid,
        myCartLineCodeID: [...this.codeSelected],
        reason: 'requested_by_customer'
      }
      this.$axios.post(`/${this.action.type}`, param).then(response => {
        let {
          data: { success, message }
        } = response
        if (success) {
          this.$swal('Success!', message, 'success').then(() => {
            this.getData()
            this.showModal = false
          })
        } else {
          this.$swal('Oops!', `${message}`, 'error').then(() => {
            this.showModal = false
          })
        }
      })
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
    },
    getStatus(statusInt) {
      switch (statusInt) {
        case 0:
          return 'New'
          break
        case 1:
          return 'Active'
          break
        case 2:
          return 'Delete'
          break
        case 3:
          return 'InActive'
          break
        case 4:
          return 'Done'
          break
        case 5:
          return 'Failed'
          break
        case 6:
          return 'Redeem'
          break
        case 7:
          return 'Refund'
          break
        default:
          return 'Unknown'
          break
      }
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
img {
  border-radius: 10px;
}

.table-fixed {
  overflow-y: auto;
  table {
    border-collapse: separate;
    border-spacing: 0 15px;
    width: 100%;
    thead th {
      position: sticky;
      top: 0;
      background: #f5f4f8;
      z-index: 3;
      font-size: 14px;
    }
    tbody {
      tr {
        width: 100%;

        td {
          margin-bottom: 10px;
          background-color: white;
          padding: 12px;
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
.badge-soft {
  background: #f2edf7;
  border: solid 1px var(--primary-color-purple);
}
.text-grey-smooth {
  color: #c0c0c0;
}
.rating {
  margin-left: -3px;
}
.code-check {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>