<template>
  <div>
    <v-row>
      <v-col>
        <h1>Let's start</h1>
        <div>Lorem ipsum dolor sit amet</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="8">
        <v-stepper v-model="stepNum" vertical>
          <v-stepper-step :complete="stepNum > 1" step="1">
            Basic Information
            <small>Lorem ipsum dolor sit amet</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card elevate="6" class="pa-4">
              <validation-observer ref="basicInfoObserver" v-slot="{ invalid }">
                <form @submit.prevent="goNext">
                  <validation-provider v-slot="{ errors }" name="Company Name" rules="required|max:25|alpha_num">
                    <v-text-field
                      v-model="companyName"
                      label="Company Name"
                      :error-messages="errors"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="Registration Number" rules="required|max:10|min:9">
                    <v-text-field
                      v-model="registrationNo"
                      name="Registration Number"
                      label="Registration Number"
                      :error-messages="errors"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="Industry" rules="required">
                    <v-select
                      v-model="industry"
                      name="Industry"
                      :items="industrySelect"
                      label="Industry"
                      :error-messages="errors"
                      clearable
                      required
                    ></v-select>
                  </validation-provider>
                  <br />
                  <v-btn type="submit" :disabled="invalid"> Next </v-btn>
                  <v-btn text>
                    <nuxt-link to="/enroll" class="text-decoration-none"> Cancel </nuxt-link>
                  </v-btn>
                </form>
              </validation-observer>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="stepNum > 2" step="2">
            Contact Information
            <small>Lorem ipsum dolor sit amet</small>
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card elevate="6" class="pa-4">
              <validation-observer ref="contactInfoObserver" v-slot="{ invalid }">
                <form @submit.prevent="goNext">
                  <v-row>
                    <v-col>
                      <validation-provider v-slot="{ errors }" name="Address Block" rules="required|max:25|alpha">
                        <v-text-field
                          v-model="addressBlock"
                          label="Address Block"
                          name="Address Block"
                          :error-messages="errors"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col>
                      <validation-provider v-slot="{ errors }" name="Address Road" rules="required|max:50">
                        <v-text-field
                          v-model="addressRoad"
                          label="Address Road"
                          name="Address Road"
                          :error-messages="errors"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <validation-provider v-slot="{ errors }" name="Address Unit" rules="required|max:10">
                        <v-text-field
                          v-model="addressUnit"
                          label="Address Unit"
                          name="Address Unit"
                          :error-messages="errors"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col>
                      <validation-provider v-slot="{ errors }" name="Country" rules="required">
                        <v-text-field
                          v-model="country"
                          label="Country"
                          name="Country"
                          :error-messages="errors"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col>
                      <validation-provider v-slot="{ errors }" name="Postal Code" rules="required|numeric|min:6">
                        <v-text-field
                          v-model="postalCode"
                          label="Postal Code"
                          name="Postal Code"
                          :error-messages="errors"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <validation-provider v-slot="{ errors }" name="Office Phone" rules="required|max:8|min:8|numeric">
                        <v-text-field
                          v-model="officePhone"
                          label="Office Phone"
                          name="Office Phone"
                          :error-messages="errors"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col>
                      <validation-provider v-slot="{ errors }" name="Office Email" rules="required|email">
                        <v-text-field
                          v-model="officeEmail"
                          :rules="emailRules"
                          label="Office Email"
                          name="Office Email"
                          :error-messages="errors"
                          required
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <v-btn type="submit" :disabled="invalid"> Next </v-btn>
                  <v-btn text @click="goBack()"> Previous </v-btn>
                </form>
              </validation-observer>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="stepNum > 3" step="3">
            Primary Contact
            <small>Lorem ipsum dolor sit amet</small>
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card elevate="6" class="pa-4">
              <validation-observer ref="privateContactObserver" v-slot="{ invalid }">
                <form @submit.prevent="goNext">
                  <validation-provider v-slot="{ errors }" name="Name" rules="required|max:50|alpha_spaces">
                    <v-text-field
                      v-model="name"
                      label="Name"
                      name="Name"
                      :error-messages="errors"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="E-mail" rules="required|email">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      :error-messages="errors"
                      name="E-mail"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="Phone" rules="required|min:8|max:8|numeric">
                    <v-text-field
                      v-model="phone"
                      label="Phone"
                      name="Phone"
                      :error-messages="errors"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <v-btn type="submit" :disabled="invalid"> Next </v-btn>
                  <v-btn text @click="goBack()"> Previous </v-btn>
                </form>
              </validation-observer>
            </v-card>
          </v-stepper-content>

          <v-stepper-step step="4">
            Webshop Information
            <small>Lorem ipsum dolor sit amet</small>
          </v-stepper-step>
          <v-stepper-content step="4">
            <v-card elevate="6" class="pa-4">
              <validation-observer ref="webshopInfoObserver" v-slot="{ invalid }">
                <form @submit.prevent="submit">
                  <validation-provider v-slot="{ errors }" name="Store Name" rules="required|max:50">
                    <v-text-field
                      v-model="storeName"
                      label="Store Name"
                      name="Store Name"
                      :error-messages="errors"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="Store Domain" rules="required|max:50">
                    <v-text-field
                      v-model="storeDomain"
                      label="Store Domain"
                      name="Store Domain"
                      :error-messages="errors"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider v-slot="{ errors }" name="CMS Domain" rules="required|max:50">
                    <v-text-field
                      v-model="cmsDomain"
                      label="CMS Domain"
                      name="CMS Domain"
                      :error-messages="errors"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <v-btn type="submit" :disabled="invalid"> Next </v-btn>
                  <v-btn text @click="goBack()"> Previous </v-btn>
                </form>
              </validation-observer>
            </v-card>
            <!-- 
                <v-checkbox
                        v-model="checkbox"
                        :rules="[(v) => !!v || 'You must agree to continue!']"
                        label="Do you agree?"
                        required
                    ></v-checkbox>

                    <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="validate"
                    >
                        Validate
                    </v-btn>

                    <v-btn color="error" class="mr-4" @click="reset">
                        Reset Form
                    </v-btn>

                    <v-btn color="warning" @click="resetValidation">
                        Reset Validation
                    </v-btn>
            -->
          </v-stepper-content>
        </v-stepper>
      </v-col>
      <v-col lg="4" class="d-flex justify-center align-center">
        <img :src="basicInfoSvg" class="svg" v-if="stepNum === 1" />
        <img :src="contactInfoSvg" class="svg" v-else-if="stepNum === 2" />
        <img :src="primaryContactSvg" class="svg" v-else-if="stepNum === 3" />
        <img :src="webshopInfoSvg" class="svg" v-else-if="stepNum === 4" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  layout: 'landing-page',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    stepNum: 1,
    name: '',
    email: '',
    phone: '',
    companyName: '',
    registrationNo: '',
    industry: '',
    addressBlock: '',
    addressRoad: '',
    addressUnit: '',
    country: '',
    postalCode: '',
    officePhone: '',
    officeEmail: '',
    storeName: '',
    storeDomain: '',
    cmsDomain: '',
    basicInfoSvg: require('@/assets/svg/svg-basic-info.svg'),
    contactInfoSvg: require('@/assets/svg/svg-contact-info.svg'),
    primaryContactSvg: require('@/assets/svg/svg-primary-contact.svg'),
    webshopInfoSvg: require('@/assets/svg/svg-webshop-info.svg'),
    industrySelect: ['Clothing', 'Automotive', 'Accessories'],
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    goBack() {
      this.stepNum--
    },
    goNext() {
      this.stepNum++
    },
    submit() {
      console.log
    },
  },
}
</script>

<style scoped>
.svg {
  width: 80%;
  margin: 0 auto;
}
</style>