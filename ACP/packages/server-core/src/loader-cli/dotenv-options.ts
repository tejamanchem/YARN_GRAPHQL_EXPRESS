import * as path from 'path';

const p = path.join(process.cwd(), `./.env`);

console.log(`-----------------------------Loading environment from ${p}`);
console.log(p)
console.log('l;klkklkslklskl\n ')
const dotEnvOptions = {
  path: p,
};
export { dotEnvOptions };
