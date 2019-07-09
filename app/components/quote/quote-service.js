import Quote from "../../models/quote.js";


// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: [],
	// TODO add the property that you'll want to save the value of here
}

let _subscribers = {
	quote: [],
	// TODO add the property that you'll want to save the value of here
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
	//_subscriber[prop].forEach(fn => fn()); //NOTE uncomment this once above TODO in the subscriber is complete
}

export default class QuoteService {
	get Quote() {
		return _state.quote

	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getQuote() {
		_quoteApi.get().then(res => {
			let newQuote = new Quote(res.data)
			_setState('quote', newQuote)
			console.log('quote')
		})
	}
}

