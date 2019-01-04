// https://eslint.org/docs/user-guide/configuring
// eslint-disable-next-line 
/* eslint-disable */
module.exports = {
    root: true,

    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 2017,
      sourceType: 'module'
    },

    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // Vue: false
    },

    rules: {
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
          flatTernaryExpressions: true
        }
      ],
      'no-undef-init': 1,
      'no-trailing-spaces': 0,
      'no-undefined': 0,
      'no-void': 0,
      'no-unused-vars': 0,
      'no-param-reassign': 0,
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'always',
          asyncArrow: 'always'
        }
      ],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },

  env: {
    node: true
    },

  'extends': [
    'standard',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ]
};
