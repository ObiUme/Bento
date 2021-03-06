class ProductsController < ApplicationController

    def index
        render json: Product.all
    end

    def show
        product = Product.find(params[:id])
        render json: product
    end

    def update
        product = Product.find(params[:id])
        product.update!(product_params)
        render json: product
    end

    def create
        product = Product.create!(product_params)
        render json: product, status: :created 
    end

    def destroy
        product = Product.find(params[:id])
        product.destroy
        head :no_content
    end

    private 

    def product_params
        params.permit(:name, :price, :description, :image)
    end
end
