import express from 'express';
import { creatething, deleteThing, getAllThing, getOnetThing, modifyOneThing} from '../controllers/controller.stuff.js'
import storage from '../middlewares/multer-config.js';
import  {verifyToken} from '../middlewares/auth.js'
const routerStuff = express.Router()
routerStuff.post('/',verifyToken,storage,creatething)
routerStuff.put('/:id',verifyToken,storage,modifyOneThing)
routerStuff.delete('/:id',verifyToken,deleteThing)
routerStuff.get('/:id',verifyToken,getOnetThing)
routerStuff.get('/',verifyToken,getAllThing)
export default routerStuff;

