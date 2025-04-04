import multer from "multer"

import path from 'path'
 
const storage = multer.diskStorage(
    {
        destination: './public/profilePics',
        filename: (req, file, cb) => {
            const unixtime = Date.now()
            const name_ary = file.originalname.split(".")
            cb(null, `${file.originalname.split(0,-1)}_${unixtime}.${name_ary[name_ary.length-1]}`)
        }

    }
)

const image_upload = multer({storage:storage}).single("profilePic") // pic is the name of file input in input file tag


export {image_upload}