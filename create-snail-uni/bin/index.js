#!/usr/bin/env node
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, 'default', { value: mod, enumerable: true }) : target,
    mod,
  )
);

// ../node_modules/.pnpm/minimist@1.2.8/node_modules/minimist/index.js
var require_minimist = __commonJS({
  '../node_modules/.pnpm/minimist@1.2.8/node_modules/minimist/index.js'(exports, module) {
    'use strict';
    function hasKey(obj, keys) {
      var o = obj;
      keys.slice(0, -1).forEach(function (key2) {
        o = o[key2] || {};
      });
      var key = keys[keys.length - 1];
      return key in o;
    }
    function isNumber(x) {
      if (typeof x === 'number') {
        return true;
      }
      if (/^0x[0-9a-f]+$/i.test(x)) {
        return true;
      }
      return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
    }
    function isConstructorOrProto(obj, key) {
      return (key === 'constructor' && typeof obj[key] === 'function') || key === '__proto__';
    }
    module.exports = function (args, opts) {
      if (!opts) {
        opts = {};
      }
      var flags = {
        bools: {},
        strings: {},
        unknownFn: null,
      };
      if (typeof opts.unknown === 'function') {
        flags.unknownFn = opts.unknown;
      }
      if (typeof opts.boolean === 'boolean' && opts.boolean) {
        flags.allBools = true;
      } else {
        []
          .concat(opts.boolean)
          .filter(Boolean)
          .forEach(function (key2) {
            flags.bools[key2] = true;
          });
      }
      var aliases = {};
      function aliasIsBoolean(key2) {
        return aliases[key2].some(function (x) {
          return flags.bools[x];
        });
      }
      Object.keys(opts.alias || {}).forEach(function (key2) {
        aliases[key2] = [].concat(opts.alias[key2]);
        aliases[key2].forEach(function (x) {
          aliases[x] = [key2].concat(
            aliases[key2].filter(function (y) {
              return x !== y;
            }),
          );
        });
      });
      []
        .concat(opts.string)
        .filter(Boolean)
        .forEach(function (key2) {
          flags.strings[key2] = true;
          if (aliases[key2]) {
            [].concat(aliases[key2]).forEach(function (k) {
              flags.strings[k] = true;
            });
          }
        });
      var defaults = opts.default || {};
      var argv2 = { _: [] };
      function argDefined(key2, arg2) {
        return (flags.allBools && /^--[^=]+$/.test(arg2)) || flags.strings[key2] || flags.bools[key2] || aliases[key2];
      }
      function setKey(obj, keys, value2) {
        var o = obj;
        for (var i2 = 0; i2 < keys.length - 1; i2++) {
          var key2 = keys[i2];
          if (isConstructorOrProto(o, key2)) {
            return;
          }
          if (o[key2] === void 0) {
            o[key2] = {};
          }
          if (o[key2] === Object.prototype || o[key2] === Number.prototype || o[key2] === String.prototype) {
            o[key2] = {};
          }
          if (o[key2] === Array.prototype) {
            o[key2] = [];
          }
          o = o[key2];
        }
        var lastKey = keys[keys.length - 1];
        if (isConstructorOrProto(o, lastKey)) {
          return;
        }
        if (o === Object.prototype || o === Number.prototype || o === String.prototype) {
          o = {};
        }
        if (o === Array.prototype) {
          o = [];
        }
        if (o[lastKey] === void 0 || flags.bools[lastKey] || typeof o[lastKey] === 'boolean') {
          o[lastKey] = value2;
        } else if (Array.isArray(o[lastKey])) {
          o[lastKey].push(value2);
        } else {
          o[lastKey] = [o[lastKey], value2];
        }
      }
      function setArg(key2, val, arg2) {
        if (arg2 && flags.unknownFn && !argDefined(key2, arg2)) {
          if (flags.unknownFn(arg2) === false) {
            return;
          }
        }
        var value2 = !flags.strings[key2] && isNumber(val) ? Number(val) : val;
        setKey(argv2, key2.split('.'), value2);
        (aliases[key2] || []).forEach(function (x) {
          setKey(argv2, x.split('.'), value2);
        });
      }
      Object.keys(flags.bools).forEach(function (key2) {
        setArg(key2, defaults[key2] === void 0 ? false : defaults[key2]);
      });
      var notFlags = [];
      if (args.indexOf('--') !== -1) {
        notFlags = args.slice(args.indexOf('--') + 1);
        args = args.slice(0, args.indexOf('--'));
      }
      for (var i = 0; i < args.length; i++) {
        var arg = args[i];
        var key;
        var next;
        if (/^--.+=/.test(arg)) {
          var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
          key = m[1];
          var value = m[2];
          if (flags.bools[key]) {
            value = value !== 'false';
          }
          setArg(key, value, arg);
        } else if (/^--no-.+/.test(arg)) {
          key = arg.match(/^--no-(.+)/)[1];
          setArg(key, false, arg);
        } else if (/^--.+/.test(arg)) {
          key = arg.match(/^--(.+)/)[1];
          next = args[i + 1];
          if (
            next !== void 0 &&
            !/^(-|--)[^-]/.test(next) &&
            !flags.bools[key] &&
            !flags.allBools &&
            (aliases[key] ? !aliasIsBoolean(key) : true)
          ) {
            setArg(key, next, arg);
            i += 1;
          } else if (/^(true|false)$/.test(next)) {
            setArg(key, next === 'true', arg);
            i += 1;
          } else {
            setArg(key, flags.strings[key] ? '' : true, arg);
          }
        } else if (/^-[^-]+/.test(arg)) {
          var letters = arg.slice(1, -1).split('');
          var broken = false;
          for (var j = 0; j < letters.length; j++) {
            next = arg.slice(j + 2);
            if (next === '-') {
              setArg(letters[j], next, arg);
              continue;
            }
            if (/[A-Za-z]/.test(letters[j]) && next[0] === '=') {
              setArg(letters[j], next.slice(1), arg);
              broken = true;
              break;
            }
            if (/[A-Za-z]/.test(letters[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
              setArg(letters[j], next, arg);
              broken = true;
              break;
            }
            if (letters[j + 1] && letters[j + 1].match(/\W/)) {
              setArg(letters[j], arg.slice(j + 2), arg);
              broken = true;
              break;
            } else {
              setArg(letters[j], flags.strings[letters[j]] ? '' : true, arg);
            }
          }
          key = arg.slice(-1)[0];
          if (!broken && key !== '-') {
            if (
              args[i + 1] &&
              !/^(-|--)[^-]/.test(args[i + 1]) &&
              !flags.bools[key] &&
              (aliases[key] ? !aliasIsBoolean(key) : true)
            ) {
              setArg(key, args[i + 1], arg);
              i += 1;
            } else if (args[i + 1] && /^(true|false)$/.test(args[i + 1])) {
              setArg(key, args[i + 1] === 'true', arg);
              i += 1;
            } else {
              setArg(key, flags.strings[key] ? '' : true, arg);
            }
          }
        } else {
          if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
            argv2._.push(flags.strings._ || !isNumber(arg) ? arg : Number(arg));
          }
          if (opts.stopEarly) {
            argv2._.push.apply(argv2._, args.slice(i + 1));
            break;
          }
        }
      }
      Object.keys(defaults).forEach(function (k) {
        if (!hasKey(argv2, k.split('.'))) {
          setKey(argv2, k.split('.'), defaults[k]);
          (aliases[k] || []).forEach(function (x) {
            setKey(argv2, x.split('.'), defaults[k]);
          });
        }
      });
      if (opts['--']) {
        argv2['--'] = notFlags.slice();
      } else {
        notFlags.forEach(function (k) {
          argv2._.push(k);
        });
      }
      return argv2;
    };
  },
});

// index.ts
var import_minimist = __toESM(require_minimist(), 1);
import { intro, outro, group, text, select, cancel, confirm, log } from '@clack/prompts';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';
import pic from 'picocolors';
import template from 'lodash.template';

// package.json
var version = '1.2.2';

// index.ts
var { bold, green, red, gray } = pic;
var argv = (0, import_minimist.default)(process.argv.slice(2));
var ScaffoldUIType = /* @__PURE__ */ ((ScaffoldUIType2) => {
  ScaffoldUIType2['Default'] = 'Wot-Design';
  ScaffoldUIType2['UvUi'] = 'Uv-ui';
  ScaffoldUIType2['UviewPlus'] = 'Uview-plus';
  ScaffoldUIType2['TuniaoUI'] = 'TuniaoUI';
  return ScaffoldUIType2;
})(ScaffoldUIType || {});
async function create() {
  intro(bold(green(`\u6B22\u8FCE\u4F7F\u7528 snail-uni@${version} \u811A\u624B\u67B6\uFF01`)));
  let title = '';
  const options = await group(
    {
      title: () =>
        text({
          message: '\u9879\u76EE\u540D\u79F0:',
          placeholder: 'snai-uni-app',
          validate: (value) => {
            title = value;
            if (fs.existsSync(value))
              return '\u274C\u8BE5\u9879\u76EE\u540D\u79F0\u5DF2\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165!';
          },
        }),
      description: () =>
        text({
          message: '\u9879\u76EE\u63CF\u8FF0:',
          placeholder: `A ${title || 'snai-uni-app'} project`,
        }),
      uiType: () =>
        select({
          message: '\u9009\u62E9 UI \u6846\u67B6:',
          options: [
            {
              // @ts-ignore
              value: 'Wot-Design' /* Default */,
              label: 'wot-design-ui',
              hint: '\u63A8\u8350',
            },
            {
              // @ts-ignore
              value: 'Uv-ui' /* UvUi */,
              label: 'uv-ui',
            },
            {
              // @ts-ignore
              value: 'Uview-plus' /* UviewPlus */,
              label: 'uview-plus',
            },
            {
              // @ts-ignore
              value: 'TuniaoUI' /* TuniaoUI */,
              label: 'tuniao-ui',
            },
          ],
        }),
      useTs: () =>
        confirm({
          message: '\u662F\u5426\u4F7F\u7528 TypeScript?',
          initialValue: true,
        }),
      useTabbar: () =>
        confirm({
          message: '\u662F\u5426\u542F\u7528 Tabbar?',
          initialValue: true,
        }),
      useEslint: () =>
        confirm({
          message: '\u662F\u5426\u4F7F\u7528Eslint\u4EE3\u7801\u89C4\u8303\uFF1F',
          initialValue: true,
        }),
    },
    {
      onCancel: () => {
        cancel('\u60A8\u5DF2\u7ECF\u53D6\u6D88\u4E86\u521B\u5EFA\u9879\u76EE\uFF01');
        process.exit(0);
      },
    },
  );
  outro(scaffold(options));
}
var getPackageManger = () => {
  const name = process.env?.npm_config_user_agent || 'npm';
  return name.split('/')[0];
};
function scaffold({
  title = 'snail-uni-app',
  description = 'A snail-uni-app project',
  uiType: uiType2 = 'Wot-Design' /* Default */,
  useTs,
  useTabbar,
  useEslint,
}) {
  const resolvedRoot = path.resolve('./', title);
  const templateDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../template');
  const data = {
    title: JSON.stringify(title),
    description: JSON.stringify(description),
    uiType: uiType2,
    useTs,
    useTabbar,
    useEslint,
  };
  const renderFile = (file) => {
    const filePath = path.resolve(templateDir, file);
    let targetPath = path.resolve(resolvedRoot, file);
    const src = fs.readFileSync(filePath, 'utf-8');
    const templateSettings = {
      interpolate: /<%=([\s\S]+?)%>/g,
      evaluate: /<%([\s\S]+?)%>/g,
      importData: true,
    };
    const compiled = template(src, templateSettings)(data);
    if (useTs) {
      targetPath = targetPath.replace(/\.(m?)js$/, '.$1ts');
    } else targetPath = targetPath.replace(/\.(m?)ts$/, '.$1js');
    targetPath = targetPath.replace(/\.(m?)temp$/, '');
    fs.outputFileSync(targetPath, compiled);
  };
  const filesToScaffold = [
    'src/layouts/default.vue',
    'src/pages/index/index.vue',
    'src/pages/my/index.vue',
    'index.html',
    'src/App.vue',
    'src/main.ts',
    'src/router/index.ts',
    'src/router/interceptors.ts',
    'src/router/white-list.ts',
    'src/store/index.ts',
    'src/store/modules/user.ts',
    'src/store/modules/counter.ts',
    'src/apis/index.ts',
    'src/manifest.json',
    'src/pages.json',
    'src/utils/request.ts',
    'vite.config.ts',
    'uno.config.ts',
    'manifest.config.ts',
    'pages.config.ts',
  ];
  const envFilesToScaffold = ['env/.env', 'env/.env.development', 'env/.env.production', 'env/.env.test'];
  const projectConfigFilesToScaffold = [
    '.vscode/extensions.json',
    '.vscode/settings.json',
    '.editorconfig',
    '.npmrc.temp',
    '.gitignore.temp',
    'package.json',
  ];
  const eslintFilesToScaffold = [
    '.eslintignore',
    '.eslintrc.json',
    '.prettierignore',
    '.stylelintignore',
    '.stylelintrc.json',
  ];
  const tabbarFilesToScaffold = ['src/layouts/tabbar.vue'];
  const tsFilesToScaffold = ['src/env.d.ts', 'tsconfig.json', 'shims-uni.d.ts'];
  if (useTs) projectConfigFilesToScaffold.push(...tsFilesToScaffold);
  if (useEslint) projectConfigFilesToScaffold.push(...eslintFilesToScaffold);
  const staticFilesToScaffold = ['src/uni.scss'];
  filesToScaffold.push(...projectConfigFilesToScaffold);
  filesToScaffold.push(...staticFilesToScaffold);
  filesToScaffold.push(...envFilesToScaffold);
  if (useTabbar) filesToScaffold.push(...tabbarFilesToScaffold);
  const moveFilesToScaffold = ['verify-commit.mjs', 'src/types/auto-import.d.ts', 'src/types/uni-pages.d.ts'];
  if (useTabbar)
    moveFilesToScaffold.push(
      'src/static/tabbar/home_active.png',
      'src/static/tabbar/home_default.png',
      'src/static/tabbar/my_default.png',
      'src/static/tabbar/my_active.png',
    );
  moveFilesToScaffold.push('src/static/logo.png');
  for (const filePath of moveFilesToScaffold) {
    moveFiles(templateDir, resolvedRoot, filePath);
  }
  for (const file of filesToScaffold) {
    renderFile(file);
  }
  const pm = getPackageManger();
  return `\u{1F389} \u4F60\u5DF2\u6210\u529F\u521B\u5EFA! \u73B0\u5728\u8BF7\u4F7F\u7528 ${green(`${pm}`)} \u8FD0\u884C\u4F60\u7684\u9879\u76EE

   \u8FDB\u5165\u9879\u76EE\uFF1A${green(`cd ${title}`)}
   \u5B89\u88C5\u4F9D\u8D56\uFF1A${green(`${pm} install`)} ${gray(`(\u5B89\u88C5\u524D\uFF0C\u8BF7\u68C0\u67E5Node\u7248\u672C>= ${green('18.0.0')})`)} 
   \u8FD0\u884C\u9879\u76EE\uFF1A${green(`${pm} dev`)} ${gray(`(\u9ED8\u8BA4\u8FD0\u884C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F)`)} 
   snail-uni\u6587\u6863: ${green('https://hu-snail.github.io/snail-uni')}
`;
}
function moveFiles(templateDir, resolvedRoot, filePath) {
  fs.copySync(path.resolve(templateDir, filePath), path.resolve(resolvedRoot, filePath));
}
var createTemp = (title, useTs, tabbar, eslint, ui) => {
  if (title) {
    if (fs.existsSync(title))
      log.error(red('\u8BE5\u540D\u79F0\u5DF2\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165'));
    else
      outro(
        scaffold({
          title,
          useTs: useTs === 'ts',
          useTabbar: tabbar === 'tabbar',
          useEslint: eslint === 'eslint',
          uiType: ui,
        }),
      );
  } else create();
};
var command = argv._[0];
var projectName = argv._[1];
var isTs = argv._[2];
var isTabbar = argv._[3];
var isEslint = argv._[4];
var uiType = argv._[5];
if (!['Wot-Design', 'Uv-ui', 'Uview-plus', 'TuniaoUI'].includes(uiType)) {
  uiType = 'Wot-Design' /* Default */;
}
if (command === 'create') {
  createTemp(projectName, isTs, isTabbar, isEslint, uiType);
} else createTemp(projectName, isTs, isTabbar, isEslint, uiType);
export { ScaffoldUIType, create, createTemp, moveFiles, scaffold };
