import pluginJs from '@eslint/js'
import pluginNext from '@next/eslint-plugin-next'
import pluginImport from 'eslint-plugin-import'
import pluginReact from 'eslint-plugin-react'
import pluginHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

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

const imports = {
  name: 'import/order',
  plugins: {
    import: pluginImport,
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'external',   // 2. Внешние зависимости (react, next, lodash)
          'internal',   // 3. Внутренние пути (@/components, @/lib)
          ['parent', 'sibling'], // 4. Родительские и соседние файлы
          'index',      // 5. index-файлы
        ],
        'newlines-between': 'always', // Пустые строки между группами
        alphabetize: {
          order: 'asc', // Сортировка от A-Z
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '{next,next/**}',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'], // Важно: исключим их из стандартной обработки
      },
    ],
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
  imports,
  custom,
)
