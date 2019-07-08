import Quote from "../../models/quote.js";


// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {

}

let _subscriber = {

}

function _setState(prop, data) {
	_state[prop] = data
	_subscriber[prop].forEach(fn => fn());
}

export default class QuoteService {
	get Quote() {
		return _state.quote

	}

	addSubscriber(prop, fn) {
		_subscriber[prop].push(fn)
	}

	getQuote() {
		console.log('quote')
		_quoteApi.get().then(res => {
			_setState('quote', new Quote(res.data))
		})
	}
}

