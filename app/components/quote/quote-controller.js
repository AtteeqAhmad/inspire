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
            _qs.addSubscriber('quote', drawQuote) //NOTE every method invokation needs to call to a function/method thats defined/exists
            _qs.getQuote()
      }

}
