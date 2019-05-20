import React, { Component } from 'react'

class CharacterBox extends Component {
  render() {
    return (
      <>
        <div class="outer-image">
          <img class="image-area" src={this.props.imageUrl} />
          <section class="caption">
            <p>{this.props.caption}</p>
            <div class="name-pic">
              <p>
                the <em>{this.props.name}</em> by
              </p>

              <img src={this.props.src} />
            </div>
          </section>
        </div>
      </>
    )
  }
}

export default CharacterBox
