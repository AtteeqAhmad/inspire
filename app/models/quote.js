export default class Quote {
      constructor(data) {
            this.author = data.quote.author
            this.body = data.quote.body
            console.log('quote working', data)
      }

      get Template() {
            return
            `
            <h3>${this.body}</h3>
            <h3>${this.author}</h3>

            `
      }
}