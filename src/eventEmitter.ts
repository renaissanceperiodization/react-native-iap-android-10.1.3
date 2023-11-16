import {EmitterSubscription, NativeEventEmitter} from 'react-native';

import {getAndroidModule, getNativeModule} from './iap';
import {isAndroid} from './internal';
import type {PurchaseError} from './purchaseError';
import type {Purchase} from './types';

/**
 * Add IAP purchase event
 */
export const purchaseUpdatedListener = (
  listener: (event: Purchase) => void,
) => {
  const eventEmitter = new NativeEventEmitter(getNativeModule());
  const emitterSubscription = eventEmitter.addListener(
    'purchase-updated',
    listener,
  );

  if (isAndroid) {
    getAndroidModule().startListening();
  }

  return emitterSubscription;
};

/**
 * Add IAP purchase error event
 */
export const purchaseErrorListener = (
  listener: (error: PurchaseError) => void,
): EmitterSubscription => {
  const eventEmitter = new NativeEventEmitter(getNativeModule());
  return eventEmitter.addListener('purchase-error', listener);
};
