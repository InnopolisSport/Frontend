module.exports = {
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'next/core-web-vitals',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    ignorePatterns: ['__ENV.js'],
    rules: {
        'no-console': 'off',
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        'import/prefer-default-export': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/jsx-props-no-spreading': 'off',
        'react/destructuring-assignment': 'off',
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'no-param-reassign': 'off',
        '@next/next/no-img-element': 'off',
        'react/no-array-index-key': 'off',
    },
};
