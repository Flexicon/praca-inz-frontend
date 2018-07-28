export enum BackendMode {
  MONGO = 'mongo',
  COUCH = 'couch'
}

export const AvailableBackendModes = {
  [`${BackendMode.MONGO}`]: 'MongoDB',
  [`${BackendMode.COUCH}`]: 'CouchDB'
};
