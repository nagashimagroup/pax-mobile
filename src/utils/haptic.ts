function canVibrate() {
  if (window && window.navigator.vibrate) {
    return true;
  }
  return false;
}

export function longHaptic() {
  if (!canVibrate()) return;
  window.navigator.vibrate([100]);
}

export function shortHaptic() {
  if (!canVibrate()) return;
  window.navigator.vibrate([50]);
}
