export enum BackendMode {
    MONGO = 'mongo',
    COUCH = 'couch',
}

export interface BackendModeOption {
  label: string;
  value: BackendMode;
}

export const AvailableBackendModes: BackendModeOption[] = [
    { label: 'MongoDB', value: BackendMode.MONGO },
    { label: 'CouchDB', value: BackendMode.COUCH },
];
