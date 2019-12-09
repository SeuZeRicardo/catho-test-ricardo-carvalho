<template>
  <div class="offerbox">
    <header class="offerbox__title">
      <h2>Veja as bolsas disponíveis no momento</h2>
    </header>
    <div class="offerbox__content">
      <div class="form-course">
        <div class="select-icon">
          <icon class="arrow" name="chevron-down"></icon>
        </div>
        <select v-model="selectedId">
          <option v-for="(item, index) in course.shifts" :value="item.id" :key="item.id">{{ course.deliveryMode }} -
            {{item.name}} ({{ course.offers[index].discountPercentage }}%)</option>
        </select>
      </div>
      <InfoBox :info="offerSelected" />
    </div>
    <hr class="spacer" />
    <div class="offerbox__footer">
      <p>Para acessar o regulamento, <a href="#">clique aqui</a></p>
    </div>
    {{isMobile}}
  </div>
</template>

<script>
import InfoBox from './InfoBox.vue'

import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'Offerbox',

  components: {
    InfoBox,
    Icon
  },
  props: {
    course: Object
  },
  data () {
    return {
      selectedId: '',
      offerSelected: null
    }
  },

  watch: {
    selectedId: {
      deep: true,
      handler () {
        this.searchOffer()
      }
    }
  },

  created () {
    this.defaultOffer()
    this.searchOffer()
  },

  methods: {
    // Inicialize the first offer in array
    defaultOffer () {
      this.selectedId = this.course.shifts[0].id
    },

    // Match the id offer with the shift id
    searchOffer () {
      const index = this.course.offers.filter(obj => obj.shiftId === this.selectedId)
      this.offerSelected = index[0]
    }
  }
}

</script>

<style lang="scss" scoped>
  $mobile: 375px;
  $desktop: 1440px;

  $green: #88c425;
  $pink: #d31e7f;
  $blue: #0066c0;
  $dark-grey: #666666;
  $light-grey: #9b9b9b;

  .offerbox {
    border: 1px solid $light-grey;
    border-radius: 5px;
    max-width: 470px;
    width: 100%;
    background: white;
    border-bottom: 3px solid #ffcd7a;
    max-width: 470px;

    &__title {
      background-color: $green;
      padding: 8px;

      h2 {
        text-align: center;
        color: white;
        font-size: 20px;
        font-weight: 500;
        line-height: 18px;
      }
    }

    &__content {
      margin: 25px;
    }

    &__footer {
      margin: 0 20px;

      p {
        font-size: 15px;
        font-weight: 500;
        color: $light-grey;
      }

      a {
        font-weight: bold;
        text-decoration: none;
      }
    }
  }

  .form-course {
    position: relative;

    .select-icon {
      width: 15px;
      position: absolute;
      top: 15px;
      right: 15px;
      color: grey;
    }

    select {
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
      color: #666666;
      margin-bottom: 0;
      background: transparent;
      border: 1px solid #d5d5d5;
      padding: 12px;
      border-radius: 6px;
      outline: none;
      text-transform: capitalize;
      appearance: none;

      option {
        color: black;
      }
    }

  }

  .spacer {
    color: $light-grey;
    opacity: .5;
  }

  @media (max-width: $mobile) {
    .spacer,
    select,
    .select-icon,
    .offerbox__title,
    .offerbox__footer {
      display: none;
    }

    .offerbox {
      border-bottom: none;
      border: 1px solid $light-grey;
      border-radius: 0;
      border-top: 3px solid $green;
    }
  }

</style>
