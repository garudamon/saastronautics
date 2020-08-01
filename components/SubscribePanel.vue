<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-md-7 mx-auto p-md-5 p-3 p-md- subscribe-panel my-5 d-flex align-items-center"
      >
        <div class="row">
          <div class="col-12 col-md-4 p-5 p-md-0">
            <img
              src="~/assets/images/about/gift-icon.png"
              alt="Gift Illustrator"
              v-if="$route.path == '/about'"
            />
            <img
              src="~/assets/images/gift-icon.png"
              alt="Gift Illustrator"
              v-else
            />
          </div>
          <div class="col-12 col-md-8 text-center">
            <h3 class="font-weight-bold">
              Sign Up and Launch Your Workflow into Hyperspace!
            </h3>
            <p class="py-2">
              Stay in the loop of the latest innovations to manage and improve
              your digital transformation.
            </p>
            <form class="row d-flex justify-content-center">
              <div class="col-7 pr-0 mr-2">
                <input
                  type="password"
                  class="form-control form-round border-0 px-3"
                  placeholder="Enter your email address"
                />
              </div>
              <div class="col-3 px-0">
                <button type="submit" class="btn btn-primary btn-md px-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
