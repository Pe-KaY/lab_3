const slider = () => {
  // variables

  // images
  const images = Array.from(document.querySelectorAll(".pics"))
  // lightbox image
  const lightBoxImg = document.querySelector(".lightbox-pic")
  //   lightbox display
  const fullScreenImg = document.getElementById("bigimg")

  //   lightbox trigger element( in this case the Body based on inview attribute)
  const trigger = document.querySelector("body")
  // next buton
  const nextBtn = document.getElementById("next")
  //   previous button
  const prevBtn = document.getElementById("previous")

  //   will be used to fetch images based on index
  let currentImgIndex = 0

  // open lightbox function
  const openLightbox = (e) => {
    const img = e.target
    // fetch image from the array of images
    const index = images.indexOf(img)
    // fetxh image scr from images array
    const imgsrc = images[index].getAttribute("src")
    // set current image index
    currentImgIndex = index
    // trigger the lightbox
    trigger.toggleAttribute("inview")
    // display the image in the lightbox
    fullScreenImg.src = imgsrc
  }

  //   next image function
  const nextImg = () => {
    // if it currently thje last image then switch to first
    if (currentImgIndex === images.length - 1) {
      currentImgIndex = -1
    }
    // set the next img index
    currentImgIndex++
    //
    //fetches next img
    const nextPic = images[currentImgIndex].getAttribute("src")
    // display next image
    fullScreenImg.src = nextPic
  }

  //   previous image function
  const prevImg = () => {
    // if it currently the first image then switch to last(unlimited scrolling)
    if (currentImgIndex === 0) {
      currentImgIndex = images.length
    }

    // set the next img index
    currentImgIndex--
    //fetches next img
    const prevPic = images[currentImgIndex].getAttribute("src")
    // display next image
    fullScreenImg.src = prevPic
  }

  //   adding lightbox eventlisteners to images(toggles lightbox on and off on click)
  images.forEach((i) => i.addEventListener("click", openLightbox))

  // add eventlistener to lightbox in view images(toggles lightbox on an off on click)
  lightBoxImg.addEventListener("click", () => {
    trigger.toggleAttribute("inview")
  })

  //   adding event lister to the next button
  nextBtn.addEventListener("click", nextImg)

  //   adding event listener to previous button
  prevBtn.addEventListener("click", prevImg)
}

export default slider
