# 🗒 Simple blog sistem with Angular

The objective of this exercise of the Angular module of the Codehouse Academy bootcamp was to develop a **very simple blog system to understand some of the framework's functions**. For the practice we would not connect to any API, we would use a static, multidimensional data array created in a service to get the information.

The application has four routes:

- **/home**: this is the path to the blog with the list of articles that are in the previously mentioned array.
- **/new**: in this path we find the form that allows us to add new articles to our blog. The articles have a title, text, an image provided by a URL, a category and a publication date. All the form fields are mandatory and in the image field a validator has been created to check that the path is a JPG or PNG image. In this case, the category selector is filled with an array of categories that will be in its own service.
- **/post/:idpost**: this view will show the view of each of the articles with all their information.
- **/category/:category-name**: this view serves as a filter to show only posts of the same category, with the articles of the same category. It has a layout identical to that of the main page and is accessed through the menu, by means of a drop-down with the different options.

🔗 https://toni-castillo.github.io/angularBlog/
