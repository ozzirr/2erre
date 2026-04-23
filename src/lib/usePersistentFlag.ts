'use client';

import {useSyncExternalStore} from 'react';

const STORAGE_EVENT = 'persistent-flag-change';

export function usePersistentFlag(key: string) {
  const value = useSyncExternalStore(
    (onChange) => {
      const onStorage = (event: StorageEvent) => {
        if (!event.key || event.key === key) onChange();
      };

      const onPersistentFlagChange = (event: Event) => {
        const customEvent = event as CustomEvent<{key?: string}>;
        if (!customEvent.detail?.key || customEvent.detail.key === key) onChange();
      };

      window.addEventListener('storage', onStorage);
      window.addEventListener(STORAGE_EVENT, onPersistentFlagChange as EventListener);

      return () => {
        window.removeEventListener('storage', onStorage);
        window.removeEventListener(STORAGE_EVENT, onPersistentFlagChange as EventListener);
      };
    },
    () => localStorage.getItem(key) === '1',
    () => false
  );

  function setValue(next: boolean) {
    if (next) {
      localStorage.setItem(key, '1');
    } else {
      localStorage.removeItem(key);
    }

    window.dispatchEvent(new CustomEvent(STORAGE_EVENT, {detail: {key}}));
  }

  return [value, setValue] as const;
}
