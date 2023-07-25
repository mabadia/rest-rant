const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>Rest-Rant</h1>
                <div>
                    <img src="/images/waterfall.jpg" alt="waterfall photo by unsplash" />
                    <div>
                        Photo by <a href="https://unsplash.com/@blakeverdoorn">Blake Verdoorn</a> on <a href="https://unsplash.com/photos/cssvEZacHvQ">Unsplash</a>
                    </div>
                </div>
            
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            

            </main>
        </Def>
    )
}

module.exports = home