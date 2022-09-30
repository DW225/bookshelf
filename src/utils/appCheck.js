import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

export default function appCheck(firebase) {
  return initializeAppCheck(firebase, {
    provider: new ReCaptchaV3Provider('6LehejgiAAAAAC1T8Klt1XffvfQfo05X3VRrKBED'),
    isTokenAutoRefreshEnabled: true,
  })
}
