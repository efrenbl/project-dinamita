import { useState, useEffect } from 'react';

/** @typedef {'idle' | 'resolved' | 'canceled' | 'error' | 'loading' | 'started'} MachineTypeState */

/**
 * Hook para solicitar datos de api
 * @type {import('../../types').useFetchState}
 */
const useFetchState = (request, initialStateData) => {
  /** @type {{state: MachineTypeState, result: typeof initialStateData}} */
  const initialState = { state: 'idle', result: initialStateData };
  const [data, setData] = useState({ ...initialState });
  useEffect(() => {
    let canceled = false;
    setData({ state: 'started', result: initialStateData });
    request()
      .then((articles) => {
        if (canceled) {
          // canceled = false;
          setData({ state: 'canceled', result: initialStateData });
        } else {
          setData({ state: 'resolved', result: articles });
        }
      })
      .catch(() => {
        if (canceled) {
          // canceled = false;
          setData({ state: 'canceled', result: initialStateData });
        } else {
          setData({ state: 'error', result: initialStateData });
        }
      });
    setData({ state: 'loading', result: initialStateData });
    return () => {
      console.log('canceling');
      canceled = true;
    };
  }, []);

  return data;
};

export default useFetchState;
