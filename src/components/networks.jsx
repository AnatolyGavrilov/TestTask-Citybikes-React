import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetworks } from '../services/dataAPI';

const Networks = () => {
    const dispath = useDispatch()
    useEffect(()=>{
        fetchNetworks().then(data => dispath({type:"FETCH_NETWORKS", payload:data}))
    },[])
    let networks = useSelector(state => state.networks)
    console.log(networks.networks)
    return (
        <div>
           {/* {networks.networks.map(network => <div>1</div>)} */}
        </div>
    );
};

export default Networks;