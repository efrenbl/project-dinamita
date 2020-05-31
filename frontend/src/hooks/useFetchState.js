import { useState, useEffect } from 'react';

/** @typedef {'idle' | 'resolved' | 'error' | 'loading' | 'started'} MachineTypeState */

/**
 * Hook para solicitar datos de api
 * @template A
 * @param {() => Promise<any>} request La solicitud a llmar
 * @param {A} initialStateData El tipo de estado inicial a poner
 * @returns {{state: MachineTypeState, result: A}}
 */
const useFetchState = (request, initialStateData) => {
  const [data, setData] = useState({ state: 'idle', result: initialStateData });
  useEffect(() => {
    setData({ state: 'started', result: null });
    request()
      .then((articles) => {
        setData({ state: 'resolved', result: articles });
      })
      .catch(() => {
        setData({ state: 'error', result: null });
      });
    setData({ state: 'loading', result: null });
  }, []);

  return data;
};

export default useFetchState;
