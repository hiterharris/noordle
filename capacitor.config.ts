import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wordle.hiterharris',
  appName: 'wordle',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    Keyboard: {
      style: "dark",
      resizeOnFullScreen: true,
    },
  },
};

export default config;
