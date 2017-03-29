require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'Iron_Glory_Inventory.csv'))

csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Inventory.new
  t.product = row['Product']
  t.SKU = row['SKU']
  t.price = row['Price']
  t.available = row['Available'].gsub(/\D/, "").to_i
  t.year  = row['Year']
  t.description = row['Description']
  t.category = Category.find_or_create_by!(name: row['Category'])
  t.photo = File.open(Rails.root + "public/iron-glory-assets/iron-glory-products/#{row['SKU']}.png")
  t.save!
end
