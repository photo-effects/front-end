import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import WaterfallCont from './waterfall/waterfallCont';
// css
import 'react-id-swiper/lib/styles/css/swiper.css';
import './tagscont.css';

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

  const topics = [
    { tag: 'Animals', bgColor: '#364F6B' },
    { tag: 'Food', bgColor: '#AB8DD6' },
    { tag: 'Memes', bgColor: '#FC5185' },
    { tag: 'Funny', bgColor: '#364F6B' },
    { tag: 'Gaming', bgColor: '#AB8DD6' },
    { tag: "2000's", bgColor: '#FC5185' },
    { tag: " 90's", bgColor: '#364F6B' },
    { tag: "80's", bgColor: '#AB8DD6' },
    { tag: "70's", bgColor: '#FC5185' },
    { tag: "60's", bgColor: '#364F6B' },
    { tag: " 50's", bgColor: '#AB8DD6' },
    { tag: 'Science', bgColor: '#FC5185' },
    { tag: 'Politics', bgColor: '#364F6B' },
    { tag: 'Wallpaper', bgColor: '#AB8DD6' },
    { tag: 'DCU', bgColor: '#FC5185' },
    { tag: 'Fashion', bgColor: '#364F6B' },
    { tag: 'MCU', bgColor: '#AB8DD6' },
    { tag: 'Movies', bgColor: '#FC5185' },
    { tag: 'Nature', bgColor: '#364F6B' },
    { tag: 'Dogs', bgColor: '#AB8DD6' }
  ];

  const tagDesign = { color: '#E9E9E9', margin: 'auto', fontSize:'16px', fontWeight:'bold' };

  const [sortedpics, setSortedpics] = useState('');

  const Sortedpics = tag => {
    setSortedpics(tag);
  };
  console.log(sortedpics);
  return (
    <div style={{ background: '#42DDE5', paddingBottom: '10px' }}>
      <Swiper {...params}>
        {topics.map(topic => (
          <div
            key={topic.tag}
            onClick={() => Sortedpics(topic.tag)}
            style={{
              background: topic.bgColor,
              display: 'flex',
              justifyContent: 'center',
              padding: '10px',
              borderRadius: '8px',
              boxShadow: ' 1px -1px 6px -1px rgba(0,0,0,0.29)',
              marginBottom: '10px'
            }}
          >
            <p style={tagDesign}>{topic.tag}</p>
          </div>
        ))}
      </Swiper>
      <div style={{ position: 'relative' }}>
        <WaterfallCont sortBy={sortedpics} />
      </div>
    </div>
  );
};
export default TagsCont; 
