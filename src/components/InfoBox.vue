<template>
  <div class="infobox">
    <div class="offer-price">
      <div class="highlight">
        <span class="text">BOLSA DE</span>
        <span class="percentage">{{ info.discountPercentage }}%</span>
      </div>
      <div class="details">
        <span class="text">Valor da </span>
        <span class="text">Mensalidade</span>
        <div class="price-text">
          <span class="before-discount">De <span class="full-price"
              v-html="this.currencyFilter(info.valueBeforeDiscount)">
            </span><span class="discount-percentage xs-visible">BOLSA DE {{ info.discountPercentage }}%</span>
          </span>
          <span class="after-discount">Por <span class="discount-price"
              v-html="this.currencyFilter(info.valueAfterDiscount)"></span></span>
        </div>
      </div>
    </div>
    <div class="buy-offer">
      <button class="btn-buy" type="button"><span class="lg-visible">COMPRAR DESCONTO</span><span class="xs-visible">EU
          QUERO</span></button>
    </div>
    <div class="offer-alert">
      <span v-if="stockAdviceIsVisible()">
        <icon class="icon" name="regular/clock"></icon>Restam apenas {{info.leftInStock}} bolsas
      </span>
    </div>
    <hr class="spacer" />
    <div class="benefits">
      <span class="title">Benefícios:</span>
      <ul class="list">
        <li class="list__item" v-for="highlights in info.highlights" :key="highlights">
          <icon class="icon" name="check"></icon> {{ highlights }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'InfoBox',
  components: {
    Icon
  },
  props: {
    info: Object
  },
  data () {
    return {
      stockAlert: false
    }
  },

  methods: {
    // Display the currency to Brazilian Money
    currencyFilter (value) {
      return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
    },

    // State Advice
    stockAdviceIsVisible () {
      return this.info.leftInStock <= 3
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
  $red: #D00523;

  .infobox {
    .offer-price {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      .highlight {
        border-radius: 5px;
        border: 1px solid $green;
        width: 50%;
        display: inline-block;
        padding: 10px 0 5px;
        text-align: center;
        margin: 5px 0;
        min-height: 55px;
        margin-right: 20px;

        .text {
          color: $green;
          font-size: 14px;
          width: 100%;
          display: block;
          font-weight: 600;
        }

        .percentage {
          color: $green;
          font-size: 32px;
          width: 100%;
          display: block;
          font-weight: 600;
        }
      }

      .details {
        width: 50%;
        display: inline-block;
        text-align: left;
        min-height: 55px;
        padding-top: 20px;

        .text {
          color: $light-grey;
          font-size: 17px;
          width: 100%;
          display: block;
          font-weight: 600;
        }

        .price-text {
          width: 100%;
          display: block;

          .full-price {
            text-decoration: line-through;
          }

          .before-discount {
            margin-bottom: 5px;
          }

          .discount-price {
            font-size: 20px;
          }

          .before-discount,
          .after-discount {
            font-weight: 600;
            font-size: 17px;
            color: $light-grey;
            width: 100%;
            display: block;
          }
        }
      }
    }

    .btn-buy {
      background-color: $pink;
      color: white;
      border-radius: 25px;
      width: 100%;
      height: 50px;
      display: block;
      text-align: center;
      text-decoration: none;
      margin: 10px 0;
      border: none;
      min-width: 100px;
      font-weight: 700;
      font-size: 16px;
    }

    .offer-alert {
      color: $red;
      font-weight: 700;
      text-align: center;
      margin-top: 5px;
      min-height: 25px;

      .fa-icon {
        margin-bottom: -2px;
        padding: 0 5px;
      }
    }

    .benefits {
      margin-top: 20px;

      .title {
        font-weight: 600;
        font-size: 20px;
        color: $dark-grey;
      }

      .list {
        padding: 0;

        .icon {
          width: 16px;
          color: $green;
          display: inline-block;
          margin-right: 7px;
        }

        &__item {
          list-style-type: none;
          font-size: 15px;
          font-weight: 500;
          line-height: 15px;
          color: $dark-grey;
          margin-bottom: 7px;
        }
      }
    }
  }

  .spacer {
    color: $light-grey;
    opacity: .5;
  }

  .xs-visible {
    display: none !important;
  }

  .lg-visible {
    display: block !important;
  }

  @media (max-width: $mobile) {

    .xs-visible {
      display: block !important;
    }

    .lg-visible {
      display: none !important;
    }

    .spacer,
    .offer-alert {
      display: none;
    }

    .offerbox {
      border-bottom: none;
      border: 1px solid $light-grey;
      border-radius: 0;
      border-top: 3px solid $green;
    }

    .infobox {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .benefits {
        display: none;
      }

      .offer-price {
        .highlight {
          display: none;
        }

        .details {
          width: 100%;
          padding-top: 0;

          .text {
            font-size: 11px;
            display: inline;
          }

          .price-text {
            .before-discount {
              font-size: 11px;
              display: inline-block;
            }

            .after-discount {
              font-size: 16px;
              font-weight: 700;
              display: inline-block;
              color: $dark-grey;
            }

            .discount-price {
              font-size: 14px;
            }

            .discount-percentage {
              color: $green;
              font-weight: 700;
              margin-left: 10px;
              display: inline !important;
            }
          }
        }
      }

      .btn-buy {
        width: 100%;
        height: 35px;
        border-radius: 18px;
        font-size: 13px;
        min-width: 100px;
      }
    }
  }

</style>
