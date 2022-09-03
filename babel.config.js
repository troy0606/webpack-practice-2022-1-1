module.exports = {
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false,
        corejs: 3,
        helpers: true,
        regenerator: true,
        version: '7.0.0-beta.0',
      },
     ],
  ],
  presets: [
  //   [
  //     '@babel/preset-env',
  //     {
  //       corejs: '3', // 指定core-js的版本，2或者3，这里我们用最新版3
  //       useBuiltIns: 'usage', // usage是最佳实践，会按需把core-js和regenerator引入（所谓按需就是按下面的target和编译的js用到的es6语法来判断）
  //       // 目標環境
  //       targets: '> 0.25%, not dead',
  //     },
  //   ],
    '@babel/preset-react',
  ],
　exclude: [/node_modules/], // 不要编译node_modules，不然会出一些奇奇怪怪的问题
};