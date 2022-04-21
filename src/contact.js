const contact = document.querySelector('#myBtnThree')
contact.addEventListener('click', () => {
    swal.fire({
        icon: 'success',
        title: 'Your ideal spot',
        text: 'Book easily and quickly by whatsapp: 3513457890',
        confirmButtonText: 'Done'


    })
})