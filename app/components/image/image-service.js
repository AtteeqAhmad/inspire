// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});


let _state = {
	image: {},

}

let _subscriber = {
	image: [],
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())

}
export default class ImageService {
	get Image() {
		return _state.imageService

	}

	addsubscriber(prop, fn) {
		_subscriber[prop].push(fn)

	}
	getimage() {
		_imageApi.get().then(res => {
			_setState('image', new Image(res.data))
			console.log('calling image')
		})
	}
}
