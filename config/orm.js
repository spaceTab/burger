const connect = require("./connections.js");

//helper function to gather the correct 
//amount of '? ?' for input
const get_marks = num => {
    let marcArr = [];   //pay homage ;)

    for (let i = 0; i < num; i++) {
        marcArr.push('?');
    }

    return marcArr.toString();
};

const objToSql = obj => {
    let objArr = [];

    // loop through the keys and push 'key: value' as a string int objArr
    for (let key in obj) {
        let value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            // if string with spaces, add quotations (Agent Dale Cooper => 'Agent Dale Cooper')
            if (typeof value === 'string' && value.indexOf(" ") >= 0) {
                value = `'${value}'`;
            }
            // e.g. {name: 'Agent Dale Cooper'} => {"name='Agent Dale Cooper'"}
            // e.g. {devourer: true} => {"devourer=true"}
            objArr.push(`${key}=${value}`);
        };
        console.log(objArr, 'objArray')
    }
    // translate objArray of strings to a single comma-separeted string
    return objArr.toString();
}


const orm = {
    select_all: (table, _cb) => {
        console.log('in select')
        let query = `SELECT * FROM ${table}`;
       
        connect.query(query, (error, res) => {
            if (error) throw error;

            _cb( res );
        });
    }, 

    insert_one: (table, columns, values, _cb) => {
        console.log('here');
        let getQuery = `INSERT INTO ${table} (${columns.toString()}) 
            VALUES (${get_marks(values.length)});`;
        console.log('at insert', getQuery);
        connect.query(getQuery, values, (error, res) => {
            if (error) throw error;
            console.log(res);
            _cb( res );
        });
    }, 

    update_one: (table, objColVals, flag, _cb) => {
        let getQuery = `UPDATE ${table} SET ${objToSql(objColVals)}
            WHERE burger_id = ${flag}`;

            connect.query(getQuery, (error, result) => {
                if (error) throw error;

                _cb( result )
            })
    }
}
module.exports = orm;


// const orm = {
//     select_all: table => {
//         return new Promise( (resolve, reject) => {

//             let getQuery = `SELECT * FROM ${table}`
//             connect.query( getQuery, ( err, res ) => {
//                 if (err) throw err;
//                 console.log(res);
//                 return resolve( res );
//             });
//         });
//     },
//     insertion: ( table, newBurger ) => {
//         return new Promise( (resolve, reject) => {

//             let getQuery = `INSERT INTO ${table} SET ?`
//             connect.query(getQuery, newBurger, (err, res) => {
//                 if (err) throw err;

//                 return resolve( res )
//             });
//         });
//     }, 
//     update_burger: ( table, burgId, burgName, isDevour ) => {
//         return new Promise( (resolve, reject) => {
//             let getQuery = `INSERT INTO ${table} SET ?`; //{

//             connect.query(getQuery, [ true, isDevour ], 
//                 (err, res) => {
//                     if (err) throw err;

//                     return resolve( res );
//             })
//         })
//     }, 
// }

// module.exports = orm;