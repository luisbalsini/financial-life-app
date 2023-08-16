import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItemStorage = async (key: string, value: string) => {
  AsyncStorage.setItem(key, value).catch();
};

export const getItemStorage = async (key: string) => {
  return AsyncStorage.getItem(key).catch(() => '');
};

export const removeItemStorage = async (key: string) => {
  return AsyncStorage.removeItem(key).catch();
};
