# task-manager

<h2>JSON REST API DATA FOR TEST</h2>
<p>Use ThunderClient extension for VS Code for fast tests. (<a href="https://www.postman.com/">Postman</a>, <a href="https://insomnia.rest/">Insomnia</a>.. can be also used) </p>
<p>Create new Role: Post: http://localhost:3000/role</p>
<pre>
{
  "name": "Admin"
}
</pre>
<p>Create new User: Post: http://localhost:3000/user</p>
<pre>
{
  "first_name": "Admin",
  "last_name": "User",
  "email": "test@gmail.com",
  "username": "username",
  "password": "12345678",
  "phone":"123456789",
  "role":"idOfCreatedRole"
}
</pre>