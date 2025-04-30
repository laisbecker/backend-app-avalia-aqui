import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product"
import AppError from "../utils/AppError";

class ProductController {

  private productRepository

  constructor() {
    this.productRepository = AppDataSource.getRepository(Product)
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, category, brand, description, price, image } = req.body

      if (!name) {
        throw new AppError('É obrigatório preencher o nome', 400)
      }

      if (!category) {
        throw new AppError('É obrigatorio preencher a categoria', 400)
      }

      if (!brand) {
        throw new AppError('É obrigatório preencher a marca', 400)
      }

      if (!description) {
        throw new AppError('É obrigatório preencher a descrição', 400)
      }

      if (!price || price <= 0) {
        throw new AppError('É obrigatório preencher o preço', 400)
      }

      if (!image) {
        throw new AppError('É obrigatório preencher a imagem', 400)
      }

      const product = this.productRepository.create({name, category, brand, description, price: +price, image})
      await this.productRepository.save(product)

      res.status(201).json({
        id: product.id,
        name: product.name, 
        category: product.category, 
        brand: product.brand, 
        description: product.description, 
        price: product.price,
        image: product.image
      })

    } catch (error) {
      next(error)
    }
  }
}

export default ProductController;
