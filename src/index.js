/**
 * Kaleido — satellite Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 *
 * Kaleidoscope paper. Soft rainbow good vibes.
 */

const TOKENS = {
  '--bg-base': '#f7f0ff',
  '--bg-surface': '#eee4fa',
  '--bg-elevated': '#fcf8ff',
  '--bg-inset': '#e4d8f4',
  '--bg-hover': 'rgba(42, 31, 58, 0.05)',
  '--bg-active': 'rgba(42, 31, 58, 0.09)',
  '--text-primary': '#2a1f3a',
  '--text-secondary': 'rgba(42, 31, 58, 0.74)',
  '--text-muted': 'rgba(42, 31, 58, 0.52)',
  '--text-faint': 'rgba(42, 31, 58, 0.34)',
  '--border': 'rgba(42, 31, 58, 0.12)',
  '--border-subtle': 'rgba(42, 31, 58, 0.07)',
  '--border-strong': 'rgba(42, 31, 58, 0.18)',
  '--accent': '#c45ad8',
  '--accent-hover': '#a848bc',
  '--accent-muted': 'rgba(196, 90, 216, 0.2)',
  '--accent-subtle': 'rgba(196, 90, 216, 0.1)',
  '--glass-bg': 'rgba(247, 240, 255, 0.92)',
  '--glass-border': 'rgba(42, 31, 58, 0.1)',
  '--glass-bg-menu': 'rgba(252, 248, 255, 0.96)',
  '--glass-border-menu': 'rgba(42, 31, 58, 0.1)',
  '--status-active': '#c45ad8',
  '--status-on-hold': '#c4a04a',
  '--status-completed': '#4e9a68',
  '--status-dropped': '#c45a5a',
};

module.exports = {
  id: 'theme-kaleido',
  name: 'Kaleido',
  version: '0.1.0',
  description: "Kaleidoscope paper. Soft rainbow good vibes.",

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-kaleido',
      name: 'Kaleido',
      description: "Kaleidoscope paper. Soft rainbow good vibes.",
      author: 'Dripnex',
      colorScheme: 'light',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
