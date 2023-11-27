import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId:
        '785344539141-g44ha0j7cho1h1t7svpc7u4a7tkktot6.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
  appId: 'com.example.app',
  appName: 'movie-app',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
