const themes = {
  'morning': {
    '--main-color': 'var(--sunrise)',
    '--accent-color': 'var(--sunrise-accent)',
    '--theme-background': 'var(--light-base)',
    '--theme-ink': 'var(--light-ink)',
    '--theme-mark': "url('https://karinatovar.s3.us-east-2.amazonaws.com/mark.svg')",
    '--theme-nav-move': 'rgba(255, 255, 255, 0.75)',
    //'--theme-nav-invert': 'rgba(0, 0, 0, 0.75)',
    '--theme-menu': 'var(--ghost50)',
  },
  'afternoon': {
    '--main-color': 'var(--sunset)',
    '--accent-color': 'var(--sunset-accent)',
    '--theme-background': 'var(--light-base)',
    '--theme-ink': 'var(--light-ink)',
    '--theme-mark': "url('https://karinatovar.s3.us-east-2.amazonaws.com/mark.svg')",
    '--theme-nav-move': 'rgba(255, 255, 255, 0.75)',
    //'--theme-nav-invert': 'rgba(0, 0, 0, 0.75)',
    '--theme-menu': 'var(--ghost50)',
  },
  'evening': {
    '--main-color': 'var(--highlights-wine)',
    '--accent-color': 'var(--ghost10)',
    '--theme-background': 'var(--dark-base)',
    '--theme-ink': 'var(--dark-ink)',
    '--theme-mark': "url('https://karinatovar.s3.us-east-2.amazonaws.com/mark-white.svg')",
    '--theme-nav-move': 'rgba(71, 54, 76, 0.75)',
    //'--theme-nav-invert': 'rgba(71, 54, 76, 0.75)',
    '--theme-menu': 'rgba(0, 0, 0, 0.4)',
  },
};

function setThemeColor(theme) {
  // Remove all other theme classes
  Object.keys(themes).forEach((theme) => {
    document.body.classList.remove(theme);
  });

  // Add the new theme class
  document.body.classList.add(theme);

  // Change the CSS variables
  Object.entries(themes[theme]).forEach(([variable, value]) => {
    document.documentElement.style.setProperty(variable, value);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const d = new Date();
  const hour = d.getHours();
  console.log("Current hour:", hour);
  let theme;

  if (hour >= 5 && hour < 12) {
    theme = 'morning';
  } else if (hour >= 12 && hour < 18) {
    theme = 'afternoon';
  } else {
    theme = 'evening';
  }

  console.log("Setting theme to:", theme);
  setThemeColor(theme);

  setInterval(() => {
    const d = new Date();
    const hour = d.getHours();
    let theme;

    if (hour >= 5 && hour < 12) {
      theme = 'morning';
    } else if (hour >= 12 && hour < 18) {
      theme = 'afternoon';
    } else {
      theme = 'evening';
    }

    setThemeColor(theme);
  }, 60 * 60 * 1000);
});

window.addEventListener('keydown', (event) => {
  if (event.key === '1') {
    setThemeColor('morning');
  } else if (event.key === '2') {
    setThemeColor('afternoon');
  } else if (event.key === '3') {
    setThemeColor('evening');
  }
});
