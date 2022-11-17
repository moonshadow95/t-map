import React, { useEffect } from 'react';
import './App.css';

const dummyList = [
  {
    title: '티맵모빌리티',
    lonlat: [37.5652045, 126.98702028],
  },
  {
    title: 'SKT타워',
    lonlat: [37.566369, 126.984895],
  },
  {
    title: '경찰서',
    lonlat: [37.563709, 126.989577],
  },
  {
    title: '호텔',
    lonlat: [37.565138, 126.983655],
  },
  {
    title: '병원',
    lonlat: [37.565128, 126.98883],
  },
];

function App() {
  const { Tmapv2 } = window;
  useEffect(() => {
    const map = new Tmapv2.Map('TMapApp', {
      center: new Tmapv2.LatLng(37.566481622437934, 126.98502302169841), // 지도 중앙
      width: '100%',
      height: '100%',
      zoom: 17,
    });
    map.addListener('click', () => console.log('지도 클릭됨'));
    for (let i = 0; i < dummyList.length; i++) {
      const lonlat = dummyList[i].lonlat;
      const title = dummyList[i].title;
      const label = `<span style='position: relative; top: 8px; color: #FEFEFE; background: #E00727; border-radius: 21px; padding:4px 12px;'>${title}</span>`;
      let marker = new Tmapv2.Marker({
        position: new Tmapv2.LatLng(...lonlat),
        map: map,
        title: title,
        label: label,
        icon: `/images/pin_true.png`,
      });
      marker.addListener('click', () => {
        console.log(`${marker._marker_data.options.title} 클릭됨`);
      });
      console.log();
    }
  }, []);

  return (
    <div
      id="TMapApp"
      style={{
        height: '100%',
        width: '100%',
        position: 'fixed',
      }}
    />
  );
}

export default App;
