/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	"plugins": [
		'svelte3'
	],
    "extends": [ "plugin:compat/recommended" ],
    "overrides": [
		{
			files: [ '*.svelte' ],
			processor: 'svelte3/svelte3'
		}
    ],
	"ignorePatterns": [ "*.js" ], // Ignore .js files
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		eqeqeq: 'off',
		'no-tabs': 'off',
		indent: 'off',
		'space-in-parens': [ 'error', 'always' ],
		'no-return-assign': 'off',
		'no-useless-escape': 'off',
		'space-before-function-paren': [ 'error', 'never' ],
		'brace-style': [ 'error', '1tbs', { allowSingleLine: true }],
		'block-spacing': [ 'error', 'always' ],
		'keyword-spacing': [ 'error', {
			overrides: {
				if: {
					after: false
				},
				for: {
					after: false
				},
				while: {
					after: false
				}
			}
		}],
		'no-multi-spaces': [ 'error', {
			exceptions: {
				VariableDeclarator: true,
				ImportDeclaration: true,
				Property: true
			}
		}],
		'key-spacing': [ 'error', {
			beforeColon: false,
			mode: 'minimum'
		}],
		'array-bracket-spacing': [ 'error', 'always', {
			objectsInArrays: false,
			arraysInArrays: false
		}],
    }
}