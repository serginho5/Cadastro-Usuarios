const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/serie_node_vue', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('open', function() {
  console.log('estamos conectados');
})

export const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
},
  email: String
});

export default mongoose;

