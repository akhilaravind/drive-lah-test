import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getSnapshot() {
  return window.innerWidth;
}

export function useViewportWidth() {
  return useSyncExternalStore(subscribe, getSnapshot);
}
