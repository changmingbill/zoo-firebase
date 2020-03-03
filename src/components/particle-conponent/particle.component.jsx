import React  from 'react';
import Particles from 'react-particles-js';
import './particle.styles.scss';
const particleOptions = {
    "particles": {
      "number": {
          "value": 120
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
};
const ParticleConponent = () => (
        <Particles params={particleOptions} className='particle-component'/>
);

export default ParticleConponent;