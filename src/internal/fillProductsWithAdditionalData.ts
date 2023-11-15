import {NativeModules} from 'react-native';

import type {ProductCommon} from '../types';


/**
 * Fill products with additional data
 */
export const fillProductsWithAdditionalData = async <T extends ProductCommon>(
  items: T[],
) => {

  return items;
};
