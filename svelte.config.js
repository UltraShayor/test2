import adapter from '@sveltejs/adapter-static';

export default {
  // ... other configurations
  adapter: adapter({
    pages: 'build',
    assets: 'build',
    fallback: '200',
  }),
};
export default config;
