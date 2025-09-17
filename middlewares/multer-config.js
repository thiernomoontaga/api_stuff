import multer from "multer"

const MIME_TYPE = {
  'image/jpeg':'jpg',
  'image/jpg':'jpg',
  'image/png':'png'
}
const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
      callback(null,'images')
    },
    filename: (req,file,callback)=>{
      const name = file.originalname.split(' ').join('_');
      const extension = MIME_TYPE[file.mimetype];
      callback(null,name+ Date.now()+'.'+extension);
    }
})


export  default multer({storage}).single('image')

