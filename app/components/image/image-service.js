// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});


let _state = {

}

let _subscriber = {


}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())

}
export default class ImageService {
	get image() {
		return _state.imageService

	}

	addsubscriber(prop, fn) {
		_subscriber[prop].push(fn)

	}
	getimage() {
		console.log('calling image')
		_imageApi.get().then(res => {
			_setState('image', new Data(res.data))
		})
	}
}
