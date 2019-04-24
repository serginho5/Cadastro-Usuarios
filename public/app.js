new Vue({
  el: '#app',
  template: `<div>
  <h1>Gerenciador de Usuários</h1>
  <form v-on:submit.prevent="save()">
    <input type="text" placeholder="Nome..." v-model="name">
    <input type="email" placeholder="Email..." v-model="email">
    <input type="submit" value="Salvar">
  </form>
  <hr>
  <table>
    <thead>
       <tr>
          <th>nome</th>
          <th>email</th>
          <th></th>
       </tr>
    </thead>
    <tbody>
    <tr v-for="user in users">
       <td>{{ user.name }}</td>
       <td>{{ user.email }}</td>
       <td>
         <a href="" v-on:click.prevent="details(user._id)">ver</a>
       </td>
    </tr>
    </tbody>
  </table>
  </div>`,
  data: function(){
    return{
       name: '',
       email: '',
       users: []
    }
  },
  methods: {
    save(){

      const data = {
        name: this.name,
        email: this.email,
      };

          fetch('/users', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              }
          }).then(() =>{
            this.users.push(data);
            this.name = '';
            this.email = '';
          });
    },

    details(id){
      fetch('/users/' + id)
      .then((res) => {
         return res.json();
      })
      .then((data) => {
        alert(JSON.stringify(data));
     });
    }
  },

  mounted(){
    fetch('/users')
      .then((res) => {
         return res.json();
      })
      .then((data) => {
        this.users = data;
     });
  }
})