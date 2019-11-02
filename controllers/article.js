import {Article} from '../models';

export const addOne = async (req,res,next)=>{
    try {
      const newArticle = await new Article(req.body).save()
      res.status(201).json(newArticle)
    } catch (error) {
      console.warn(error)
    }
}
