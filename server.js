require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.eulny.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


