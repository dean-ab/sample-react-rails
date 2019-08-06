class ArticlesController < ApplicationController

  # CRUD operations: index, show, new, edit, create, update and destroy

  # R - INDEX & SHOW
  # list all articles
  def index
    @articles = Article.all
  end

  def new
    @article = Article.new
  end

  # @article will be available for the articles/show.html.erb view
  def show
    @article = Article.find(params[:id])
  end

  # C - CREATE
  def create
    @article = Article.new(article_params)
    if @article.save
      redirect_to @article
    else
      render 'new'
    end
  end

  # U - UPDATE
  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      redirect_to @article
    else
      render 'edit'
    end
  end

  # D - DELETE
  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to articles_path
  end

  # private methods goes down here
  private def article_params
    params.require(:article).permit(:title, :text)
  end
end
