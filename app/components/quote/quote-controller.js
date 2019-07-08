import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
      let quote = _quoteService.quote
      let quoteElem = document.querySelector('#quote')
      quoteElem.innerHTML = quote.Template
      console.log("quotecontroller works", _qs.quote)
}

export default class QuoteController {
      constructor() {
            _qs.addSubscribers('quote', drawQuote)
            _qs.getQuote()
      }

}
