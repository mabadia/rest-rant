const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                    <img src="/images/circle-stones.jpg" alt="cicle stones photo by unsplash" />
                    <div>
                        Photo by <a href="https://unsplash.com/@robertlukeman">Blake Verdoorn</a> on <a href="https://unsplash.com/photos/_RBcxo9AU-U">Unsplash</a>
                    </div>
                </div>
          </main>
      </Def>
    )
  }
module.exports = error404
