import   mongoose  from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
const Userschema = mongoose.Schema({
  email: {type: String,required: true,unique:true},
  password:{type: String,required:true}
})

Userschema.plugin(mongooseUniqueValidator)

export default mongoose.model('User',Userschema)

