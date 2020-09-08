const type = require( '../infra/type' );

const InputRoutes = {

    origin : {
        type : type.String,
        required : true,
        isKey : true,
        length : 3
    },

    destiny : {
        type : type.String,
        required : true,
        isKey : true,
        length : 3
    },

    value : {
        type : type.Number,
        required : true,
        isKey : true,
        decimal : 0
    }

}

module.exports = InputRoutes;