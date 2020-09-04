/**
 * Created by: Seamus Sloan
 * 
 * Free-to-use k6 Framework for Load Testing
 * capable of being modular and configurable
 * for any performance testing scenario. For
 * more information on k6 Performance Testing
 * visit `k6.io`
 */
const VERSION = `1.0.0`;

import User1 from './User/User1.js';
import User2 from './User/User2.js';
import Endpoints1 from './Endpoints/Endpoint1.js';
import Endpoints2 from './Endpoints/Endpoint2.js';
import { } from './Utility/ConfigHandler.js';

export default function () {
    let user = new User1();
} 