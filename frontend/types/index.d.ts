export type Article = {
  id: number;
  title: string;
  source: string;
  content: string;
  category: string
};

export type MachineTypeState =
  | 'idle'
  | 'resolved'
  | 'canceled'
  | 'error'
  | 'loading'
  | 'started';

/**
 * Hook para solicitar datos de api
 */
export type useFetchState = <A>(
  request: () => Promise<A>,
  initialStateData: A
) => { state: MachineTypeState; result: A };
