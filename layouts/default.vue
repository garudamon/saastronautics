<template>
<div>
    <div class="container">
        <nav class="navbar navbar-expand-sm navbar-light px-0 px-md-3">
            <button class="navbar-toggler" type="button" data-toggle="collapse" :aria-expanded="expandNav" aria-label="Toggle navigation" @click="expandNav = !expandNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/">
                <img :src="$getStaticImage('logo.png')" alt />
            </a>

            <div :class="{ collapse: true, 'navbar-collapse': true, show: expandNav }">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li :class="{
                'nav-item': true,
                'mx-lg-3': true
              }" v-for="(link, index) in topLink" :key="index">
                        <nuxt-link :class="{
                  'nav-link': !link.isButton,
                  btn: link.isButton,
                  'btn-primary': link.isButton,
                  'btn-sm': link.isButton,
                  'mt-lg-1': link.isButton
                }" :to="link.path">{{ link.text }}</nuxt-link>
                    </li>
                    <li class="nav-item mx-lg-3" v-if="!isLogin">
                        <nuxt-link class="btn btn-primary btn-sm mt-lg-1" to="/auth/signin">Get Started</nuxt-link>
                    </li>
                    <template v-else>
                        <li class="nav-item mx-lg-3">
                            <nuxt-link class="btn btn-primary btn-sm mt-lg-1" to="/account">my account</nuxt-link>
                        </li>
                        <li class="nav-item mx-lg-3 d-flex align-items-center cart">
                            <nuxt-link to="/cart">
                                <span class="fa fa-shopping-cart mr-2 fa-lg"></span>
                                <span class="count-buble" v-if="cart && cart.quantity > 0">{{
                    cart.quantity
                  }}</span>
                            </nuxt-link>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </div>
    <div id="wrapper" class="px-3 px-md-0">
        <nuxt />
    </div>
    <footer class="mt-5 p-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-3 pb-5 px-2 px-md-3">
                    <img :src="$getStaticImage('logo-white.png')" alt />
                </div>
                <div class="col-12 col-md-2">
                    <div class="text-uppercase text-white font-weight-bold pb-3">
                        sitemap
                    </div>
                    <ul>
                        <li v-for="item in sitemapLink" :key="item.text" class="py-1">
                            <nuxt-link :to="item.path">{{ item.text }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md-3">
                    <div class="text-uppercase text-white font-weight-bold pb-3">
                        account
                    </div>
                    <ul>
                        <li v-for="item in accountLink" :key="item.text" class="py-1">
                            <nuxt-link :to="item.path">{{ item.text }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-md">
                    <div class="text-uppercase text-white font-weight-bold pb-3">
                        social media
                    </div>
                    <ul>
                        <li v-for="item in sosmedLink" :key="item.text" class="py-1">
                            <a :href="item.path" target="_blank">{{ item.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <Cookie />
</div>
</template>

<script>
import {
    mapState,
    mapMutations
} from 'vuex'
export default {
    name: 'DefaultLayout',
    data() {
        return {
            expandNav: false,
            topLink: [{
                    text: 'Home',
                    path: '/',
                    isButton: false
                },
                {
                    text: 'Deals',
                    path: '/deals',
                    isButton: false
                },
                {
                    text: 'Partners',
                    path: '/partners',
                    isButton: false
                },
                {
                    text: 'About',
                    path: '/about',
                    isButton: false
                },
                {
                    text: 'Support',
                    path: '/support',
                    isButton: false
                }
            ],
            sitemapLink: [{
                    text: 'Home',
                    path: '/',
                    isButton: false
                },
                {
                    text: 'Deals',
                    path: '/deals',
                    isButton: false
                },
                {
                    text: 'Partners',
                    path: '/partners',
                    isButton: false
                },
                {
                    text: 'About',
                    path: '/about',
                    isButton: false
                },
                {
                    text: 'Support',
                    path: '/support',
                    isButton: false
                },
                {
                    text: 'Affiliate',
                    path: '/affiliate',
                    isButton: false
                }
            ],
            accountLink: [{
                    text: 'Terms of Use',
                    path: '/terms',
                    isButton: false
                },
                {
                    text: 'Privacy Policy',
                    path: '/privacy',
                    isButton: false
                },
                {
                    text: 'Frequently Asked Questions',
                    path: '/support',
                    isButton: false
                }
            ],
            sosmedLink: [{
                    text: 'Facebook',
                    path: 'https://web.facebook.com/saastronautics',
                    isButton: false
                },
                {
                    text: 'Twitter',
                    path: 'https://twitter.com/saastronautics',
                    isButton: false
                },
                {
                    text: 'Instagram',
                    path: 'https://www.instagram.com/saastronautics/',
                    isButton: false
                },
                {
                    text: 'Blog',
                    path: 'https://blog.saastronautics.com/',
                    isButton: false
                },
                {
                    text: 'Community',
                    path: 'https://www.facebook.com/groups/saastronautics/',
                    isButton: false
                }
            ]
        }
    },
    computed: {
        ...mapState(['isLogin', 'cart'])
    },
    mounted() {
        // if (this.isLogin) this.getProfile()
    },
    methods: {
        ...mapMutations(['setProfile']),
        getProfile() {
            this.$axios.get('/user/myprofile').then(response => {
                let {
                    data: {
                        success,
                        data
                    }
                } = response
                if (success) {
                    this.setProfile(data)
                }
            })
        }
    }
}
</script>

<style></style>
