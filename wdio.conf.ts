import { config as baseConfig } from '@wdio/sync';

export const config: WebdriverIO.Config = {
  runner: 'local',
  specs: ['./tests/**/*.ts'],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
  }],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  services: ['chromedriver'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  autoCompileOpts: {
    tsNodeOpts: {
      transpileOnly: true,
      project: './tsconfig.json'
    }
  }
};
