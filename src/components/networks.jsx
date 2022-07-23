import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetworks, fetchOneNetwork} from '../services/dataAPI';
import clases from "./networks.module.scss";

const Networks = () => {
    const dispath = useDispatch()
    const networks = useSelector(state => state.networks.networks)
    const stations = useSelector(state => state.stations.stations)

    useEffect(()=>{
        fetchNetworks().then(data => dispath({type:"FETCH_NETWORKS", payload:data}))
    },[])
    
    useEffect(()=>{
        if (Object.keys(networks).length > 0 ){
            fetchOneNetwork(networks.networks[0].id).then(data => dispath({type:"CHOOSE_NETWORK", payload:data}))
        }
    },[networks.networks])

    function jest(networkId){
        console.log(networkId)
        fetchOneNetwork("bycyklen").then(data=>dispath({type:"CHOOSE_NETWORK", payload:data}))
    }
    return (
        <div className={clases.container}>
            {Object.keys(networks).length > 0 ?
                <div>
                    {networks.networks.map(network => 
                        <div key={network.id}>
                            <div
                                className={clases.networkItem}
                                // key={network.id}
                                onClick={() => {
                                    fetchOneNetwork(network.id).then(data=>dispath({type:"CHOOSE_NETWORK", payload:data}))
                                }}
                            >
                                {network.id}
                            </div>
                            <div 
                                className={clases.likeBasic}
                                onClick={
                                    ()=>{ 
                                        dispath({type:"LIKE_NETWORK", payload:network.id})
                                        if (localStorage.likedNetworks){
                                            let arrNetworks = localStorage.likedNetworks.split()
                                            arrNetworks.push(network.id)
                                            localStorage.setItem("likedNetworks", arrNetworks)
                                        }
                                        else{
                                            localStorage.setItem("likedNetworks", network.id)
                                        }
                                    }
                                }
                            >
                            </div>
                        </div>
                    )}
                </div>:
                <div>
y
                </div>
            }
            {Object.keys(stations).length > 0 ?
                <div>
                    {stations.network.stations.map(station => 
                        <div
                            key={station.id}
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