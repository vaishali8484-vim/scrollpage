import React, { useState, useEffect } from 'react';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import classNames from 'classnames';


const images = [
  { id: 1, src: 'assets/images/ss1.webp' },
  { id: 2, src: 'assets/images/ss2.webp' },
  { id: 3, src: 'assets/images/ss3.webp' },
  { id: 4, src: 'assets/images/ss4.webp' },
  { id: 5, src: 'assets/images/ss5.webp' }
];

const ImageScroll = () => {
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {});
    Events.scrollEvent.register('end', function () {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveImage(to);
  };

  return (
    <div className="image-scroll-container">
      <div className="thumbnail-container">
        {images.map((image) => (
          <Link
            key={image.id}
            activeClass="active"
            to={`image-${image.id}`}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleSetActive(image.id)}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${image.id}`}
              className={classNames('small', { active: activeImage === image.id })}
            />
          </Link>
        ))}
      </div>
      <div className="big-images-container">
        {images.map((image) => (
          <Element name={`image-${image.id}`} key={image.id} className="big-container">
            <img src={image.src} alt={`Image ${image.id}`} className="big" />
          </Element>
        ))}
      </div>
    </div>
  );
};

export default ImageScroll;
