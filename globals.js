// global variables for webpack and app hot-reload. Make them work more easly.
global.__TEST__ = process.env.NODE_ENV === 'test';
global.__DEV__ = process.env.NODE_ENV === 'development';
global.__PROD__ = process.env.NODE_ENV === 'production';
global.__NODE_ENV__ = process.env.NODE_ENV;
global.__PORT__ = process.env.PORT;
