module.exports = {
  apps: [
    {
      name: 'itcea-cms',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
