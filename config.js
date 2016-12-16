exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://<dbUsername>:<dbPassword>@ds049538.mlab.com:49538/simply_todos' :
                            'mongodb://localhost/simply-to-dos');
exports.PORT = process.env.PORT || 8080;
