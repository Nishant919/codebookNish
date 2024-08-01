const getSession = () => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return { token, cbid }
}


export async function getUser() {

    const { token, cbid } = getSession();

    const requestOptions = {
        method: "GET",
        headers: { "content-Type": "application/json", Authorization: `Bearer ${token}` },
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${cbid}`, requestOptions);

    if (!response.ok) {
        throw { message: response.statusText, status: response.status }
    }

    const data = await response.json();

    return data;
}

export async function createOrder(order) {
    const { token } = getSession();
    const requestOptions = {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(order)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestOptions);

    if (!response.ok) {
        throw { message: response.statusText, status: response.status }
    }

    const data = await response.json();
    return data;
}

export async function getOrders() {

    const { token, cbid } = getSession();

    const requestOptions = {
        method: "GET",
        headers: { "content-Type": "application/json", Authorization: `Bearer ${token}` },
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`, requestOptions);

    if (!response.ok) {
        throw { message: response.statusText, status: response.status }
    }

    const data = await response.json();
    return data;
}