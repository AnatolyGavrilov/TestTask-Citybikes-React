import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetworks} from '../services/dataAPI';
import clases from "./networks.module.scss";

const Networks = () => {
    const dispath = useDispatch()
    const networks = useSelector(state => state.networks.networks)
    const stations = useSelector(state => state.stations.stations)
    useEffect(()=>{
        fetchNetworks().then(data => dispath({type:"FETCH_NETWORKS", payload:data}))
    },[])
    return (
        <div className={clases.container}>
            {Object.keys(networks).length > 0 ?
                <div>
                    {networks.networks.map(network => 
                        <div
                            key={network.id}
                            // onClick={dispath()}
                        >
                            {network.id}
                        </div>
                    )}
                </div>:
                <div>
y
                </div>
            }
            {Object.keys(stations).length > 0 ?
                <div>
                    {stations.stations.map(station => 
                        <div
                            key={station.id}
                            onClick={dispath()}
                        >
                            {station.id}
                        </div>
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