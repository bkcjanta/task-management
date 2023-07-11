'use client'
import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
// import  TaskStore  from '@/stores/TaskStore';

export const useStore = () => {
  const stores = useContext(MobXProviderContext);
  // console.log(stores);
  if (!stores) {
    throw new Error('useStore must be used within a MobXProvider');
  }
  return stores.taskStore;
};