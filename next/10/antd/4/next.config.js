const path = require('path');
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  experimental: {
    scrollRestoration: true,
  },
  env: {},
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60,
    pagesBufferLength: 5,
  },
  cssLoaderOptions: {},
  lessVarsFilePath: './src/assets/variables.less',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = { fs: 'empty' };
    }

    config.resolve = {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '#': path.resolve(__dirname, 'src'),
        '#assets': path.resolve(__dirname, 'src/assets/'),
        '#apis': path.resolve(__dirname, 'src/apis/'),
        '#store': path.resolve(__dirname, 'src/store/'),
        '#utils': path.resolve(__dirname, 'src/utils/'),
        '#pages': path.resolve(__dirname, 'src/pages/'),
        '#hooks': path.resolve(__dirname, 'src/hooks/'),
        '#components': path.resolve(__dirname, 'src/components/'),
      },
      extensions: ['', '.js', '.json', '.jsx'],
      ...config.resolve,
    };

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    if (isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    if (isServer) {
      const antStyles = /(antd\/.*?\/style).*(?<![.]js)$/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) {
            return callback();
          }
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }

    return config;
  },
});
