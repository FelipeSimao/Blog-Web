
var img = document.querySelector('#like')

img.addEventListener('click', like)
var validation = true

//like

function like(){

    if(validation){
        img.src = 'redHeart.png'
        validation = false

        return

    }else{
        img.src = 'purpleHeart.png'
        validation = true
    }

}
