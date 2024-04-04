import React from 'react'
import { useLoaderData, useNavigation, Link } from 'react-router-dom';
const apiUrl = 'https://fakestoreapi.com/products';
const Products = () => {

    const results = useLoaderData(); // To retrieve the data from loader
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return (
            <div>
                <p>Loading!!!</p>
            </div>
        )
    }
    return (
        <div>
            {
                results.map((res) => (
                    <Link key={res.id} to={`${res.id}`}>
                        <div >
                            <img src={res.image} />
                            <h2>{res.title}</h2>
                            <p>USD {res.price}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )

}
// I export this component   // import Product from './Products'
export default Products;

// I export this function   // Import {dataLoader} from './Products'
export const dataLoader = async ({ request }) => {
    // The user request to the router (url, path, parameters)

    // We retrieve the url requested by user
    const url = new URL(request.url);
    let limitParam = 10;
    
    if (url.searchParams.get("limit")) {
        limitParam = url.searchParams.get("limit");
    }
    // By default fetch is get, /  axios.get
    const res = await fetch(`${apiUrl}?limit=${limitParam}`);
    // As we have seen, with fetch we need to transform res to json
    const jsonResult = await res.json();
    return jsonResult;
}

