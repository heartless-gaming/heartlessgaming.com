module.exports = {
  apps: [
    {
      name: 'Heartless Gaming',
      port: '4000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        PORT:'4000',
      },
    }
  ]
}
