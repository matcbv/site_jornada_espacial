// ---------- HTML ELEMENTS ----------

const editProfileMain = document.querySelector('.edit-profile-main')

const profileImgEdit = document.querySelector('.profile-img-edit')
const saveImgEditButton = document.querySelectorAll('.save-img-edit-button')
const bioTextarea = document.querySelector('.bio-textarea')
const caractersSpan = document.querySelector('.caracters-span')

// ---------- EVENTOS DA SEÇÃO DE EDIÇÃO DO PERFIL ----------

if (editProfileMain){
    const iconImagesEdit = profileImgEdit.querySelectorAll('img')
    if(iconImagesEdit){
        iconImagesEdit.forEach(element => {
            element.addEventListener('click', () =>{
                iconImagesEdit.forEach(img => {
                    if(img.classList.contains('outline-icons')){
                        img.classList.remove('outline-icons')
                    }
                })
                element.classList.add('outline-icons')
                sessionStorage.setItem('profileImg', element.id)
            })
        });
    }

    // ---------- BOTÃO DE ATUALIZAR IMAGEM ----------

    saveImgEditButton.forEach(element => {
        element.addEventListener('click', () => {
            window.location.href = `/profileImg/${sessionStorage.getItem('profileImg')}`
        })
    })

    // ---------- EVENTOS PARA ATUALIZAÇÃO DA ÁREA DE TEXTO DA BIO ----------
    
    caractersSpan.innerHTML = Array.from(bioTextarea.value).length

    bioTextarea.addEventListener('keydown', () => {
        caractersSpan.innerHTML =  Array.from(bioTextarea.value).length
    })

    bioTextarea.addEventListener('keyup', () => {
        caractersSpan.innerHTML =  Array.from(bioTextarea.value).length
    })
}


