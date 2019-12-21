const subscribeButton = document.getElementById('subscribe')
const modal = document.getElementById('modal')
const modalBody = document.getElementById('modalBody')
const modalOk = document.getElementById('modalOk')
const cross = document.getElementById('cross')

function toggleModal() {
    modal.classList.toggle('show')
}

subscribeButton.addEventListener('click', () => toggleModal())

modal.addEventListener('click', function(event) {

        switch (event.target) {

            case modal: toggleModal(); break
            case modalOk: toggleModal(); break
            case cross: toggleModal(); break
            
            default: break
    }
})