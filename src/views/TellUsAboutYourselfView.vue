<template>
  <div class="tell-us-wrapper">
    <div class="content-wrapper">
      <h2>Tell us about yourself</h2>

      <div class="input-block">

        <p>Name</p>
        <input placeholder="Name" type="text" v-model="name" />

        <p>Age</p>
        <input placeholder="Age" type="number" v-model="age" />

        <p>Where do you live</p>

        <select @change="selectCountry($event)">
          <option v-for="(country, i) in countries" :key="i" :value="country.name" :disabled="country.disabled" :selected="country.selected">{{ country.name }}</option>
        </select>
      </div>

      <div class="content-block">

        <div v-for="plan in plans" class="radio-block">
          <input type="radio" :id="plan.price" :value="plan" v-model="selectedPlan" @change="selectPlan()" />
          <label :for="plan.id">{{ plan.name }} <span v-if="plan.price != 0 && age && selectedCountry['rate']"> (+{{ 10 * age * selectedCountry['rate'] * plan.price / 100 }}{{ selectedCountry['currency'] }}, {{ plan.price }}%)</span> </label>
        </div>

        <h3>Your Premium is: <span v-if="age && totalPremium">{{ totalPremium }} {{ selectedCountry['currency'] }}</span></h3>

        <button-global class="white" link="/" label="Back"/>

        <button type="button" name="button" class="button black" @click="next()">
          <a>Next</a>
        </button>

        <div class="error" v-if="error">
          {{ error }}
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import ButtonGlobal from '@/components/ButtonGlobal.vue'
export default {
  components: {
    ButtonGlobal
  },
  data() {
    return {
      error: null,
      countries: [
        {
          name: "Select Country",
          selected: true,
          currency: "HKD",
          rate: 1
        },
        {
          name: "Hong Kong",
          selected: false,
          currency: "HKD",
          rate: 1
        },
        {
          name: "USA",
          selected: false,
          currency: "USD",
          rate: 2
        },
        {
          name: "Australia",
          selected: false,
          currency: "AUD",
          rate: 3
        }
      ],
      plans: [
        {
          name: "Standard",
          value: "standard",
          price: 0
        },
        {
          name: "Safe",
          value: "safe",
          price: 50
        },
        {
          name: "Super Safe",
          value: "supersafe",
          price: 75
        }
      ],
      totalPremium: null,
      selectedCountry: {},
      selectedPlan: null,
      name: null,
      age: null
    };
  },
  methods: {
    next() {
      this.error = null

      if(this.age > 100) {
        this.$router.push({ path: '/error' })
        return
      }

      if(this.age && this.name && this.selectedCountry.name && this.selectedPlan && this.totalPremium) {
        let params = {
          name: this.name,
          age: this.age,
          live: this.selectedCountry.name,
          package: this.selectedPlan.name,
          premium: this.totalPremium
        }

        this.$router.push({ path: '/summary', query: params })
      } else {
        this.error = "Please select all options"
      }

    },
    selectPlan() {
      this.totalPremium = 10 * this.age * this.selectedCountry['rate']
      this.totalPremium = this.totalPremium + this.totalPremium * this.selectedPlan.price / 100;
    },
    selectCountry(event) {
      this.selectedCountry = this.countries[event.target.options.selectedIndex]
    }
  }
};
</script>

<style scoped>
.tell-us-wrapper {
  background-color: #fff;
  /* text-align: center; */
}

.content-wrapper {
  padding: 75px;
  text-align: center;
}

h2 {
  font-weight: bold;
  font-size: 28px;
}

h3 {
  margin: 50px;
  font-weight: bold;
}

h3 span {
  margin: 50px;
  margin-left: 10px;
  font-weight: bold;
}

p {
  font-size: 14px;
}

.input-block {
  text-align: left;
  width: 30%;
  margin: auto;
  padding-top: 15px;
}

.input-block input, .input-block select {
  width: 100%;
  margin-bottom: 15px;
  padding: 8px 5px;
  border: 1px solid #bebeb6;
  border-radius: 3px;
}

.content-block {
  background-color: #fafafa;
  padding: 25px 120px;
}

.radio-block {
  text-align: left;
  margin: 10px 24%;
  font-size: 13px;
}

.radio-block input {
  margin-right: 6px;
}

.error {
  color: red;
}

</style>
