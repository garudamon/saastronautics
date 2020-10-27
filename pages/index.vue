<template>
<div>
    <div class="container">
        <!-- lead -->
        <div class="row main-title">
            <div class="col-12 col-md-11 mx-auto text-center">
                <h1 class="title-1 display-5 font-weight-normal d-none d-md-block">
                    Launch Your Workflow into Hyperspace with
                    <span class="text-red title-1">Saastronautics</span>
                </h1>
                <h1 class="display-md-5 font-weight-normal d-block d-md-none">
                    Launch Your Workflow into Hyperspace with
                    <span class="text-red title-1 font-weight-bold">Saastronautics</span>
                </h1>
            </div>
            <div class="col-12 col-md-10 mx-auto text-center">
                <h4 class="px-md-4 pb-4 pt-1 pt-md-4">
                    We connect powerful tools with intrepid businesses.
                </h4>
            </div>    
        </div>
        <!-- hero image -->
        <div class="row hero">
            <div class="col-12 text-center pt-5 pb-4">
                <img :src="$getStaticImage('homepage.svg')" alt="Saastronautics Connecting People" />
            </div>
        </div>
        <div class="row mt-5 subscribe">
            <div class="col-12 text-center mb-3">
                <h4>
                    Sign up for our latest insights and exclusive deals sent directly to your inbox.
                </h4>
            </div>
             <div class="col-12 col-md-5 mx-auto" v-if="!isLogin">
                <form class="row" @submit="subscribe">
                    <div class="col-8">
                        <input type="email" :class="{
                  'form-control form-round form-gray border-0 px-3': true,
                  error: error.email ? true : false
                }" placeholder="Enter your email address" v-model="email" />
                    </div>
                    <div class="col px-0 my-auto">
                        <button type="submit" class="btn btn-primary btn-md px-4">
                            Send Me Email
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <!-- main feature -->
        <div class="row features px-md-4 pt-5 pb-0 pb-md-5 ">
            <div class="col-12 py-3 py-md-5">
                <h1 class="title-1 text-center">How Can Saastronautics Help You?</h1>
            </div>
            <div class="col-12 col-md-4 text-left px-4" v-for="item in features" :key="item.title">
                <div class="text-center mb-4">
                    <img :src="$getStaticImage(item.image)" :alt="item.title" />
                </div>
                <h5 class="title-2 text-capitalize font-weight-bold pb-4 pt-md-4">
                    {{ item.title }}
                </h5>
                <p class="py-0">{{ item.description }}</p>
            </div>
        </div>
        <!-- what we do -->
        <ImageParagraphSideBySide :imageUrl="$getStaticImage(imageWhatWeDo)" title="What We Do" :descriptions="[
          'Saastronautics brings you exclusive deals on the hottest new SaaS tools to help you grow your business.',
          'We scout and hunt for the latest and greatest, next big deal, and secure exclusive lifetime deals and discounts for you. We have a rigorous vetting process for all SaaS tools that launch on Saastronautics, so you don’t have to. ',
          'We provide a launchpad for SaaS startups and developers to promote their tech solutions to early adopters. Our mission is to not only help SaaS startups establish their brand presence and generate MRR, but to help entrepreneurs grow by providing powerful tools at affordable prices.'
        ]" fadeType="fade-right" />
    </div>
    <!-- why we're different -->
    <LazyFeatureGray title="Why We Are Different" :items="why" />
    <!-- customer feedback -->
    <LazyCustomerFeedback :feedback="feedback" title="Our Customers Love What We Do" subtitle="Read what our fellow Saastronauts have to say about us." />
    <!-- best selling -->
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="title-2 font-weight-bold mb-4">Featured Deals</h1>
            </div>
            <div class="col-12 col-md-10 mx-auto text-center graphik-reg">
                <p>
                    Don’t miss out on these exclusive deals at an extraordinary low
                    price.
                </p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12 col-md-4 product mb-5 px-4 pb-3" v-for="item in bestSellingProduct" :key="item.id">
                <div class="product-image mb-3">
                    <a :href="'/' + item.productMaster.uniqName">
                        <img :src="$getImage(item.productMaster.id)" :alt="item.name" />
                    </a>
                </div>
                <div class="mb-4">
                    <span class="badge badge-deals text-uppercase mx-1 py-2 px-3" v-for="tag in item.productMaster.productTagMaster" :key="tag.id">{{ tag.tagMaster && tag.tagMaster.name }}</span>
                </div>
                <div class="title-link">
                    <a :href="'/' + item.productMaster.uniqName">
                        <h5 class="maison-demi font-weight-bold">
                            {{ item.productMaster.name }}
                        </h5>
                    </a>
                </div>
                <rating size="sm" space="mr-1" class="mb-3" :value="item.rating" />
                <div class="price row mb-5">
                    <div class="col-2 active-price font-weight-bold">
                        <span>${{ item.productMaster.activePrice }}</span>
                    </div>
                    <div class="col inactive-price">
                        <span>${{ item.productMaster.inActivePrice }}</span>
                    </div>
                </div>
                <nuxt-link class="maison-demi" :to="`/${item.productMaster.uniqName}`">Learn More &#8594;</nuxt-link>
            </div>
            <div v-for="n in 3 - this.bestSellingProduct.length" :key="n" class="col-12 col-md-4 product mb-5 px-4 pb-3">
                <LazyComingSoon />
            </div>
        </div>
    </div>
    <!-- subscribe -->
    <!-- <LazySubscribePanel v-if="!isLogin" :class="{'mb-5': !isLogin}" /> -->
    <div v-if="!isLogin">
        <LazySubscribePanel />
    </div>
    <div v-else class="my-3 my-md-5"></div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    data() {
        return {
            features: [{
                    image: 'icon/drive-a-digital-transformation.svg',
                    title: 'Drive a digital transformation',
                    description: 'Outdated legacy systems running your company are doing nothing to enhance your employee and customer experience.'
                },
                {
                    image: 'icon/optimize-your-workflows.svg',
                    title: 'optimize your workflows',
                    description: 'Improve productivity and efficiency with your staff and eliminate bottlenecks and hurdles for your team and customers.'
                },
                {
                    image: 'icon/automate-your-workplace.svg',
                    title: 'automate your workplace',
                    description: 'Give your employees more time to deal with parts of your business that bring in more revenue and join the digital era'
                }
            ],
            why: [{
                    image: 'icon/hot-new-deals.svg',
                    title: 'Hot New Deals',
                    description: 'We bring you exclusive offers on the best deals for SaaS tools designed to boost your business.'
                },
                {
                    image: 'icon/best-prices.svg',
                    title: 'Exclusive Prices',
                    description: 'Save money and take advantage of our exclusive lifetime deals and discounts on the latest software solutions.'
                },
                {
                    image: 'icon/top-notch-products.svg',
                    title: 'Trustworthy Products',
                    description: 'We have a vigorous vetting process for all our tools. These are tried and tested tools you can trust.'
                },
                {
                    image: 'icon/satisfaction-guarantee.svg',
                    title: 'Satisfaction Guarantee',
                    description: 'Our 30-day risk-free money-back guarantee ensures you get the value you need or you don’t pay.'
                }
            ],
            feedback: [{
                    name: 'Ken Moo - Founder and CEO, Content-Loop Digital',
                    comment: 'I’ve worked with Joon, the founder of Saastronautics, for numerous projects now. The thing about Joon is that he always does his best to over deliver and put his clients before himself. So when it comes to software deals, I have no doubt in his willingness to put the community’s interest first and listen to our feedback.',
                    rating: 5,
                    photo: 'feedback/kenmoo.jpeg'
                },
                {
                    name: 'Rishi Jain - Co-Founder, Digital Scholar',
                    comment: 'I have personally worked with Parker on various campaigns and the quality that he brings to table is commendable. Parker is an expert in utilizing SaaS tools to make the most out of marketing campaigns and I’m sure there’s no better person to understand the product and customer. I know Saastronautics will seamlessly bridge the gap between the two.',
                    rating: 5,
                    photo: 'feedback/rishi-jain.jpeg'
                },
                {
                    name: 'Niko Julius - Owner, Kelbimedia',
                    comment: 'I worked with Parker as an agency partner in Indonesia. With his expertise in affiliate and referral marketing, we were able to 10x our campaigns easily. I’m excited to see Saastronautics grow. I fully trust Parker and his team and look forward to the coming deals.',
                    rating: 5,
                    photo: 'feedback/niko-julius.jpeg'
                },
                {
                    name: 'Ari Eko Prasethio - Content Creator, AriEko.com',
                    comment: 'Parker he is a tough marketer and I know the Saastronautics team will be very successful. Parker and his team first got my attention when I saw his growth-hacking campaigns for his clients. And it was awesome. Not many people go the extra mile for their clients. Parker is one of a kind. I also pay for his services and he is a trusted and recommended service provider. You can trust this team, enough said.',
                    rating: 5,
                    photo: 'feedback/ari-eko.jpeg'
                }
            ],
            imageWhatWeDo: 'what-we-do.svg',
            email: '',
            error: {},
            bestSellingProduct: []
        }
    },
    computed: {
        ...mapState(['isLogin'])
    },
    watch: {
        email: function (val) {
            if (!this.validEmail(val))
                this.error = {
                    ...this.error,
                    email: 'Email not valid'
                }
            else delete this.error['email']
        }
    },
    mounted() {
        this.loadBestSellingProduct()
        /* remark by frank
                if (this.$route.query.aff) {
                    this.$affiliateSet(this.$route.query.aff)
                }
                */
    },
    methods: {
        loadBestSellingProduct() {
            this.$axios.get('/product/bestselling/all?limit=6').then(response => {
                let {
                    data: {
                        data,
                        success
                    }
                } = response
                if (success) {
                    this.bestSellingProduct = [...data]
                }
            })
        },
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(email)
        },
        subscribe(e) {
            e.preventDefault()
            if (!this.validEmail(this.email)) {
                this.error = {
                    ...this.error,
                    email: 'Email not valid'
                }
            } else {
                this.$axios
                    .post('/emailcommunity/insert/', {
                        email: this.email
                    })
                    .then(response => {
                        if (response.data.success) {
                            this.email = ''
                            this.$swal(
                                'Welcome to our community!',
                                `${response.data.message}`,
                                'success'
                            )
                        } else {
                            this.$swal('Ooh dude!', `${response.data.message}`, 'error')
                        }
                    })
            }
            return false
        }
    }
}
</script>

<style lang="scss" scoped>
.hero {
    position: relative;

    img {
        width: 100%;
    }
}

.features {
    img {
        height: 125px;
        border-radius: 10px;
    }
}

.product {
    transition: all 500ms;

    &:hover {
        transform: translateY(-10px);
    }

    .product-image {
        overflow: hidden;
        height: 215px;
        border-radius: 5px;
        display: flex;
        align-items: center;

        img {
            max-width: 99% !important;
            border-radius: 5px;
            box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.33);
        }
    }

    .title-link {
        a {
            color: black;

            &:hover {
                color: var(--primary-color-purple);
                text-decoration: none;
            }
        }
    }

    a {
        color: #ff4370;

        &:hover {
            text-decoration: underline;
        }
    }
}

@media (max-width: 768px) {
    .flickity-viewport {
        height: auto !important;
    }

    .feedback .comment .comment-item {
        width: 80%;
    }

    .features {
        img {
            height: 100px !important;
        }
    }

    .subscribe {
        h4 {
            font-size: 14px;
        }

        input::-webkit-input-placeholder {
        font-size: 12px;
        }

        .btn {
            font-size: 10px;
        }
    }
}
</style>
