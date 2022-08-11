import React, { useEffect, useState } from 'react'
import Cursor from '../components/tools/Cursor'

export default function Home() {
  // const [loaded, setLoaded] = useState(false)

  // const blobCursor = () => {
  //   const CURSOR = document.querySelector('#cursorBlob');
  //   const LINKS = document.querySelectorAll('p');
  //   const setCursorPos = (e) => {
  //     const { pageX: posX, pageY: posY } = e;
  //     CURSOR.style.top = `${posY - (CURSOR.offsetHeight / 2)}px`;
  //     CURSOR.style.left = `${posX - (CURSOR.offsetWidth / 2)}px`;
  //   };


  //   const setCursorHover = () => CURSOR.style.transform = 'scale(2.5)';
  //   const removeCursorHover = () => CURSOR.style.transform = '';
  //   LINKS.forEach(link => link.addEventListener('mouseover', setCursorHover));
  //   LINKS.forEach(link => link.addEventListener('mouseleave', removeCursorHover));
  // };


  // useEffect(() => {
  //   setLoaded(true)
  // }, [])

  // useEffect(() => {
  //   if (loaded) {
  //     blobCursor()
  //   }
  // }, [loaded])

  return (
    <div id="home">
      {/* <div id="cursor-dot-outline"></div> */}

      <Cursor />
      <div id="name">
        <p>Jordan Philippot</p>
        <p>Développeur web</p>
      </div>

    </div>
  )
}
