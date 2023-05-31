import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

// apply a middleware function to encrupt password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(9);
  this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model('User', userSchema);

export default User;
