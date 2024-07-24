import * as dotenv from 'dotenv';
import { resolve } from 'path';

const path = resolve(__dirname, '..', 'data', '.env');
dotenv.config({ path });

export const adminaccount = {
  user: process.env['USERNAME'] ?? '',
  password: process.env['PASSWORD'] ?? '',
};
