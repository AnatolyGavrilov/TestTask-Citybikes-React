import {$host} from "../api/index";

export const fetchNetworks = async () => {
    const {data} = await $host.get('https://api.citybik.es/v2/networks?fields=id,company')
    console.log(data)
    return data
}

export const fetchUsers = async () => {
    const {data} = await $host.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)
    return data
}