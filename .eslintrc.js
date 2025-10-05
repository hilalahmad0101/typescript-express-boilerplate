module.exports = {
    root: true,
    env: {
        node: true,
        es2021: true
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier'
    ],
    rules: {
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    }
};