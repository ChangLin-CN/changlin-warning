
var warning =function( condition){return condition};
if (process.env.NODE_ENV !== 'production') {
    warning = function(condition, message) {
        if (condition && typeof console !== 'undefined') {
            console.error(new Error(message));
        }
        return condition
    }
}

exports.warning =warning
