<template>
    <div>
        <theme-button></theme-button>
        <v-stepper v-model="stepNum" vertical>
            <v-stepper-step :complete="stepNum > 1" step="1">
                Basic Information
                <small>Lorem ipsum dolor sit amet</small>
            </v-stepper-step>

            <v-stepper-content step="1">
                <v-card elevate="6" class="pa-4">
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                            v-model="companyName"
                            label="Company Name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="registrationNo"
                            label="Registration Number"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="industry"
                            label="Industry"
                            required
                        ></v-text-field>
                        <v-btn color="primary" @click="stepNum = 2">
                            Continue
                        </v-btn>
                        <v-btn text> Cancel </v-btn>
                    </v-form>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="stepNum > 2" step="2">
                Contact Information
                <small>Lorem ipsum dolor sit amet</small>
            </v-stepper-step>

            <v-stepper-content step="2">
                <v-card elevate="6" class="pa-4">
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="addressBlock"
                                    label="Address Block"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field
                                    v-model="addressRoad"
                                    label="Address Road"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="addressUnit"
                                    label="Address Unit"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field
                                    v-model="country"
                                    label="Country"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field
                                    v-model="postalCode"
                                    label="Postal Code"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="officePhone"
                                    label="Office Phone"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field
                                    v-model="officeEmail"
                                    :rules="emailRules"
                                    label="Office Email"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-btn color="primary" @click="stepNum = 3">
                            Continue
                        </v-btn>
                        <v-btn text> Cancel </v-btn>
                    </v-form>
                </v-card>
            </v-stepper-content>

            <v-stepper-step :complete="stepNum > 3" step="3">
                Primary Contact
                <small>Lorem ipsum dolor sit amet</small>
            </v-stepper-step>

            <v-stepper-content step="3">
                <v-card elevate="6" class="pa-4">
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            label="Name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="phone"
                            label="Phone"
                            required
                        ></v-text-field>
                        <v-btn color="primary" @click="stepNum = 4">
                            Continue
                        </v-btn>
                        <v-btn text> Cancel </v-btn>
                    </v-form>
                </v-card>
            </v-stepper-content>

            <v-stepper-step step="4">
                Webshop Information
                <small>Lorem ipsum dolor sit amet</small>
            </v-stepper-step>
            <v-stepper-content step="4">
                <v-card elevate="6" class="pa-4">
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                            v-model="storeName"
                            label="Store Name"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="storeDomain"
                            label="Store Domain"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="cmsDomain"
                            label="CMS Domain"
                            required
                        ></v-text-field>
                        <v-btn color="primary"> Create </v-btn>
                        <v-btn text>
                            <nuxt-link
                                to="/enroll"
                                class="text-decoration-none"
                            >
                                Cancel
                            </nuxt-link>
                        </v-btn>
                    </v-form>
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
    </div>
</template>

<script>
import ThemeButton from '@/components/ThemeButton'

export default {
    components: {
        ThemeButton,
    },
    data: () => ({
        stepNum: 1,
        valid: true,
        name: '',
        nameRules: [
            (v) => !!v || 'Name is required',
            (v) =>
                (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            (v) => !!v || 'E-mail is required',
            (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
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
    },
}
</script>