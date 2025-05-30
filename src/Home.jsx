import { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";

function Home() {
  const [data, setData] = useState([]);

  async function getDataFetch() {
    const response = await fetch("https://fakestoreapi.in/api/products");
    const result = await response.json();
    console.log(result.products);
    setData(result.products);
    console.log(data);
  }

  useEffect(() => {
    getDataFetch();
  }, []);

  return (
    <>
    {data?( <div className="productDiv">
        {data.map((item) => (
          <div className="mainDiv">
           <a href={`/products/${item.id}`}> <img src={item.image} alt="" /></a>
            <h2>{item.title.slice(0,30)}</h2>
            <p>Price :- <BsCurrencyDollar /> {item.price}</p>
          </div>
        ))}
      </div>):""
    }
    </>
  );
}

export default Home;
