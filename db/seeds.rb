# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Product.create!(name: 'formula', price: 40, description: 'when the natural way isnt working', image: 'https://cdn.thewirecutter.com/wp-content/media/2021/03/babyformula-2048px-3040-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024')
Product.create!(name: 'diapers', price: 20, description: 'for when the projectile starts', image: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwcda5b161/images/large/Honest-Diaper/Falloween2021/Campaign/FARMLIFE/FarmLife_6.jpg?sw=2000&sh=2000&sm=fit')
Product.create!(name: 'pacifiers', price: 10, description: 'for when the babys not hungry but wont shut up', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-pacifiers-1613149844.jpg?crop=1.00xw:0.755xh;0,0.147xh&resize=1200:*')
Product.create!(name: 'baby bottle', price: 20, description: 'for when youve got milk overflow and the babys full', image: 'https://cdn.thewirecutter.com/wp-content/uploads/2018/01/baby-bottles-2x1-lowres3827.jpg?auto=webp&quality=75&crop=2:1&width=1024')
