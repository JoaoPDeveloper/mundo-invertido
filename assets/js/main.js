import { getHellfireClubSubscriptions, subscribeToHellFireClub } from "./firebase/hellfire-club.js";

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const txtPassword = document.getElementById('txtPassword')

const btnSubscribe = document.getElementById('btnSubscribe')

const subscriptionsList = document.getElementById('subscriptions')

btnSubscribe.addEventListener('click', async () =>{
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        password: txtPassword.value,
        Character: txtCharacter.value
    }
    const subscriptionId = await subscribeToHellFireClub(subscription)
    console.log(`Inscrito com Sucesso: ${subscriptionId}`)
    
   txtName.value = ''
   txtEmail.value = ''
   txtLevel.value = ''
   txtCharacter.value = ''
   txtPassword.value = ''

   alert(` Inscrição feita com sucesso Seu ID é: ${subscriptionId}!`)
})
async function loadData() {  
    const subscriptions = await getHellfireClubSubscriptions()
    subscriptionsList.innerHTML = subscriptions.map(sub => `
    <li>
    ${sub.name}
    </li> `
    ).join('')
    console.log(subscriptions)
}
loadData()