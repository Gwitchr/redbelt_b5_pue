import {
  Ticket,
  Article
} from '../models';
import {
  IVA
} from '../constants';

export const addOne = async (req, res, next) => {
  const {
    body: {
      articulos
    }
  } = req

  try {
    let idsToFind = articulos.reduce((acc, el) => {
      return acc.concat(el.id)
    }, [])
    const foundArticles = await Article.find({
      _id: idsToFind
    })
    const subtotal = articulos.reduce((acc, article, i) => {
      // console.log('article',article)
      const artPrice = foundArticles.find((dbArticle) => {
        if (dbArticle._id.toString() === article.id) return dbArticle
      })
      updateExistances(artPrice, article.cantidad)
      return acc + (parseInt(article.cantidad, 10) * parseInt(artPrice.precio, 10))
    }, 0)

    const total = subtotal * (1 + IVA)
    const iva = subtotal * IVA

    const newTicket = await new Ticket({
      subtotal,
      total,
      iva,
      articulos: idsToFind
    }).save()

    // console.log('foundArt',foundArt)


    // const newTicket = await new Ticket(body).save()
    res.status(201).json(newTicket)
  } catch (error) {
    next(error)
    console.warn(error)
  }

}

const updateExistances = async (article, cantidad) => {
  try {
    const updated = await Article.update({
      _id: article._id
    }, {
      existencias: (parseInt(article.existencias, 10) - parseInt(cantidad, 10))
    })
  } catch (e) {

  }
}

export const listAll = async (req, res, next) => {
  try {
    const allTickets = await Ticket.find()
    .populate({path:"articulos"})
    res.status(200).json(allTickets)
  } catch (error) {
    next(error)
    console.warn(error)
  }
}
