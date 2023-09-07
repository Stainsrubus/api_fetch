// const URL="https://jsonplaceholder.typicode.com/users"
async function getdata() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await res.json();
  console.log(
    result[1].name,
    result[1].email,
    result[1].address.street,
    result[1].address.city
  );
  const maindiv=document.createElement("div");
  maindiv.setAttribute("class","container-fluid d-flex flex-wrap gap-5 justify-content-center",)
  document.body.append(maindiv);
  for (var i = 0; i <=result.length; i++) { 
    const div1 = document.createElement("div");
    div1.innerHTML = ` 
  <div class="card-body">
    <h5>Name : ${result[i].name}</h5>
    <p>Email : ${result[i].email}</p>
    <p>street : ${result[i].address.street}</p>
    <p>City : ${result[i].address.city}</p>
  </div>
</div>
`;
div1.setAttribute("class","card ")
maindiv.append(div1);
  }

}
getdata();
