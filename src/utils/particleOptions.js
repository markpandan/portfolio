const particleOptions = {
  fullScreen: { enable: true, zIndex: -1 },
  background: {
    color: "#000",
    opacity: "1",
  },
  fpsLimit: 40,
  interactivity: {
    events: {
      onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "grab" },
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: {
      value: "#ff0000",
      animation: {
        h: {
          count: 0,
          enable: true,
          speed: 50,
          decay: 0,
          delay: 0,
          sync: false,
          offset: 0,
        },
        s: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0,
        },
        l: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0,
        },
      },
    },
    links: {
      color: { value: "#1c398e" },
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: { enable: true, area: 1080 },
      value: 300,
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
      },
    },
    size: {
      value: { min: 0.5, max: 1.5 },
      random: { enable: true },
    },
  },
  detectRetina: true,
};

export default particleOptions;
