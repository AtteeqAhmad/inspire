import Quote from "../../models/quote.js";


// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	// TODO add the property that you'll want to save the value of here
}

let _subscriber = {
	// TODO add the property that you'll want to save the value of here
}

function _setState(prop, data) {
	_state[prop] = data
	//_subscriber[prop].forEach(fn => fn()); //NOTE uncomment this once above TODO in the subscriber is complete
}

export default class QuoteService {
	get Quote() {
		return _state.quote

	}

	addSubscriber(prop, fn) {
		// _subscriber[prop].push(fn) NOTE uncomment this once above TODO in the subscriber is complete
	}

	getQuote() {
		console.log('quote')
		_quoteApi.get().then(res => {
			_setState('quote', new Quote(res.data))
		})
	}
}

