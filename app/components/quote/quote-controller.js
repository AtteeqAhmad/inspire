import QuoteService from "./quote-service.js";

let _quoteService = new QuoteService()

function drawQuote() {
      let quote = _quoteService.Quote
      let quoteElem = document.querySelector('#quote')
      quoteElem.innerHTML = quote.Template
      console.log("quotecontroller works", _quoteService.Quote)
}

export default class QuoteController {
      constructor() {
            _quoteService.addSubscriber('quote', drawQuote)
            //NOTE every method invokation needs to call to a function/method thats defined/exists
            _quoteService.getQuote()
      }

}
