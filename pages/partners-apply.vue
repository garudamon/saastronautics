<template>
  <div>
    <div class="gray-feature container-fluid py-5">
      <div class="row px-md-4 justify-content-md-center">
        <div class="col-12 my-3 text-center">
          <h1 class="title-1 display-5 font-weight-normal">
            Become a Saastronautics Partner
          </h1>
        </div>
        <div class="col-8 text-center mb-3">
          <p>
            Become a Saastronautics Partner Saastronautics is the launchpad to
            get your product to the next level of its journey. Reach the early
            adopters that you need to grow your product.
          </p>
          <p>
            Become an official partner with Saastronautics and have a dedicated
            team of experts focused on your campaign’s success. The
            Saastronautics team stays on board even after your campaign ends and
            we help you shift gears and focus on generating MRR.
          </p>
          <span class="quote-highlight">Apply to become a partner below. </span>
          <div class="social-media pt-5">
            <a
              href="https://web.facebook.com/saastronautics"
              target="_blank"
              class
            >
              <span class="fa fa-facebook"></span>
            </a>
            <a href="https://twitter.com/saastronautics" target="_blank" class>
              <span class="fa fa-twitter"></span>
            </a>
            <a
              href="https://www.instagram.com/saastronautics/"
              target="_blank"
              class
            >
              <span class="fa fa-instagram"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row px-md-4 justify-content-md-center">
        <div class="col-12 my-3 text-center">
          <div>
            <span class="h1 title-1 px-3 text-red">Saastronautics</span>
            <span class="h1 border-center">|</span>
            <span class="h1 title-1 saastro px-3">Partners</span>
          </div>
        </div>
        <div class="col-12 text-center">
          <h3 class="title-1 py-2">Partners Application</h3>
          <h5>
            Fill out and submit this form to begin the Saastronautics
            Partnership program.
          </h5>
          <div ref="questionscoutPanel"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerApply',
  mounted() {
    setTimeout(() => {
      let questionscoutScript = document.createElement('script')
      questionscoutScript.setAttribute('id', 'jnqsmjrytsqlsw')
      questionscoutScript.setAttribute('src', '/questionscout.js')
      this.$refs.questionscoutPanel.appendChild(questionscoutScript)
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #474747;
    color: white;
    font-weight: bold;
    margin-right: 15px;
    padding: 10px;
    border-radius: 15% !important;
    font-size: 1em;
    &:hover {
      color: var(--primary-color-red);
    }
  }
}

.gray-feature {
  margin-top: -60px;
}

.quote-highlight {
  background-color: var(--primary-color-red);
  color: #1b1b1b;
  font-weight: bold;
  padding: 3px;
}

.border-center {
  color: #ddd;
}
.partners {
  color: #868686;
}
</style>
