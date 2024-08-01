export async function getProducts(searchTerm) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    const errorMessage = { message: response.statusText, status: response.status }
    if (!response.ok) {
        throw errorMessage;
    }

    const data = await response.json();

    return data;
}

export async function getProductDetail(id) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);

    const errorMessage = { message: response.statusText, status: response.status }
    if (!response.ok) {
        throw errorMessage;
    }

    const data = await response.json();

    return data;
}

export async function getFeaturedProducts() {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);

    const errorMessage = { message: response.statusText, status: response.status }
    if (!response.ok) {
        throw errorMessage;
    }

    const data = await response.json();

    return data;
}