import image1 from "../../images/image1.png"
import image2 from "../../images/image2.png"
import image3 from "../../images/image3.png"
import image4 from "../../images/image4.png"
import image5 from "../../images/image5.png"
import image6 from "../../images/image6.png"
import image7 from "../../images/image7.png"
import image8 from "../../images/image8.png"
import image9 from "../../images/image9.png"
import image10 from "../../images/image10.png"
import image11 from "../../images/image11.png"
import image12 from "../../images/image12.png"
import image13 from "../../images/image13.png"
import image14 from "../../images/image14.png"
import image15 from "../../images/image15.png"
import image16 from "../../images/image16.png"
import image17 from "../../images/image17.png"
import slider from "./slider"

const dynamicImages = () => {
  // gallery display element
  const display = document.getElementById("container")

  // store imported images in an array
  const images = [
    { src: image1, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image2, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image3, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image4, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image5, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image6, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image7, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image8, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image9, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image10, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image11, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image12, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image13, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image14, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image15, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image16, captionHead: `Model`, caption: `Portrait by a model` },
    { src: image17, captionHead: `Model`, caption: `Portrait by a model` },
  ]

  display.innerHTML = images
    .map(({ src, captionHead, caption }, i) => {
      const animnum = Math.floor(Math.random() * 2 + 1)
      return `<figure class="img-${i + 1} anim${animnum}">
        <img class="pics" src=${src} alt="gallery img" />
        <figcaption>
          <h1>${captionHead}</h1>
          <p>${caption}</p>
        </figcaption>
      </figure>`
    })
    .join("")

  slider()
}

export default dynamicImages
