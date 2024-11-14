import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginJs from '@eslint/js'
import pluginNext from '@next/eslint-plugin-next'
import pluginReact from 'eslint-plugin-react'
import pluginHooks from 'eslint-plugin-react-hooks'


const ignores = [
  '.next',
  // Build outputs
  // '**/.next/',
  // '**/out/',
  // '**/dist/',
  // '**/build/',

  // // Package manager
  // '**/pnpm-lock.yaml',
  // '**/.pnpm-debug.log',

  // // Cache & Generated
  // '**/.eslintcache',
  // '**/next-env.d.ts',

  // // Config files
  // '*.config.{js,ts,mjs}', // process all config files at once
  // '**/tsconfig.json',

  // // Environment
  // '**/.env*',

  // // IDE & System
  // '**/.idea/',
  // '**/.DS_Store',
]

const react = {
  name: 'react/jsx-runtime',
  plugins: {
    react: pluginReact,
  },
  rules: pluginReact.configs['jsx-runtime'].rules,
  settings: {
    react: {
      version: 'detect',
    },
  },
}

const hooks =    {
  name: 'react-hooks/recommended',
  plugins: { 'react-hooks': pluginHooks },
  rules: pluginHooks.configs.recommended.rules,
}

const next = {
  name: 'next/core-web-vitals',
  plugins: { '@next/next': pluginNext },
  rules: {
    ...pluginNext.configs.recommended.rules,
    ...pluginNext.configs['core-web-vitals'].rules,
  },
}

const custom =   {
  name: 'custom',
  rules: {
    // '@typescript-eslint/no-unused-vars': 1,
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'eol-last': ['error', 'always'],
    eqeqeq: ['error', 'always'],
  },
}

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  { ignores },
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
  react,
  hooks,
  next,
  custom,
)
