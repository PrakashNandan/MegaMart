// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    // TODO: 
      const res = await fetch("http://localhost:8080/products");
      const data = await res.json();
      resolve({data});
  }
  );
}
