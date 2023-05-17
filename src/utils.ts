import { invoke } from "@tauri-apps/api/tauri";

export const checkIsDockerRunning = async () => {
  const check = await invoke("is_docker_running");
  return Boolean(check);
};

export const runDockerContainer = async () => {
  // check if container is already running
  const containerRunning = await invoke("is_container_running");
  if (!Boolean(containerRunning)) {
    // if the container is not running, run it accordingly
    await invoke("run_container");
  }
};

export const isBrowserEnv = () => {
  return import.meta.env.VITE_DESTINATION === "browser";
};

export const isDesktopEnv = () => {
  return import.meta.env.VITE_DESTINATION === "desktop";
};

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;