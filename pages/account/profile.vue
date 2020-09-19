<template>
  <div class="row">
    <div class="col-12 pb-2">
      <h4>Account Detail</h4>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(updateProfile)">
              <div class="row pr-4">
                <div class="col-6">
                  <p class="h4 mb-4">Profile</p>
                </div>
                <div class="col-6 text-right">
                  <button class="btn btn-primary" type="submit">Update</button>
                </div>
              </div>
              <div class="row pb-4 pr-4">
                <div class="col-12 col-md-6">
                  <div class="row d-flex align-items-center">
                    <div class="col-12 col-md-3">
                      <label for="">Title</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <ValidationProvider name="Title" rules="required" v-slot="{ errors }">
                        <input class="form-control form-round form-primary-purple" type="text" placeholder="Title" v-model="user.title">
                        <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="row d-flex align-items-center">
                    <div class="col-12 col-md-3">
                      <label for="">Photo Profile</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input class="form-control form-round form-primary-purple" type="file" placeholder="Avatar" accept="image/jpeg, image/png" @change="handleAvatar">
                    </div>
                  </div>
                </div>
              </div>
              <div class="row pb-4 pr-4">
                <div class="col-12 col-md-6">
                  <div class="row d-flex align-items-center">
                    <div class="col-12 col-md-3">
                      <label for="">First Name</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <ValidationProvider name="First Name" rules="required" v-slot="{ errors }">
                        <input class="form-control form-round form-primary-purple" type="text" placeholder="First Name" v-model="user.firstName">
                        <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="row d-flex align-items-center">
                    <div class="col-12 col-md-3">
                      <label for="">Last Name</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <ValidationProvider name="Last Name" rules="required" v-slot="{ errors }">
                        <input class="form-control form-round form-primary-purple" type="text" placeholder="Last Name" v-model="user.lastName">
                        <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row pb-4 pr-4">
                <div class="col-12 col-md-6">
                  <div class="row d-flex align-items-center">
                    <div class="col-12 col-md-3">
                      <label for="">Email</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <input class="form-control form-round form-primary-purple" disabled type="text" placeholder="Email" v-model="user.email">
                    </div>
                  </div>
                </div>
              </div>
              <p class="h4 my-4">Change Password</p>
              <div class="row pb-4 pr-4">
                <div class="col-12 col-md-6">
                  <div class="row d-flex align-items-center">
                    <div class="col-12 col-md-3">
                      <label for="">Old Password</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <ValidationProvider name="Old Password" vid="oldPassword" v-slot="{ errors }">
                        <input class="form-control form-round form-primary-purple " type="password" autcomplete="false" placeholder="Old Password" v-model="password.oldPassword">
                        <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="row d-flex align-items-center pb-4">
                    <div class="col-12 col-md-3">
                      <label for="">New Password</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <ValidationProvider name="Password" v-slot="{ errors }" rules="required_if:oldPassword" vid="newPassword">
                        <input class="form-control form-round form-primary-purple " type="password" autcomplete="false" placeholder="Password" v-model="password.newPassword">
                        <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="row d-flex align-items-center">
                    <div class="col-12 col-md-3">
                      <label for="">Re-Password</label>
                    </div>
                    <div class="col-12 col-md-9">
                      <ValidationProvider name="Re-Password" rules="required_if:newPassword|confirmed:newPassword" v-slot="{ errors }">
                        <input class="form-control form-round form-primary-purple " type="password" autcomplete="false" placeholder="Re-Password" v-model="password.confirmNewPassword">
                        <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate/dist/vee-validate.full.esm'
extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Re-Password does not match'
});

import {mapMutations} from 'vuex'
export default {
  name: 'MyProfile',
  layout: 'account',
  head: () => ({
    titleTemplate: 'Account Detail - %s'
  }),
  components: {
    ValidationProvider, ValidationObserver
  },
  data: () => ({
    user: {},
    password: {
      oldPassword:"",
      newPassword:"",
      confirmNewPassword:"",
    },
    newAvatar: ""
  }),
  methods: {
    ...mapMutations(['setProfile']),
    getData() {
      this.$axios.get('/user/myprofile').then(res => {
        let {
          data: { success, data, message }
        } = res
        if (success) this.user = {...data.customer}
        else this.$swal('Oopss!', message, 'failed')
      })
    },
    handleAvatar(e) {
      const inputFile = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        console.log(e.target.result)
        this.newAvatar = e.target.result
      }
      reader.readAsDataURL(inputFile)
    },
    updateProfile(e) {
      let {firstName, lastName, email, title, id} = this.user

      let param = {
        firstName,
        lastName,
        email,
        title,
        "profilePictureBase": this.newAvatar,
        "roles": ""
      }

      this.$axios.put(`/customer/${id}`, {...param}).then(res => {
        let {
          data: { success, data, message }
        } = res
        let successMessage = message
        if (success) {
          let {newPassword, oldPassword} = this.password
          if(newPassword != '' && oldPassword != '') {
            this.$axios.put('/user/changepassword', {newPassword, oldPassword}).then(resChange => {
              if (resChange.data.success) {
                this.$swal("Success", successMessage, "success")
                this.password = {
                  ...this.password,
                  oldPassword:"",
                  newPassword:"",
                  confirmNewPassword:"",
                }
                this.password = {
                  ...this.password,
                  oldPassword:"",
                  newPassword:"",
                  confirmNewPassword:"",
                }
              }
              else this.$swal('Oopss!', message, 'failed')
            })
          } else {
            this.$swal("Success", message, "success")
          }
          this.getData()
          this.setProfile()
        }
        else this.$swal('Oopss!', message, 'failed')
      })

      return false
    },
    updatePassword(e) {
      let {newPassword, oldPassword} = this.password

      return false
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.form-error{
  font-size: 0.6rem !important;
  padding-left: 0.8rem;
  color: tomato;
}
label{
  margin-bottom: 0 !important;
  font-size: 0.8rem;
}
.card{
  border-color: white !important;
}
</style>