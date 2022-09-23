import { NativeModules, Platform } from 'react-native';
import qs from 'qs';

const LINKING_ERROR =
  `The package '@oiti/liveness3d-react-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const Liveness3dReactNative = NativeModules.Liveness3dReactNative
  ? NativeModules.Liveness3dReactNative
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function startLiveness3d(appKey: string): Promise<any> {
  return Liveness3dReactNative.startliveness3d(appKey);
}

export async function resultFaceCaptcha(appKey: string): Promise<string> {
  const dataReq = { appkey: appKey };

  const response = await fetch(
    'https://comercial.certiface.com.br:8443/facecaptcha/service/captcha/document/result',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify(dataReq),
    }
  );
  const data = await response.json();
  return data.facecaptcha;
}
