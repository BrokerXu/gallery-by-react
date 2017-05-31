require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';

//获取图片相关的数据
let imageDatas = require('../data/imageDatas.json');

imageDatas = (function genImageDatas(imageDatasArr) {
  for (var i = 0; i < imageDatasArr.length; i++) {
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = "../images/" + singleImageData.fileName;
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);


class GalleryByReactApp extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

GalleryByReactApp.defaultProps = {};

export default GalleryByReactApp;
