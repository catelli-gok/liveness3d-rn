import UIKit
import Foundation

import FaceCaptcha

@objc(Liveness3dReactNative)
class Liveness3dReactNative: NSObject {

  @objc(startliveness3d:withResolver:withRejecter:)
  func startliveness3D(appKey: String, resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
      
      let APP_KEY = appKey
      let vc = Liveness3DViewController(endpoint: "", liveness3DUser: Liveness3DUser(appKey: APP_KEY, environment: .HML), debugOn: true)
      
      DispatchQueue.main.async {
          RCTPresentedViewController()?.present(vc, animated: true)
      }
      resolve(APP_KEY)
      
  }
}
