import DeleteProduct from "@/lib/DeleteProduct";
import Link from "next/link";

const getProducts = async () => {
    let data = await fetch("http://localhost:3000/api/products", { cache: 'no-cache' });
    data = await data.json();
    if (data.success) {
        return data.result;
    }
    else {
        return { success: false }
    }
}

export default async function () {
    const products = await getProducts();
    console.log(products);
    return (
        <div>
            <h2>Product List</h2>

            <table border={'1'}>
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td>Price</td>
                        <td>Color</td>
                        <td>Comapny</td>
                        <td>Category</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.color}</td>
                                <td>{item.company}</td>
                                <td>{item.category}</td>
                                <td><Link href={"products/" + item._id}>Edit</Link></td>
                                <td><DeleteProduct id={item._id} /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Link href={'/'}>Go to Home page</Link>
        </div>
    )
};