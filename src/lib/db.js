const { username, password } = process.env;
export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.n0lmgmo.mongodb.net/productDB?retryWrites=true&w=majority";