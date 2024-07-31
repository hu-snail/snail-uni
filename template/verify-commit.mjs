import pico from 'picocolors';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const msgPath = path.resolve('.git/COMMIT_EDITMSG');
const msg = readFileSync(msgPath, 'utf-8').trim();

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)((.+))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.log(pico.yellow(`\n你提交的信息: ${msg}\n`));
  console.error(
    `  ${pico.white(pico.bgRed(' 错误 '))} ${pico.red(
      `无效的提交信息格式.`
    )}\n\n` +
      pico.red(`  正确的提交消息格式. 例如:\n\n`) +
      `    ${pico.green(`feat: add a new feature`)}\n` +
      `    ${pico.green(`fix: fixed an interaction bug`)}\n\n` +
      pico.red(
        `我们参考了Vue3的方案.\n` +
          `访问 https://github.com/vuejs/core/blob/main/.github/commit-convention.md 查看更多细节.\n`
      )
  );
  process.exit(1);
}
