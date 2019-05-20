import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import NavBar from './components/NavBar'
import CharacterBox from './components/CharacterBox'
import Footer from './components/Footer'

const characterBoxes = [
  {
    imageUrl: 'https://octodex.github.com/images/octobiwan.jpg',
    caption: '#3',
    name: 'the Octobi Wan Catnobi by',
    src: 'https://github.com/cameronmcefee.png'
  },
  {
    imageUrl: 'https://octodex.github.com/images/stormtroopocat.png',
    caption: '#86',
    name: 'Stormtroopocat',
    src: 'https://github.com/jeejkang.png'
  },
  {
    imageUrl: 'https://octodex.github.com/images/doctocat-brown.jpg',
    caption: '#68',
    name: 'Doctocat Brown',
    src: 'https://github.com/jonrohan.png'
  },
  {
    imageUrl: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg',
    caption: '#56',
    name: 'Octocat De Los Muertos',
    src: 'https://github.com/cameronmcefee.png'
  },
  {
    imageUrl: 'https://octodex.github.com/images/dunetocat.png',
    caption: '#105',
    name: 'Dunetocat',
    src: 'https://github.com/JohnCreek.png'
  },
  {
    imageUrl: '',
    caption: '',
    name: '',
    src: ''
  }
]

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main>
          <div class="container">
            {characterBoxes.map(characterBox => {
              return (
                <CharacterBox
                  imageUrl={characterBox.imageUrl}
                  caption={characterBox.caption}
                  name={characterBox.name}
                  src={characterBox.src}
                />
              )
            })}
            {/* <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/daftpunktocat-thomas.gif"
              />
              <section class="caption">
                <p>#102</p>
                <div class="name-pic">
                  <p>
                    the <em>Daftpunktocat-Thomas</em> by
                  </p>
                  <img src="https://github.com/jeejkang.png" />
                </div>
              </section>
            </div>
            <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/heisencat.png"
              />
              <section class="caption">
                <p>#78</p>
                <div class="name-pic">
                  <p>
                    the <em>Heisencat</em> by
                  </p>
                  <img src="https://github.com/jonrohan.png" />
                </div>
              </section>
            </div>
            <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/boxertocat_octodex.jpg"
              />
              <section class="caption">
                <p>#143</p>
                <div class="name-pic">
                  <p>
                    the <em>Boxertocat</em> by
                  </p>
                  <img src="https://github.com/rubyjazzy.png" />
                </div>
              </section>
            </div>
            <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/justicetocat.jpg"
              />
              <section class="caption">
                <p>#136</p>
                <div class="name-pic">
                  <p>
                    the <em>Justicetocat</em> by
                  </p>
                  <img src="https://github.com/heyhayhay.png" />
                </div>
              </section>
            </div>
            <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/gobbleotron.gif"
              />
              <section class="caption">
                <p>#120</p>
                <div class="name-pic">
                  <p>
                    the <em>Gobble-o-tron</em> by
                  </p>
                  <img src="https://github.com/JohnCreek.png" />
                  <img src="https://github.com/tonyjaramillo.png" />
                </div>
              </section>
            </div>
            <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/xtocat.jpg"
              />
              <section class="caption">
                <p>#36</p>
                <div class="name-pic">
                  <p>the X-tocat by</p>
                  <img src="https://github.com/cameronmcefee.png" />
                </div>
              </section>
            </div>
            <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/saritocat.png"
              />
              <section class="caption">
                <p>#114</p>
                <div class="name-pic">
                  <p>the Saritocat by</p>
                  <img src="https://github.com/JohnCreek.png" />
                </div>
              </section>
            </div>
            <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/yaktocat.png"
              />
              <section class="caption">
                <p>#109</p>
                <div class="name-pic">
                  <p>the Yaktocat by</p>
                  <img src="https://github.com/jeejkang.png" />
                </div>
              </section>
            </div>
            <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/dunetocat.png"
              />
              <section class="caption">
                <p>#105</p>
                <div class="name-pic">
                  <p>the Dunetocat by</p>
                  <img src="https://github.com/JohnCreek.png" />
                </div>
              </section>
            </div>
            <div class="outer-image">
              <img
                class="image-area"
                src="https://octodex.github.com/images/ironcat.jpg"
              />
              <section class="caption">
                <p>#25</p>
                <div class="name-pic">
                  <p>the IronCat by</p>
                  <img src="https://github.com/cameronmcefee.png" />
                </div>
              </section>
            </div>{' '}
            */}{' '}
            */}
            {/* <div class="outer-image">
                <img
                  class="image-area"
                  src="https://octodex.github.com/images/murakamicat.png"
                />
                <section class="caption">
                  <p>#83</p>
                  <div class="name-pic">
                    <p>the Murakamicat by</p>
                    <img src="https://github.com/billyroh.png" />
                  </div>
                </section>
              </div>
            </section> */}
            <Footer />
          </div>
        </main>
      </>
    )
  }
}

export default App
