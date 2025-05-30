import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
function Singleproduct() {
  const {id}=useParams()
  const [product,setProduct]=useState({})
  console.log(id);
  
  useEffect(() => {
      if (id) {
        fetchData(id);
      }
    }, [id]);

     async function fetchData(id) {
    try {
      // setLoading(true);
      const response = await fetch(
        "https://fakestoreapi.in/api/products/" + id
      );
      const result = await response.json();
      setProduct(result.product);
      console.log(result.product);
      // setLoading(false);
    } catch (err) {
      // setLoading(false);
      console.log(err);
    }
  }
  return (
    <div className="singleProductDiv"> 
    <div className="product">
    <img src={product.image} alt="" />

    </div>
    <div className="content">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>Price :- {product.price}</h3>
    </div>
    </div>
  )
}

export default Singleproduct