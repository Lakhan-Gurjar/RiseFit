// eslint-disable-next-line
export const createError = async()=> {
    const err = new Error();
    err.status = status;
    err.message = message;
    return err;
};