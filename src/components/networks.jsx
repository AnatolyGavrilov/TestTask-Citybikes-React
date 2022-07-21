import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetworks} from '../services/dataAPI';

const Networks = () => {
    const dispath = useDispatch()
    const networks = useSelector(state => state.networks)
    useEffect(()=>{
        fetchNetworks().then(data => dispath({type:"FETCH_NETWORKS", payload:data}))
    },[])
    return (
        <div>
            {Object.keys(networks).length > 0 ?
                <div>
                    {networks.networks.map(network => 
                        <div key={network.id}>{network.id}</div>
                    )}
                </div>:
                <div>
y
                </div>
            }
        </div>
    );
};

export default Networks;