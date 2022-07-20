import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetworks, fetchUsers } from '../services/dataAPI';

const Networks = () => {
    const dispath = useDispatch()
    const networks = useSelector(state => state.networks)
    // console.log(networks.keys())
    // useEffect(()=>{
    //     fetchNetworks().then(data => dispath({type:"FETCH_NETWORKS", payload:data}))
    // },[])
    console.log(networks.networks)
    const fetchReduxNetworks = () => {
        fetch('http://api.citybik.es/v2/networks')
            .then(response => response.json())
            .then(json => dispath({type:"FETCH_NETWORKS",payload:json}))
    }
    useEffect(()=>{
        fetchReduxNetworks()
    },[])
    return (
        <div>
            {Object.keys(networks).length > 0 ?
                <div>
                    {networks.networks.map(network => <div>{network.id}</div>)}
                </div>:
                <div>
y
                </div>
            }
        </div>
    );
};

export default Networks;