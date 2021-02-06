$(document).ready(function () {
    const imgs = [
        "https://cdn1.cycletrader.com/v1/media/5ffaa769f38d0430b65d4096.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn2.cycletrader.com/v1/media/5ffaa769f38d0430b65d4097.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn2.cycletrader.com/v1/media/5ffaa76af38d0430b65d4098.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/600a5d639fae190ffc7dcfe5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/600a5d639fae190ffc7dcfe5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true", 
        "https://cdn1.cycletrader.com/v1/media/600a5d639fae190ffc7dcfe6.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn1.cycletrader.com/v1/media/600a5d639fae190ffc7dcfe5.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
        "https://cdn2.cycletrader.com/v1/media/60090bf404376a462478165c.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true"

    ]

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // PHOTOSCROLLER//////////////////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    imgs.forEach((img, index) => {
        $('.imgContainer').append(`<img class="scr-imgs" id="img-${index}" src="${img}" alt="img" />`)
    })

    let currentPosition = $('.imgContainer').position().left
    let imgWidth = $('.scr-imgs').width()
    const padding = 20

    //MOVE IMG WHEN THE NEXT OR PREV BTNS ARE PRESSED
    const slideImgs = () => {
        $('.scroller-prev').on('click', function () {
            currentPosition = currentPosition + (imgWidth + padding)
            if (currentPosition >= 0) {
                currentPosition = -( ( $('.scr-imgs').length - 1 ) * ( (imgWidth) + padding ) )
            }
            $('.imgContainer').transition({ x:`${currentPosition}px`}, 500)
        })

        $('.scroller-next').on('click', function () {
            currentPosition = currentPosition - (imgWidth + padding)
            if ( currentPosition < -( $('.scr-imgs').length * (imgWidth)) ) {
                currentPosition = 0
            }
            $('.imgContainer').transition({ x:`${currentPosition}px`}, 500)
        })
    }

    slideImgs()





    
    
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CAROUSEL////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let currentIndex = 0

    $('.indicator-div').prepend(`<div class="img-num-indicater">📷 ${currentIndex + 1}/${imgs.length}</div>`)


    imgs.forEach((img, index) => {
        $('.carouselImgContainer').append(`<img class="car-imgs" id="car-img-${index}" src="${img}" alt="img" />`)
    })

    const loopImgs = () => {

        $('.car-imgs').each(function (index) {

            //IF IMG THE NEXT OR PREVIOUS 
            if (index === currentIndex - 1) {
                $(this).addClass('img-prev')
                $(this).transition({x: -1000}, 'fast')

            } else {
                $(this).removeClass('img-prev')
            }

            if (index === currentIndex + 1) {
                $(this).addClass('img-next')
                $(this).transition({x: 1000}, 'fast')

            } else {
                $(this).removeClass('img-next')

            }
            
            //IF INDEX IS = TO CURRENT INDEX ADD A CLASS OF ACTIVE
            if (currentIndex === index) {
                $(this).addClass('active')
                $(this).transition({x: 0}, 'fast')
            } else {
                $(this).removeClass('active')

            }
        
        })
    }

    loopImgs()

    // NEXT AND PREVIOUS BTNS
    $('.car-prev').on('click', function () {
        currentIndex = currentIndex - 1
        if (currentIndex < 0) {
            currentIndex = $('.car-imgs').length - 1
        }
        $('.img-num-indicater').text(`📷 ${currentIndex + 1}/${imgs.length}`)
        loopImgs()
    })

    $('.car-next').on('click', function () {
        currentIndex = currentIndex + 1
        if (currentIndex >= $('.car-imgs').length) {
            currentIndex = 0
        }
        $('.img-num-indicater').text(`📷 ${currentIndex + 1}/${imgs.length}`)
        loopImgs()
        
    })
    
})


