$(document).ready(function () {
    const imgs = [
        "https://cdn1.cycletrader.com/v1/media/5ffaa769f38d0430b65d4096.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn2.cycletrader.com/v1/media/5ffaa769f38d0430b65d4097.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn2.cycletrader.com/v1/media/5ffaa76af38d0430b65d4098.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/600a5d639fae190ffc7dcfe5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/600a5d639fae190ffc7dcfe5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true", 
        "https://cdn1.cycletrader.com/v1/media/600a5d639fae190ffc7dcfe6.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/600a5d639fae190ffc7dcfe5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",

    ]

    imgs.forEach((img, index) => {
        $('.imgContainer').append(`<img class="imgs" id="img-${index}" src="${img}" alt="img" />`)
        
    })

    const initialPosition = 0
    console.log('initial: ' + initialPosition)
    let currentPosition = $('.imgContainer').position().left
    let imgWidth = $('.imgs').width()
    const padding = 20

    //MOVE IMG WHEN THE NEXT OR PREV BTNS ARE PRESSED
    const slideImgs = () => {
        $('.prev').on('click', function () {
            currentPosition = currentPosition + (imgWidth + padding)
            if (currentPosition >= initialPosition) {
                currentPosition = -( ( $('.imgs').length - 1 ) * ( (imgWidth) + padding ) )
            }
            $('.imgContainer').transition({ x:`${currentPosition}px`}, 500)
        })

        $('.next').on('click', function () {
            currentPosition = currentPosition - (imgWidth + padding)
            if ( currentPosition < -( $('.imgs').length * (imgWidth)) ) {
                currentPosition = 0
            }
            $('.imgContainer').transition({ x:`${currentPosition}px`}, 500)
        })

        

    }

    slideImgs()
    
})

