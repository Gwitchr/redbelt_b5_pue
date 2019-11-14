import {Article} from '../models';

export const addOne = async (req,res,next)=>{
    try {
      const newArticle = await new Article(req.body).save()
      res.status(201).json({
        message:'Producto añadido con éxito',
        newArticle
      })
    } catch (error) {
      console.warn(error)
      next(error)
    }
}

// función equivalente con then y catch
// export const addOne =(req,res,next)=>{
//   const {body} = req
//   new Article(body).save().then((newArticle)=>{
//     res.status(201).json(newArticle)
//   }).catch((error)=>{
//     console.warn(error)
//   })
// }

export const listAll =async(req,res,next)=>{
  try {
    const allArticles = await Article.find()
    res.status(200).json(allArticles)
  } catch (error) {
    next(error)
  }
}
