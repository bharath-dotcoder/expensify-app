//calling the actual library, or it throws StackTraceError which is function calling itself
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};