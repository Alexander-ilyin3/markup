const subscribeButton = document.getElementById('subscribe')
const modal = document.getElementById('modal')
const modalBody = document.getElementById('modalBody')
const modalOk = document.getElementById('modalOk')
const cross = document.getElementById('cross')

subscribeButton.addEventListener('click', showModal)

modalBody.addEventListener('blur', () => {
        console.log(event)
        modal.classList.remove('show')
    })
    
function showModal() {
    console.log(modal)

    modal.classList.add('show')

    modalBody.focus()

    
}

