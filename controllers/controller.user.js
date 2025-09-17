import User from "../models/User.js";
import  bcrypt  from "bcrypt";
import   jsonwebtoken   from 'jsonwebtoken';
export const signup = (req,res,next)=>{
  bcrypt
  .hash(req.body.password,10)
  .then(hash=> {
      const user = new User({
        email: req.body.email,
        password: hash
      })
      user.save()
      .then(()=>res.status(201).json({message:"user creer ! "}))
      .catch(error=>res.status(500).json(error))

    }
  )
  .catch(error=>res.status(500).json(error))
}

export const login = (req,res,next)=>{
    User.findOne({email: req.body.email})
    .then(user=> {
      if(user === null){
        res.status(401)
        .json({message: "paire identifiant/mot de passe incorrecte ! "})
      }
      else{
        bcrypt.compare(req.body.password,user.password)
        .then(
          valide=>{
            if(!valide){
              res.status(401)
              .json({message: "paire identifiaint/mot de passe incorrecte ! "})
            }
            else{
              res.status(200)
              .json({
                userId: user._id,
                token: jsonwebtoken.sign(
                  {userId: user._id},
                  'RANDOM_TOKEN_SECRET',
                  {expiresIn: '24h'}
                )
              })
            }
          }
        )
        .catch(error=>res.status(400).json(error))
      }
    })
    .catch(error=>res.status(400).json(error))
}




