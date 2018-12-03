// PACKAGES
import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
// CSS
import "./photos-main.css"
// IMAGES
import Test from "../../images/photos/tr_garmisch.jpg"

export default class PhotosMain extends React.Component {
    render() {
        return (
            <div className='gallery-container'>
                <Gallery photos={PHOTO_SET} />
            </div>
        )
    }
}
const PHOTO_SET = [
  {
    src: Test,
    width: 4,
    height: 3
  },
  {
    src: 'http://example.com/example/img2.jpg',
    width: 1,
    height: 1
  }
];