import { promisify } from 'util';
import { exec } from 'child_process';

/**
 * Promisified version of child_process.exec for use with await
 * @param command The command to run
 * @param [options] The options to pass to exec
 */
const exec: (command: string, options?: ExecOptions) => Promise<{ stdout: string, stderr: string }> = promisify(exec);

export default exec;
