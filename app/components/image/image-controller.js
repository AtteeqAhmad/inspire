import ImageService from "./image-service.js";

const _imageService = new ImageService()


function drawImage() {
      let image = _imageService.image
      let imageElem = document.querySelector('#bg-image')
      imageElem.innerHTML = image.Template
      console.log("image controller works", _imageService.image)
}

export default class ImageController {
      constructor() {
            _imageService.addsubscriber('image', drawImage)
            _imageService.Image
      }

}

