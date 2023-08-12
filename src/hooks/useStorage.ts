import { type Dispatch, type SetStateAction, useCallback, useState } from 'react';

export const useStorage = <V>(type: 'local' | 'session', key: string, defaultValue: V | (() => V)): [V, Dispatch<SetStateAction<V>>] => {
  const storage = type === 'local' ? localStorage : sessionStorage

  const [value, setValue] = useState<V>(() => {
    let val: V
    try {
      val = JSON.parse(storage.getItem(key))
    } catch (e) {}

    return val || (defaultValue instanceof Function ? defaultValue() : defaultValue)
  })

  const setValueExternal = useCallback((action: V | ((V) => V)) => {
    if (action instanceof Function) {
      setValue(prevState => {
        const val = action(prevState)
        storage.setItem(key, JSON.stringify(value))
        return val
      })
      return
    }
    storage.setItem(key, JSON.stringify(action))
    setValue(action)
  }, [])

  return [value, setValueExternal]
}
