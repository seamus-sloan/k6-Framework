import BaseEndpoint from './_BaseEndpoint.js';

export default class Endpoint1 extends BaseEndpoint {
    constructor() {
        super();
        this.endpointName = 'Breeds';
        this.endpointUrl = '/breeds';
    }

    get() {
        this.endpointTitle = 'GetBreeds'
        super.getList();
    }
}