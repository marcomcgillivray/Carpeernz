const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');


dotenv.config({ path: './config.env' });
const app = require('./app');
app.use(cors());

const uri = process.env.DATABASE;

const actualUri = uri.replace('<password>', process.env.PASSWORD);



mongoose.connect(actualUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connection Success!');
}).catch(err => console.log(err.reason));

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});