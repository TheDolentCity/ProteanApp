const POSTCSS_LOADER = "postcss-loader";
const isPostCssLoader = ({ loader } = {}) => loader === POSTCSS_LOADER;
const getOneOf = ({ oneOf } = {}) => {
  if (oneOf) {
    return oneOf;
  }

  return false;
};

const defaultOptions = {
  autoPrefixer: true,
  cssInJs: false
}

export default (options = {}) => ({
  webpack: config => {
    // Load TailwindCsss
    const opts = { ...defaultOptions, ...options };
    const { rules } = config.module;
    const { oneOf } = rules.find(getOneOf);

    for (const item of oneOf) {
      const postcssLoader =
        item && item.loader && item.loader.find(isPostCssLoader);

      if (
        postcssLoader &&
        postcssLoader.options &&
        postcssLoader.options.plugins
      ) {
        const plugins = postcssLoader.options.plugins;
        const tailwind = [require("tailwindcss")]

        if (opts.autoPrefixer) {
          tailwind.push(require('autoprefixer'))
        }

        Object.assign(postcssLoader.options, {
          plugins: [
            ...tailwind, ...(plugins.length ? plugins : [])
          ]
        });

        break;
      }
    }

    if (opts.cssInJs) {
      config.node = {
        fs: 'empty'
      }
    }

    // Load MDX
    config.module.rules.map(rule => {
      if (typeof rule.test !== 'undefined' || typeof rule.oneOf === 'undefined') {
        return rule
      }
      rule.oneOf.unshift({
        test: /.mdx$/,
        use: ['babel-loader', '@mdx-js/loader']
      })
      return rule
    });

    return config;
  }
});