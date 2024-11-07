<template>
    <div>

        <Head>
            <Title>Merishaw School</Title>
        </Head>
        <div class="mt-8 px-8">
            <form class="flex flex-col items-center">
                <p class="greeting">Hi there!</p>
                <p class="regular-text my-8">Thank you for showing interest in us. Please fill out the form below to
                    stand a chance of winning a gift from us.</p>
                <input name="firstName" type="text" placeholder="First Name" class="input-decor"
                    v-model.trim="firstName" @input="updateFirstName">
                <input name="lastName" type="text" placeholder="Last Name" class="input-decor" v-model.trim="lastName"
                    @input="updateLastName">
                <input name="phone" type="text" placeholder="Phone (eg 0731303350)" class="input-decor" v-model.trim="phone"
                    @input="updatePhone">
                <input name="email" type="email" placeholder="Email (Optional)" class="input-decor" v-model.trim="email"
                    @input="updateEmail">
            </form>
            <div class="flex flex-col items-center justify-center">
                <div v-if="submitting == false">
                    <button class="btn" @click="submitDetails">
                        <div class="btn-text">Submit</div>
                    </button>
                </div>
                <div v-else>
                    <button class="loading-btn" @click="">
                        <div class="btn-text">Submitting</div>
                    </button>
                </div>
                <div v-if="displaying == true" class="mt-4 bg-gray-400/15 rounded-2xl p-2">
                    <div>{{ resp }}</div>
                </div>
                <div v-else></div>
                <div class="h-12"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
let resp = ref('');
let submitting = ref(false);
let displaying = ref(false);

const firstName = ref('');
const lastName = ref('');
const phone = ref('');
const email = ref('');

const submitDetails = async () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
    if (firstName.value.length >= 3 && lastName.value.length >= 3 && phone.value.length == 10) {
        submitting.value = true;
        const send = await useFetch("/api/submit",
            {
                method: 'get',
                params: {
                    "firstName": firstName.value,
                    "lastName": lastName.value,
                    "phone": phone.value,
                    "email": email.value
                }
            });
        submitting.value=false;
        const msg = JSON.stringify(send);
        console.log(msg);
        if (msg.includes("success")){
            resp.value="Thank you for your participation! You will receive further instructions via sms.";
        }else{
            resp.value="Oops! Seems something went wrong. Please try again later.";
        }
        displaying.value = true;
        setTimeout(() => {
            displaying.value = false;
            firstName.value = '';
            lastName.value = '';
            phone.value = '';
            email.value = '';
            submitting.value = false;
            resp.value = '';
        }, 5000);
    }
    if (firstName.value.length < 3 || lastName.value.length < 3) {
        resp.value = 'Please double check your name';
        displaying.value = true;
        setTimeout(() => {
            displaying.value = false;
            resp.value = '';
        }, 5000);
    }
    if (phone.value.length < 10 || phone.value.length > 10) {
        resp.value = 'Ensure your phone number is 10 digits';
        displaying.value = true;
        setTimeout(() => {
            displaying.value = false;
            resp.value = '';
        }, 5000);
    }
}

function updateFirstName(event: any) {
    firstName.value = event.target.value;
}

function updateLastName(event: any) {
    lastName.value = event.target.value;
}

function updatePhone(event: any) {
    phone.value = event.target.value;
}

function updateEmail(event: any) {
    email.value = event.target.value;
}
</script>
