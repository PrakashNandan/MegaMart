// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    // TODO: !hardcoded
      const res = await fetch("http://localhost:8080/products");
      const data = await res.json();
      resolve({data});
  }
  );
}


export function fetchAllProductsByFilter(filter) {

  // filter = {"category" : "smartphone"}
  let queryString = '';
  for(let key in filter){
      queryString+=`${key}=${filter[key]}&`
  }


  return new Promise(async (resolve) =>{
    // TODO: !hardcoded
      const res = await fetch("http://localhost:8080/products?"+queryString);
      const data = await res.json();
      resolve({data});
  }
  );
}
