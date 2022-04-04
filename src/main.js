const test = document.querySelector('#myBtn')
test.addEventListener('click', () => {
    swal.fire({
        imageUrl: 'data:image/jpeg;base64,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',
        title: 'Mmm parece que te gusta el chocolate...',
        text: 'Tu café ideal es el Moka',
        confirmButtonText: 'Ve a por ello!'
    })
})

const reservar = document.querySelector('#myBtnTwo')
reservar.addEventListener('click', () => {
    swal.fire({
        icon: 'success',
        title: 'Tu espacio ideal',
        text: 'Reserva fácil y rápido por whatsapp',
        confirmButtonText: '3513457890'


    })
})