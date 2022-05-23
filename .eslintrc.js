module.exports = {
  parserOptions: { project: './tsconfig.eslint.json' },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  env: {
    node: true,
  },
  rules: {
    // Fix ts(7027) not being thrown
    'no-unreachable': 2,
  },
};
