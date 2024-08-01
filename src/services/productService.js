const getSession = () => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return { token, cbid }
}


export async function getProducts(searchTerm) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm ? searchTerm : ""}`);

    if (!response.ok) {
        throw { message: response.statusText, status: response.status }
    }

    const data = await response.json();

    return data;
}

export async function getProductDetail(id) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);

    if (!response.ok) {
        throw { message: response.statusText, status: response.status }
    }

    const data = await response.json();

    return data;
}

export async function getFeaturedProducts() {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);

    if (!response.ok) {
        throw { message: response.statusText, status: response.status }
    }

    const data = await response.json();

    return data;
}