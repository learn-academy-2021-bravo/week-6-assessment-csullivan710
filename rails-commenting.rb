# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# BlogPostsControlleer inherits from ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # This line of code will show all BlogPosts that have been created
    @posts = BlogPost.all
  end

  def show
    # ---3)
    # You can get the blog post by the id key
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #  Will create a new blog post
  def new
    @post = Post.new
  end

  def create
    # ---5)
    # Will check to make sure all the parameters of the blog post are present, and if not, it will redirect to new blog path
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # Allows you to edit the blog post information by finding it via the id key
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Allows you to update the blog post, checking to make sure all information entered is on the blog post parameters, if not it will redirect to edit blog pathway
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # Allows you to destroy blog post by finding it via the id key, if the id key is not valid, it will redirect back to the destroy  blog pathway
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # The keyword private allows this information to not be seen by users, and or changed
  private
  def blog_post_params
    # ---10)
    # This defines the parameters required to make a blog post
    params.require(:blog_post).permit(:title, :content)
  end

end
