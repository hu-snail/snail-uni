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

// ../../node_modules/.pnpm/minimist@1.2.8/node_modules/minimist/index.js
var require_minimist = __commonJS({
  '../../node_modules/.pnpm/minimist@1.2.8/node_modules/minimist/index.js'(exports, module) {
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

// src/index.ts
var import_minimist = __toESM(require_minimist(), 1);
import { intro, outro, group, text, select, cancel, confirm, log } from '@clack/prompts';
import { fileURLToPath } from 'url';
import path from 'path';
import c from 'picocolors';
var argv = (0, import_minimist.default)(process.argv.slice(2));
var ScaffoldUIType = /* @__PURE__ */ ((ScaffoldUIType2) => {
  ScaffoldUIType2['Default'] = 'Wot Design Ui';
  ScaffoldUIType2['UvUi'] = 'Uv-ui';
  ScaffoldUIType2['UviewPlus'] = 'Uview-plus';
  ScaffoldUIType2['TuniaoUI'] = 'TuniaoUI';
  return ScaffoldUIType2;
})(ScaffoldUIType || {});
async function init(root2) {
  intro(c.bold(c.cyan('\u6B22\u8FCE\u4F7F\u7528snail-uni\u811A\u624B\u67B6\uFF01')));
  const options = await group(
    {
      root: async () => {
        if (root2) return root2;
        return text({
          message: '\u9879\u76EE\u6839\u76EE\u5F55\u8DEF\u5F84:',
          initialValue: './',
          placeholder: '\u8BF7\u8F93\u5165\u9879\u76EE\u6839\u76EE\u5F55\u8DEF\u5F84',
          validate: (value) => {
            if (!value) return '\u6839\u76EE\u5F55\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A';
            if (value.includes(' ')) return '\u6839\u76EE\u5F55\u8DEF\u5F84\u4E0D\u80FD\u6709\u7A7A\u683C';
          },
        });
      },
      title: () =>
        text({
          message: '\u9879\u76EE\u540D\u79F0:',
          initialValue: 'snail-uni-app',
          placeholder: '\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0',
          validate: (value) => {
            if (!value) return '\u9879\u76EE\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A';
          },
        }),
      description: () =>
        text({
          message: '\u9879\u76EE\u63CF\u8FF0:',
          initialValue: 'A Snail-uni-app project',
          placeholder: '\u8BF7\u8F93\u5165\u9879\u76EE\u63CF\u8FF0',
          validate: (value) => {
            if (!value) return '\u9879\u76EE\u63CF\u8FF0\u4E0D\u80FD\u4E3A\u7A7A';
          },
        }),
      uiType: () =>
        select({
          message: '\u9009\u62E9 UI \u6846\u67B6:',
          options: [
            {
              // @ts-ignore
              value: 'Wot Design Ui' /* Default */,
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
  root: root2 = './',
  title = 'My Awesome Project',
  description = 'A Vite + Vue3 + TypeScript project',
  uiType,
  useTs,
}) {
  console.log('root:' + root2);
  const resolvedRoot = path.resolve(root2);
  console.log('resolvedRoot:' + resolvedRoot);
  const templateDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../play');
  console.log('templateDir' + templateDir);
  const data = {
    title: JSON.stringify(title),
    description: JSON.stringify(description),
    uiType,
    useTs,
  };
  console.log(data);
  const pm = getPackageManger();
  return `\u4F60\u5DF2\u6210\u529F\u521B\u5EFA! \u73B0\u5728\u8BF7\u4F7F\u7528 ${c.cyan(`${pm === 'npm' ? 'npx' : pm}`)} \u8FD0\u884C\u4F60\u7684\u9879\u76EE`;
}
var command = argv._[0];
var root = argv._[command ? 1 : 0];
if (root) {
  argv.root = root;
}
if (command === 'init') {
  init(argv.root);
} else {
  log.warning(`\u65E0\u6548\u7684\u547D\u4EE4: ${command}`);
}
export { ScaffoldUIType, init, scaffold };
