import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3002',
    supportFile: false
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack'
    }
  }
})
