<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <!-- Navigation Section Start -->

      <v-app-bar color="light" prominent :elevation="0" :border="true" class="px-4" id="top">
        <v-icon size="large" class="mx-2" variant="text" @click.stop="drawer = !drawer">{{
          drawer ? 'mdi-close' : 'mdi-menu'
        }}</v-icon>

        <v-toolbar-title
          >Sellpy
          <v-btn class="mx-2" variant="text"> Köp </v-btn>
          <v-btn variant="text"> Sälj </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-autocomplete
          v-if="!isMobile"
          :items="items"
          auto-select-first
          class="flex-full-width mt-5 mr-5"
          density="compact"
          item-props
          menu-icon=""
          placeholder="Vad vill du handla?"
          prepend-inner-icon="mdi-magnify"
          rounded
          theme="light"
          variant="outlined"
        ></v-autocomplete>

        <v-btn variant="text" icon="mdi-heart-outline"></v-btn>

        <v-btn variant="text" icon="mdi-account-outline"></v-btn>

        <v-btn variant="text" icon="mdi-cart-outline"></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="left" temporary width="350" absolute>
        <v-card elevation="0">
          <v-tabs v-model="tab" bg-color="">
            <v-tab class="w-50" :border="true" value="one">Köp</v-tab>
            <v-tab class="w-50" :border="true" value="two">Sälj</v-tab>
          </v-tabs>

          <v-card-text class="px-0">
            <v-window v-model="tab">
              <!-- Tab First Start -->

              <v-window-item value="one">
                <v-card class="mx-auto" max-width="" elevation="0">
                  <v-list density="compact">
                    <!-- Top list item -->

                    <div v-if="sec_name">
                      <v-list-item>
                        <div class="d-flex align-center">
                          <v-btn @click="updated = false" icon="" size="x-small" variant="text"
                            ><v-icon size="large">mdi-arrow-left</v-icon></v-btn
                          >
                          <div class="w-100">
                            <div class="d-flex align-center mr-5 justify-center">
                              <img class="mr-3" :src="sec_img" width="16px" />
                              <v-list-item-title>
                                {{ sec_name }}
                              </v-list-item-title>
                            </div>
                          </div>
                        </div>
                      </v-list-item>
                      <v-divider></v-divider>
                    </div>

                    <!-- All list items -->
                    <div v-if="updated === false">
                      <v-list-item
                        :append-icon="data_item.append_icon"
                        v-for="(data_item, i) in item"
                        :key="i"
                        :value="data_item"
                        @click="getone(data_item)"
                      >
                        <div class="d-flex align-center">
                          <img class="mr-3" :src="data_item.img" width="16px" />

                          <v-list-item-title v-text="data_item.text"></v-list-item-title>
                        </div>
                      </v-list-item>
                    </div>
                  </v-list>
                  <div v-show="!updated == false" class="pl-8" id="updateList"></div>
                </v-card>
              </v-window-item>

              <!-- Tab Second Start -->

              <v-window-item value="two">
                <v-list density="compact">
                  <!-- All list items -->

                  <v-list-item
                    :append-icon="data_item.append_icon"
                    v-for="(data_item, i) in item2"
                    :key="i"
                    :value="data_item"
                  >
                    <div class="d-flex align-center">
                      <img class="mr-3" :src="data_item.img" width="16px" />

                      <v-list-item-title v-text="data_item.text"></v-list-item-title>
                    </div>
                  </v-list-item>
                </v-list>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-navigation-drawer>

      <!-- Main Page start ----- -->

      <v-main style="height: 100%" :elevation="0">
        <v-card-text class="pa-0">
          <!-- Section First Start -->

          <div class="d-flex justify-center">
            <v-row class="main sec1">
              <v-col
                md="4"
                cols="12"
                v-for="(sec1, i) in sec1_data"
                :key="i"
                class="px-sm-5 py-sm-1 pa-0 pa-md-0"
              >
                <v-hover>
                  <template v-slot:default="{ isHovering, props }">
                    <v-card elevation="0" class="rounded-0" v-bind="props">
                      <v-img
                        :src="sec1.img"
                        :style="{ 'align-items': isMobile ? 'center !important' : 'end' }"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        :height="isMobile ? '33vh' : '100vh' || isTab ? '400px' : '100vh'"
                        cover
                        :class="isHovering ? 'sec1-card-img' : ''"
                      >
                        <div class="ml-3" :class="isHovering ? 'sec1-card' : ''">
                          <v-card-title
                            class="text-white text-h4"
                            v-html="sec1.title"
                          ></v-card-title>
                          <div class="mb-7 mt-5" v-if="!isTab">
                            <v-card-text
                              class="d-inline px-1 text-body-2 text-white"
                              v-for="(list, i) in sec1.text"
                              :key="i"
                              ><v-icon style="margin-bottom: 2px" class="mx-2" size="xx-small"
                                >mdi-circle</v-icon
                              >{{ list }}</v-card-text
                            >
                          </div>
                        </div>
                      </v-img>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </div>

          <!-- Section Second Start -->

          <div class="sec2">
            <div class="scrolling-text">
              <p class="headline">
                CUSTOMER EXPERIENCE EXCELLENCE USES THE POWER OF MUSIC STRATEGY AND MUSIC CURATION.
                Find background music with Altaura sound design agency. We have a range of partners
                across the world to create a bespoke sound solution that is greatly appreciated. Get
                access to feature creators via public domain & youtube channel or to free background
                music samples.
              </p>
            </div>
          </div>

          <!-- Section Third Start -->

          <v-card elevation="0" class="sec3">
            <v-card-text>
              <div class="">
                <div class="logo-sec"></div>
                <div class="main-img text-center">
                  <img
                    src="https://assets.website-files.com/6213c4be50f48ef5bd7d5dd7/62244f0c78621209b2277d81_logos_business-amount.svg"
                  />
                  <img
                    class="sub-image"
                    src="https://assets.website-files.com/6213c4be50f48ef5bd7d5dd7/62244e12e99b9856c67620b0_logos_business-txt.svg"
                  />
                </div>
              </div>
            </v-card-text>
          </v-card>

          <!-- Footer Section  Start -->

          <v-card elevation="0" class="footer-sec">
            <v-row>
              <v-col md="10" lg="10" cols="12">
                <v-card elevation="0" class="bg-dark mt-10 pt-15 rounded-te-xl">
                  <v-container>
                    <v-card-title class="mb-3">
                      <h1>Contact</h1>
                    </v-card-title>
                    <v-row class="foo-heading">
                      <v-col>
                        <v-card-title> Paris </v-card-title>
                        <v-card-text>
                          <p>0699399180</p>
                          <p>charles@riveal.fr</p>
                          <div class="d-flex mt-10" v-if="!isMobile">
                            <p class="pr-3">Fb.</p>
                            <p class="pr-3">In.</p>
                            <p>Lk.</p>
                          </div>
                        </v-card-text>
                      </v-col>
                      <v-col>
                        <v-card-title> Toulon </v-card-title>
                        <v-card-text>
                          <p>0660209303</p>
                          <p>florian@riveal.fr</p>
                          <p class="mt-10" v-if="!isMobile">© Copyright -2023</p>
                        </v-card-text>
                      </v-col>
                      <v-col>
                        <v-card-title> Quel est votre besoin ? </v-card-title>
                        <v-card-text>
                          <h1 style="font-size: 40px">
                            Riveal<v-icon size="small">mdi-arrow-top-right</v-icon>
                          </h1>
                          <div v-if="isMobile">
                            <div class="d-flex mt-10">
                              <p class="pr-3">Fb.</p>
                              <p class="pr-3">In.</p>
                              <p>Lk.</p>
                            </div>
                            <p class="mt-sm-10 mt-5">© Copyright -2023</p>
                          </div>
                          <p class="mt-5">Mentions légales - Politique de confidentialité</p>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
              <v-col v-if="!isTab">
                <div class="to-top pb-4">
                  <v-btn size="x-small" href="#top" class="w-100" icon variant="plain" stacked>
                    <v-icon size="xx-large">mdi-arrow-up</v-icon><b>To the top</b>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import dxGrid from '../mixins/dxGrid'
import jsondata from '../assets/data.json'
export default {
  mixins: [dxGrid],
  data: () => ({
    drawer: false,
    group: null,
    tab: null,
    updated: false,
    items: jsondata.items,
    item: jsondata.item,
    item2: jsondata.item2,
    sec1_data: jsondata.sec1_data
  }),

  watch: {
    group() {
      this.drawer = false
    }
  },

  methods: {
    getone(data) {
      // console.log('data', data.text)
      this.sec_name = data.text
      this.sec_img = data.img

      const listItem = data.sub_item
      //  data = listItem
      // console.log(data,'latest')
      this.updatedList = ''
      for (let x in listItem) {
        this.updatedList += '<div><p class="text-body-1 py-1">' + listItem[x].text + '</p></div>'
        document.getElementById('updateList').innerHTML = this.updatedList
      }
      if (this.updatedList.length) {
        // console.log(this.updatedList.length,'lenght')
        this.updated = true
      }
    }
  }
}

let isScrolling = false

window.addEventListener('scroll', function () {
  isScrolling = true
  let scrollTop = window.scrollY
  let direction = scrollTop - lastScrollTop
  let rotateSpeed = 0.1 // Adjust this value to control rotation speed
  // console.log(rotateSpeed,'value')
  lastScrollTop = scrollTop

  if (direction > 0) {
    // console.log('down')

    let element = document.querySelector('.sub-image')
    element.classList.remove('scroll-up')
    element.classList.add('scroll-down')
    element.style.animation = `spindown ${1 / rotateSpeed}s linear infinite`
  } else if (direction < 0) {
    // console.log('Up')

    let element = document.querySelector('.sub-image')
    element.classList.remove('scroll-down')
    element.classList.add('scroll-up')
    element.style.animation = `spinup ${1 / rotateSpeed}s linear infinite`
  } else {
    // Stop animation when scrolling stops
    isScrolling = false
    document.querySelector('.sub-image').style.animation = 'none'
  }

  window.addEventListener('scrollend', function () {
    isScrolling = false
    document.querySelector('.sub-image').style.animation = 'none'
  })
})

let lastScrollTop = 1

// Sec second scroller text

window.onload = function () {
  let scrollDirection = 'up'
  let prevScroll = 0

  window.addEventListener('scroll', () => {
    isScrolling = true
    let currentScroll = window.scrollY
    let direction = currentScroll - lastScrollTop
    // console.log(currentScroll, 'direction')
    lastScrollTop = currentScroll

    if (direction > prevScroll) {
      scrollDirection = 'down'
    } else if (direction < prevScroll) {
      scrollDirection = 'up'
    }
    let scrollvalue = -currentScroll

    if (scrollDirection === 'down') {
      // console.log('working down')
      let headline = document.querySelector('.headline')
      headline.style.transform = `translate3d(${scrollvalue}px,0px,0px)`
    } else if (scrollDirection === 'up') {
      // console.log('working up')
      let headline = document.querySelector('.headline')
      headline.style.transform = `translate3d(${scrollvalue - currentScroll}px,0px,0px)`
    } else {
      // Stop animation when scrolling stops
      isScrolling = false
      document.querySelector('.headline').style.animation = 'none'
    }

    window.addEventListener('scrollend', function () {
      isScrolling = false
      document.querySelector('.headline').style.animation = 'none'
    })
  })

  let lastScrollTop = 1
}
</script>
