import { randomBytes } from 'crypto';

const x = randomBytes(64).toString('hex');
console.log(x);
