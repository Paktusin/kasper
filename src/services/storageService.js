import LocalStorageService from '../common/localStorageService'

class StorageService extends LocalStorageService {
    constructor() {
        super('kasper');
    }
}

const storageService = angular.module('storageService', [])
    .service('storageService', StorageService);

export default storageService;