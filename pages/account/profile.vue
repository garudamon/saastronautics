<template>
  <div class="row">
    <div class="col-12 pb-2">
      <h4>Account Detail</h4>
    </div>
    <div class="col-12 col-md-8">
      <div class="card">
        <div class="card-header">Profile</div>
        <div class="card-body">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(updateProfile)">
              <div class="row">
                <div class="col-12 col-md-6">
                  <ValidationProvider name="Title" rules="required|alpha" v-slot="{ errors }">
                    <input class="form-control form-round form-gray" type="text" placeholder="Title" v-model="user.title">
                    <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-12 col-md-6">
                  <ValidationProvider name="First Name" rules="required|alpha" v-slot="{ errors }">
                    <input class="form-control form-round form-gray" type="text" placeholder="First Name" v-model="user.firstName">
                    <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="col-12 col-md-6">
                  <ValidationProvider name="Last Name" rules="required|alpha" v-slot="{ errors }">
                    <input class="form-control form-round form-gray" type="text" placeholder="Last Name" v-model="user.lastName">
                    <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col-12 col-md-6">
                  <input class="form-control form-round form-gray" disabled type="text" placeholder="Email" v-model="user.email">
                </div>
              </div>
              <div class="row">
                <div class="col-12 pt-3">
                  <button class="btn btn-primary" type="submit">Update Profile</button>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="card">
        <div class="card-header">Change Password</div>
        <div class="card-body">
          <ValidationObserver v-slot="{ handleSubmit }" ref="form">
            <form @submit.prevent="handleSubmit(updatePassword)">
              <div class="row">
                <div class="col-12 mb-3">
                  <ValidationProvider name="Old Password" rules="required" v-slot="{ errors }">
                    <input class="form-control form-round form-gray " type="password" placeholder="Old Password" v-model="password.oldPassword">
                    <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="col-12 mb-3">
                  <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
                    <input class="form-control form-round form-gray " type="password" placeholder="Password" v-model="password.newPassword">
                    <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="col-12">
                  <ValidationProvider name="Confirm Password" rules="required|password:@Password" v-slot="{ errors }">
                    <input class="form-control form-round form-gray " type="password" placeholder="Confirm Password" v-model="password.confirmNewPassword">
                    <span class="form-error" v-if="errors.length > 0">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="row">
                <div class="col-12 pt-3">
                  <button class="btn btn-primary" type="submit">Update Password</button>
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
  message: 'Password confirmation does not match'
});

import {mapMutations} from 'vuex'
export default {
  name: 'MyProfile',
  layout: 'account',
  head: () => ({
    titleTemplate: 'My Profile - %s'
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
    }
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
    updateProfile(e) {
      let {firstName, lastName, email, title, id} = this.user

      let param = {
        firstName,
        lastName,
        email,
        title,
        "newPassword": "",
        "profilePicture": "",
        "roles": ""
      }

      this.$axios.put(`/customer/${id}`, {...param}).then(res => {
        let {
          data: { success, data, message }
        } = res
        if (success) {
          this.$swal("Success", message, "success")
          this.getData()
          this.setProfile()
        }
        else this.$swal('Oopss!', message, 'failed')
      })

      return false
    },
    updatePassword(e) {
      let {newPassword, oldPassword} = this.password

      this.$axios.put('/user/changepassword', {newPassword, oldPassword}).then(res => {
        let {
          data: { success, data, message }
        } = res
        if (success) {
          this.$swal("Success", message, "success")
          this.password = {
            ...this.password,
            oldPassword:"",
            newPassword:"",
            confirmNewPassword:"",
          }
          this.$nextTick(() => {
            this.$refs.form.reset();
          });
        }
        else this.$swal('Oopss!', message, 'failed')
      })

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
</style>