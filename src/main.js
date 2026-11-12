import '@videojs/html/video/player';
import '@videojs/html/video/skin';
import './style.css';
const intro = document.createElement('div');
intro.id = 'cinematic-intro';

intro.innerHTML = `
  <div class="intro-content">
    <div class="intro-eyebrow">A JOURNEY BEYOND THE VISIBLE</div>
    <h1 class="intro-title">BETWEEN TWO WORLDS</h1>
    <div class="intro-line"></div>
  
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
    <span class="brand">BETWEEN TWO WORLDS</span>
    <span class="edition">BETWEEN TWO WORLDS</span>
    </header>

    <section class="player-section">
      <div class="eyebrow">A JOURNEY BEYOND THE VISIBLE</div>
      <h1>Between Two Worlds</h1>
      <p>Where mystery, memory and movement meet.</p>

      <div class="video-frame">
     

      <video-player
      id="gede-player"
      poster="/assets/Élégance%20pourpre%20dans%20les%20ruines%20embrumées.png"
    >
      <video-skin>
        <video
          playsinline
          preload="metadata"
          src="https://gede-between-two-worlds.netlify.app/assets/Mystery_vid%C3%A9o.js%20challenge%20%282%29.mp4"

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

/* PURPLE FLAME — Barre de progression */
.media-skin .media-time-range {
  --media-range-track-background: rgba(35, 15, 45, 0.85);
  --media-range-bar-color: transparent;
  --media-range-thumb-background: #ffd27a;
  filter: drop-shadow(0 0 5px #a32bff);
}

.media-skin .media-time-range:hover {
  filter: drop-shadow(0 0 9px #d66aff);
}
/* PURPLE FLAME — Progression animée */
.media-skin .media-time-slider {
  --media-slider-height: 8px;
  --media-slider-track-background: #29142f;
  --media-slider-fill-color: #b44aff;
}
.media-skin .media-time-slider {
  --media-slider-fill-color: transparent;
  --media-range-bar-color: transparent;
}

.media-skin .media-time-slider::after {
  content: none !important;
  position: absolute;
  left: 0;
  top: 50%;
  width: var(--media-slider-fill, 0%);
  height: 10px;
  transform: translateY(-50%);
  pointer-events: none;
  border-radius: 50px;
  background: linear-gradient(
    0deg,
    #7420c9,
    #b44aff 45%,
    #ff91eb 75%,
    #ffe1a0
  );
  box-shadow:
    0 0 8px #b44aff,
    0 -4px 12px #b44aff,
    0 -8px 18px #ff70dc;
  animation: flamePulse 0.7s ease-in-out infinite alternate;
}

@keyframes flamePulse {
  from {
    filter: brightness(0.9);
  }
  to {
    filter: brightness(1.5);
  }
}
/* GOLDEN FLAMES — Between Two Worlds */
.media-skin .media-time-slider::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: var(--media-slider-fill, 0%);
  height: 22px;
  transform: translateY(-65%);
  pointer-events: none;

  background:
    radial-gradient(
      ellipse 7px 18px at 25% 100%,
      #fff2bc 0%,
      #ffd36b 35%,
      #f5a623 65%,
      transparent 85%
    ),
    radial-gradient(
      ellipse 9px 15px at 65% 100%,
      #ffe7a0 0%,
      #f5a623 55%,
      transparent 85%
    ),
    linear-gradient(
      to top,
      #d87518,
      #f5a623,
      #ffd36b
    );

  background-size: 45px 100%;
  background-repeat: repeat-x;

  clip-path: shape(
    from 0% 100%,
    line to 0% 55%,
    curve to 12% 48% with 4% 15% / 8% 78%,
    curve to 25% 55% with 17% 8% / 21% 80%,
    curve to 40% 50% with 30% 20% / 35% 85%,
    curve to 55% 55% with 45% 5% / 50% 80%,
    curve to 70% 50% with 60% 18% / 65% 85%,
    curve to 85% 55% with 75% 10% / 80% 80%,
    curve to 100% 45% with 90% 15% / 95% 75%,
    line to 100% 100%,
    close
  );

  filter: drop-shadow(0 -3px 5px #f5a623);
  animation: goldenFlame 0.8s ease-in-out infinite alternate;
}

@keyframes goldenFlame {
  from {
    background-position: 0 0;
    filter: brightness(0.9)
      drop-shadow(0 -2px 4px #f5a623);
  }

  to {
    background-position: 15px 0;
    filter: brightness(1.3)
      drop-shadow(0 -5px 8px #ffd36b);
  }
}
}

@keyframes flameDance {
  from {
    background-position: 0 0;
    filter: brightness(0.9) drop-shadow(0 -2px 4px #a32bff);
  }
  to {
    background-position: 18px 0;
    filter: brightness(1.4) drop-shadow(0 -5px 8px #e66aff);
  }
}

/* Désactiver les anciennes flammes arrondies */
.media-skin .media-time-slider::after {
  content: none !important;
  /* REAL FIRE — Barre de progression */
.media-skin .media-time-slider {
  position: relative;
  isolation: isolate;
}

.media-skin .real-fire-progress {
  position: absolute;
  left: 0;
  top: 50%;
  width: var(--media-slider-fill, 0%);
  height: 18px;
  transform: translateY(-70%);
  overflow: hidden;
  pointer-events: none;
  border-radius: 0;
  z-index: 5;
}

.media-skin .real-fire-progress video {
  width: 100%;
  height: 100%;
  object-fit: fill;
  mix-blend-mode: screen;
  pointer-events: none;
}
}
/* Masquer la ligne native sans supprimer le curseur */
.media-skin .media-time-slider {
  --media-slider-fill-color: transparent !important;
  --media-range-bar-color: transparent !important;
  --media-slider-track-background: transparent !important;
  --media-range-track-background: transparent !important;
}
/* Masquer la ligne native, conserver les flammes */
.media-skin .media-time-slider-chapters {
  display: none !important;
}

/* Bouton Lecture/Pause : flamme dorée */
.media-skin media-play-button {
  position: relative;
  color: #f5c66b;
  filter: drop-shadow(0 0 5px rgba(255, 170, 45, 0.65));
  animation: gedeFlame 1.5s ease-in-out infinite alternate;
  transform-origin: center bottom;
}

.media-skin media-play-button:hover {
  filter: drop-shadow(0 0 12px rgba(255, 190, 65, 0.95));
}

/* Remplacer les icônes par une flamme */
.media-skin media-play-button .media-button-icon {
  display: none !important;
}



@keyframes gedeFlame {
  from {
    transform: scale(0.96) rotate(-2deg);
    opacity: 0.85;
  }
  to {
    transform: scale(1.08) rotate(2deg);
    opacity: 1;
  }
}

`;





  gedeSkin.shadowRoot.appendChild(gedeStyle);

/* Flamme animée du bouton Lecture/Pause */
const playButton = gedeSkin.shadowRoot.querySelector(
  'media-play-button'
);

if (playButton && !playButton.querySelector('.gede-play-fire')) {
  const playFire = document.createElement('img');

  playFire.className = 'gede-play-fire';
  playFire.src =
    'https://gede-between-two-worlds.netlify.app/assets/Animation%20de%20flammes%20en%20losange.gif';

  playFire.alt = '';
  playFire.setAttribute('aria-hidden', 'true');

  playFire.style.cssText = `
  

display: block;
width: 52px;
height: 52px;
min-width: 52px;
max-width: none;
object-fit: contain;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
pointer-events: none;
z-index: 10;


  `;

  playButton.appendChild(playFire);
}

  // REAL FIRE — Vidéo de flammes
const fireSlider = gedeSkin.shadowRoot.querySelector('media-time-slider');

if (fireSlider && !fireSlider.querySelector('.real-fire-progress')) {
  const fireProgress = document.createElement('div');
  fireProgress.className = 'real-fire-progress';
  

  const fireVideo = document.createElement('video');
  fireProgress.style.cssText = `
  position: absolute;
  left: 0;
  top: 50%;
  width: var(--media-slider-fill, 0%);
  height: 18px;
  transform: translateY(-70%);
  overflow: hidden;
  pointer-events: none;
  z-index: 5;
`;

fireVideo.style.cssText = `
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: screen;
  filter: contrast(1.1) brightness(1);
`;
  fireVideo.src = 'https://gede-between-two-worlds.netlify.app/assets/140615-775595813.mp4';
  fireVideo.autoplay = true;
  fireVideo.loop = true;
  fireVideo.muted = true;
  fireVideo.playsInline = true;

  fireProgress.appendChild(fireVideo);
  fireProgress.style.mixBlendMode = 'screen';
  fireSlider.appendChild(fireProgress);

  fireVideo.play().catch(() => {});
}
}
