// A mock function to mimic making an async request for data
export function fetchedLoggedInUserOrder(userId) {
  return new Promise(async (resolve) =>{
      const res = await fetch('http://localhost:8080/orders/?user.id='+userId);
      const data = await res.json();
      resolve({data});
  }
  );
}
