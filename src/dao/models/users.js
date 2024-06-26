import { Schema, model } from "mongoose";

const nameCollection = 'User';

const userSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es obligatorio']},
    lastName: { type: String, required: [true, 'El apellido es obligatorio']},
    email: { type: String, required: [true, 'El correo es obligatorio'], unique: true },
    password: { type: String, required: [true, 'La contraseña es obligatoria']},
    rol: { type: String, default: 'user', enum: ['user','admin']},
    status: { type: Boolean, default: true },
    fechaCreacion: { type: Date, default: Date.now },
});

userSchema.set('toJSON', {
    transform: function (doc, ret) {
        delete ret._v;
        return ret;
    }
});

export const userModel = model(nameCollection, userSchema);