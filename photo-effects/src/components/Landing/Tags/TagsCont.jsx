import React, {/* useState */} from 'react';
import Swiper from 'react-id-swiper';
// css
import 'react-id-swiper/lib/styles/css/swiper.css';
import './tagscont.css';

const TagsCont = (props) => {
  const params = {
    slidesPerView: 13,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination getouttheway',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 8,
        spaceBetween: 10
      },
      890: {
        slidesPerView: 7,
        spaceBetween: 10
      },
      880: {
        slidesPerView: 6,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      320: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true
    }
  };

  // const [sortedpics, setSortedpics] = useState('')

  console.log(props.pics)

  return (
    <div className="swiper">
      <h2 className="tagheader">Browse Tags</h2>

      <Swiper {...params}>
        <div className="swipecards greencard">Animals</div>
        <div className="swipecards ltpurplecard">Memes</div>
        <div className="swipecards magentacard">Funny</div>
        <div className="swipecards ltpurplecard">2000's</div>
        <div className="swipecards ltgreencard">90's</div>
        <div className="swipecards ltbluecard">80's</div>
        <div className="swipecards ltgreencard">70's</div>
        <div className="swipecards ltbluecard">60's</div>
        <div className="swipecards greencard">50's</div>
        <div className="swipecards greencard">Science</div>
        <div className="swipecards ltpurplecard">Politics</div>
        <div className="swipecards magentacard">Gaming</div>
        <div className="swipecards magentacard">Wallpaper</div>
        <div className="swipecards ltgreencard">Fashion</div>
        <div className="swipecards ltbluecard">DCU</div>
        <div className="swipecards greencard">MCU</div>
        <div className="swipecards ltpurplecard">Movies</div>
        <div className="swipecards magentacard">Food</div>
        <div className="swipecards ltgreencard">Nature</div>
        <div className="swipecards ltbluecard">Dogs</div>
      </Swiper>
    </div>
  );
};

export default TagsCont;
