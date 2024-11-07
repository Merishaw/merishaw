export default defineEventHandler(async(event)=>{
    const url = "https://register-7bma2dwtdq-uc.a.run.app/register";
    //const url = "http://127.0.0.1:5001/merishaw-3b844/us-central1/register";
    const body = getQuery(event);
    const msg = await $fetch(url,
        {
            method: 'get',
            params: {
                'firstName': body.firstName,
                'lastName': body.lastName,
                'phone': body.phone,
                'email': body.email
            }
        }
    );
    const resp = JSON.stringify(msg);
    return resp;
})