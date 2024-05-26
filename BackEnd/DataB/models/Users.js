import mongoose from 'mongoose';

const { Schema } = mongoose;

const usersSchema = new Schema({
    name: {
        type: String,
    },
    surname: {
        type: String
    },
    mail: {
        type: String
    },
    password: {
        type: String
    }
    
});

const User = mongoose.model("Users", usersSchema);

export default User;
