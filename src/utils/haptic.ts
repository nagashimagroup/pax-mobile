export function longHaptic() {
  try {
    window.navigator.vibrate([100]);
  } catch (e) {
    return;
  }
}

export function shortHaptic() {
  try {
    window.navigator.vibrate([50]);
  } catch (e) {
    return;
  }
}
