/** Key & value pair. */
export interface KV<T> {
  key: string;
  value: T;
}

export interface AsyncStore {

  /** Returns value by key. */
  get<T = unknown>(key: string): Promise<T|undefined>;

  /**
   * Returns array of values for the given array of keys.
   * If no value was found puts 'undefined' into the array.
   */
  getAll<T = unknown>(keys: readonly string[]): Promise<(T|undefined)[]>;

  /**
   * Sets value by key. Overwrites the previously stored value.
   * If the value is 'undefined' removes the key from the store.
   */
  set<T = unknown>(key: string, value: T|undefined): Promise<void>;

  /** Calls 'set' for all entries found in the map. */
  setAll(map: { [key: string]: unknown }): Promise<void>;

  /**
   *  Returns all values with the given key prefix.
   *  If keyPrefix is undefined or is empty returns all values in the store.
   */
  list<T = unknown>(keyPrefix?: string): Promise<KV<T>[]>;

  /** Clears the store: removes all keys and values. */
  clear(): Promise<void>;

  /**
   * Initializes the store and sets the version to the given value.
   * Clears the store if the previous version is not equal to the given version.
   * TODO: provide an upgrade function as a parameter.
   */
  init(schemaVersion: number): Promise<void>;

  /** Returns a snapshot for the current store state. */
  snapshot(): KV<unknown>[];
}
