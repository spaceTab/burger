const orm = require('../config/orm.js');

const burgers = {

    select: _cb => {
        console.log(`in select`);
        orm.select_all('burgers', res => {
            _cb( res )
        });
    },

    insertOne: (columns, values, _cb) => {
        console.log(values);
        orm.insert_one('burgers', columns, values, (res) => {
            _cb(res);
        });
    },

    updateOne: (obsVals, flag, _cb) => {
        orm.update_one('burgers', obsVals, flag, _cb, ( res ) => {
            _cb( res );
        });
    }

}

module.exports = burgers;