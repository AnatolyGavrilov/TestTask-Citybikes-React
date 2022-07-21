import {$host} from "../api/index";

export const fetchNetworks = async () => {
    const {data} = await $host.get('networks?fields=id,company')
    return data
}
