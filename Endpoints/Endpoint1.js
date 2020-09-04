import BaseEndpoint from './_BaseEndpoint.js';

export default class Endpoint1 extends BaseEndpoint {
    constructor() {
        super();
        this.endpointName = 'Images';
        this.endpointUrl = '/images/search';
    }

    get() {
        this.endpointTitle = 'GetImages'
        super.getDetails();
    }
}