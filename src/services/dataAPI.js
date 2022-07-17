import {$host} from "../api/index";

export const fetchNetworks = async () => {
    const {data} = await $host.get('networks?fields=id,company')
    // console.log(data)
    return data
}