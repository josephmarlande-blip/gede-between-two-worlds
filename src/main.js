import '@videojs/html/video/player';
import '@videojs/html/video/skin';
import './style.css';
const intro = document.createElement('div');
intro.id = 'cinematic-intro';

intro.innerHTML = `
  <div class="intro-content">
    <div class="intro-eyebrow">A JOURNEY BEYOND THE VISIBLE</div>
    <h1 class="intro-title">GEDE</h1>
    <div class="intro-line"></div>
    <p class="intro-subtitle">Between Two Worlds</p>
    <p class="intro-description">
      Where mystery, memory and movement meet.
    </p>
    <button id="enter-experience" type="button">
      ENTER THE EXPERIENCE
    </button>
  </div>
`;

document.body.appendChild(intro);

intro.querySelector('#enter-experience').addEventListener('click', () => {
  intro.classList.add('intro-exit');

  setTimeout(() => {
   

    const scene = document.createElement('div');
    scene.id = 'gede-scene';

    scene.innerHTML = `
        <div class="gede-scene-image"></div>
        <div class="gede-scene-overlay">
          <span>BETWEEN TWO WORLDS</span>
        </div>
        <button id="continue-film" type="button">
          CONTINUE
        </button>
      `;

    document.body.appendChild(scene);
    intro.remove();
  
scene.querySelector('#continue-film').addEventListener('click', () => {
  scene.classList.add('scene-exit');

  setTimeout(() => {
    document.body.classList.add('gede-ready');
    scene.remove();
  }, 1200);
});

  }, 1100);
});
document.querySelector('#app').innerHTML = `
  <main class="gede">
    <header class="gede-header">
      <span class="brand">GEDE</span>
      <span class="edition">BETWEEN TWO WORLDS</span>
    </header>

    <section class="player-section">
      <div class="eyebrow">A JOURNEY BEYOND THE VISIBLE</div>
      <h1>Between Two Worlds</h1>
      <p>Where mystery, memory and movement meet.</p>

      <div class="video-frame">
     

      <video-player
      id="gede-player"
      poster="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200"
    >
      <video-skin>
        <video
          playsinline
          preload="metadata"
         src="https://vjs.zencdn.net/v/oceans.mp4"

        ></video>
      </video-skin>
    </video-player>
    

      </div>

      <div class="video-footer">
        <span>THE THRESHOLD</span>
        <span>AN IMMERSIVE EXPERIENCE</span>
      </div>
    </section>
  </main>
`;

const gedeSkin = document.querySelector('#gede-player video-skin');

if (gedeSkin?.shadowRoot) {
  const gedeStyle = document.createElement('style');

 

 
gedeStyle.textContent = `
.media-skin {
  --media-default-accent-color: #d8b77a;
  --media-popover: rgba(43, 22, 49, 0.88);
  --media-popover-foreground: #f5ede2;
}

.media-skin .media-button {
  color: #d8b77a;
}

.media-skin .media-time-value {
  color: #f5ede2;
}


.video-controls-content {
  background-color: rgba(43, 22, 49, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(216, 183, 122, 0.35);
  border-radius: 28px;
  padding: 6px 12px;
}

/* GEDE — signature du lecteur */
.video-controls-content::before {
  content: "BETWEEN TWO WORLDS";
  position: absolute;
  bottom: calc(100% + 18px);
  left: 32px;
  color: #d8b77a;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  pointer-events: none;
}

/* GEDE — bouton Lecture */
.media-skin .media-play-button {
  background: rgba(216, 183, 122, 0.12);
  border: 1px solid rgba(216, 183, 122, 0.65);
  border-radius: 50%;
  color: #d8b77a;
}

/* GEDE — adaptation mobile */
@media (max-width: 600px) {
  .video-controls-content {
    padding: 4px 6px;
    border-radius: 20px;
  }

  .media-skin .media-play-button {
    flex-shrink: 0;
  }
}

`;




  gedeSkin.shadowRoot.appendChild(gedeStyle);
}
