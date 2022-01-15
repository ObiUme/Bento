# README
Bento Take Home Coding Challenge
Created by Obi Ume

Description
Products with full CRUD

***USER NOTE
for update => please refresh main page for changes to take effect. 

# necessary dependencies incase errors are encountered (npm install or npm i)
"@emotion/react": "^11.7.1",
"@emotion/styled": "^11.6.0",
"@material-ui/private-theming": "^5.0.0-alpha.33",
"@mui/icons-material": "^5.2.5",
"@mui/material": "^5.2.8",
"@mui/styled-engine": "^5.2.6",

Requirements
Ruby 2.7.4
NodeJS (v14 or higher), and npm
Postgresql
Installation
# install necessary gems
bundle install

npm install --prefix client
npm start --prefix client


rails s
Usage

# create necessary table migrations
rails db:migrate

# populate database with product list
rails db:seed


Contributing

Please make sure to update tests as appropriate.
