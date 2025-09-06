import path from 'node:path';
import { log } from 'node:console';

export const PATH_DB = path.join('src', 'db', 'db.json');
log(PATH_DB);
