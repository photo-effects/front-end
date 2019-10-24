import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import WaterfallCont from './waterfall/waterfallCont';
// css
import 'react-id-swiper/lib/styles/css/swiper.css';
import './tagscont.css';
import Footer from '../Footer/Footer';
const TagsCont = props => {
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
  const [sortedpics, setSortedpics] = useState('');
  console.log(sortedpics);
  return (
    <div style={{background:'#42DDE5'}}>
     
      <Swiper {...params}>
        <div
          onClick={() => setSortedpics('Animals')}
          className="swipecards greencard"
        >
          Animals
        </div>
        <div
          onClick={() => setSortedpics('Food')}
          className="swipecards magentacard"
        >
          Food
        </div>
        <div
          onClick={() => setSortedpics('Memes')}
          className="swipecards ltpurplecard"
        >
          Memes
        </div>
        <div
          onClick={() => setSortedpics('Funny')}
          className="swipecards magentacard"
        >
          Funny
        </div>
        <div
          onClick={() => setSortedpics('Gaming')}
          className="swipecards magentacard"
        >
          Gaming
        </div>
        <div
          onClick={() => setSortedpics('2000s')}
          className="swipecards ltpurplecard"
        >
          2000's
        </div>
        <div
          onClick={() => setSortedpics('90s')}
          className="swipecards ltgreencard"
        >
          90's
        </div>
        <div
          onClick={() => setSortedpics('80s')}
          className="swipecards ltbluecard"
        >
          80's
        </div>
        <div
          onClick={() => setSortedpics('70s')}
          className="swipecards ltgreencard"
        >
          70's
        </div>
        <div
          onClick={() => setSortedpics('60s')}
          className="swipecards ltbluecard"
        >
          60's
        </div>
        <div
          onClick={() => setSortedpics('50s')}
          className="swipecards greencard"
        >
          50's
        </div>
        <div
          onClick={() => setSortedpics('science')}
          className="swipecards greencard"
        >
          Science
        </div>
        <div
          onClick={() => setSortedpics('Politics')}
          className="swipecards ltpurplecard"
        >
          Politics
        </div>

        <div
          onClick={() => setSortedpics('Wallpaper')}
          className="swipecards magentacard"
        >
          Wallpaper
        </div>
        <div
          onClick={() => setSortedpics('Fashion')}
          className="swipecards ltgreencard"
        >
          Fashion
        </div>
        <div
          onClick={() => setSortedpics('DCU')}
          className="swipecards ltbluecard"
        >
          DCU
        </div>
        <div
          onClick={() => setSortedpics('MCU')}
          className="swipecards greencard"
        >
          MCU
        </div>
        <div
          onClick={() => setSortedpics('Movies')}
          className="swipecards ltpurplecard"
        >
          Movies
        </div>

        <div
          onClick={() => setSortedpics('Nature')}
          className="swipecards ltgreencard"
        >
          Nature
        </div>
        <div
          onClick={() => setSortedpics('Dogs')}
          className="swipecards ltbluecard"
        >
          Dogs
        </div>
      </Swiper>
      <div style={{ position: 'relative' }}>
        <WaterfallCont sortBy={sortedpics} />
      </div>
    </div>
  );
};
export default TagsCont;
