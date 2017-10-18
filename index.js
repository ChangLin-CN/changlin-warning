
var warning =function( condition){return condition};
if (process.env.NODE_ENV !== 'production') {
    warning = function(condition, message) {
        if (condition && typeof console !== 'undefined') {
            if(typeof message==='string'){
                message=new Error(message)
            }
            console.error(message)
        }
        return condition
    }
}

exports.warning =warning
