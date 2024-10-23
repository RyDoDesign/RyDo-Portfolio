import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import "../css/project.css";


export function GMs() {

  const imageCount = 32;
  const videoNumbers = [3, 9, 15, 16, 21, 22, 23, 24, 25, 26, 31];
  const pngNumbers = [0, 7, 14, 20];

  const gmHighlights: string[] = [];
  for (let i = 0; i < imageCount; i++) {
    if (pngNumbers.includes(i)) {
      gmHighlights.push('https://ik.imagekit.io/kgfrj9r2z/gmHighlights/' + i + '.png')
    } else if (videoNumbers.includes(i)) {
      gmHighlights.push('https://ik.imagekit.io/kgfrj9r2z/gmHighlights/' + i + '.mp4')
    } else {
      gmHighlights.push('https://ik.imagekit.io/kgfrj9r2z/gmHighlights/' + i + '.jpeg')
    }
  };

  const [imageCountFS, setImageCount] = useState(48);
  function increaseGalSize() {
    if (imageCountFS < 317) {
      setImageCount(prevCount => prevCount + 48);
    } else if (imageCountFS > 317) {
      setImageCount(364);
    };
  };
  const videoNumbersFS = [43, 146, 185, 186, 187, 188, 189, 201, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 301, 302, 303, 304, 345, 346, 347, 348, 349, 365];
  const pngNumbersFS = [1, 2, 10, 11, 13, 20, 30, 41, 42, 78, 82, 83, 85, 98, 100, 101, 102, 103, 104, 115, 150, 184, 207, 208, 213, 218, 220, 221, 222, 223, 224, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247];

  const gmFullSet: string[] = [];
  for (let i = 1; i < imageCountFS + 1; i++) {
    if (pngNumbersFS.includes(i)) {
      gmFullSet.push('https://ik.imagekit.io/kgfrj9r2z/posts/' + i + '.png')
    } else if (videoNumbersFS.includes(i)) {
      gmFullSet.push('https://ik.imagekit.io/kgfrj9r2z/posts/' + i + '.mp4');
    } else {
      gmFullSet.push('https://ik.imagekit.io/kgfrj9r2z/posts/' + i + '.jpeg')
    }
  };

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };
  // shuffleArray(gmFullSet);

  window.addEventListener('scroll', () => {
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;
    if (scrollPosition >= documentHeight) {
      increaseGalSize();
      console.log(imageCountFS)
    }
  });

  console.log();

  return (
    <>
      <main className="projectPage">
        <section className="projectDetails">
          <h1>GMs • 2023 - 2024</h1>
          <h3>Deliverables: 365 pieces of digital art (70 videos, 295 stills)</h3>
          <p>365 ways to say good morning. A tool for stylistic exploration, a way to connect with <Link to="/bma">BMA</Link> holders, & a practice in consistency.</p>
        </section>
        <section className="gallery">
          <h1>Highlights</h1>
          <div className="imageGrid">
            {gmHighlights.map((src, index) => (
              videoNumbers.includes(index) ? (
                <video autoPlay loop muted><source src={src} type="video/mp4" /></video>
              ) : (
                <img key={index} src={src} />
              )
            ))}
          </div>
        </section>
        <section className="gallery">
          <h1>Complete Set</h1>
          <div className="imageGrid">
            {gmFullSet.map((src, index) => (
              videoNumbersFS.includes(index + 1) ? (
                <video autoPlay loop muted width={600}><source src={src} type="video/mp4" /></video>
              ) : (
                <img key={index} src={src} alt={index.toString()} />
              )
            ))}
          </div>
        </section>
      </main>
    </>
  )
}