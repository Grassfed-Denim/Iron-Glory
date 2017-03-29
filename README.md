# README

## API notes
***
### Routes
##### Getting all the categories
>GET '/api/categories'

+ This is the route to get a list of all the categories available
+ ID and Category Name will be output

#### Getting all of the items within a category
> GET '/api/categories/:category_id/inventories'

+ This will render a list of all items within a certain category given that a category ID is passed into it

#### Getting one item
> GET '/api/categories/:category_id/inventories/:id'

+ For displaying a single item, this route will render all information about that item (Product name, SKU, Price, Available, Description, Picture)
