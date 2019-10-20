import React, { useState, useEffect } from 'react';
import axios from 'axios';  

// import Ttl from './Ttl';
// import Aim from './Aim'; 
// import Organization from './Organization';

import Collection from './Collection';
import Pagination from './Pagination'; 


const Helped = () => {
    const [ collections, setCollections ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ currentPage, setCurrentPage] = useState(1); 
    const [ collectionsPerPage, setCollectionPerPage ] = useState(3); 

    useEffect(() => {
        const fetchCollections = () => {
            setLoading(true);
            const res = axios.get('http://localhost:3000/database');
            setCollections(res.data);
            setLoading(false);
        }

        fetchCollections();
    },[]);

    console.log(collections); 

    //get current collections
    const indexOfLastCollection = currentPage * collectionsPerPage; 
    const indexOfFirstCollection = indexOfLastCollection - collectionsPerPage;
    const currentCollections = collections.slice(indexOfFirstCollection, indexOfLastCollection); 

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber); 



    return (
    <section id="help">
        {/* <div className="helped-ttl" >
            <Ttl txt="Komu pomagamy"/>
        </div>
        <div className="aim-items-ctn">
            <Aim aim="Fundacjom"/>
            <Aim aim="Organizacjom pozarządowym"/>
            <Aim aim="Zbiórkom lokalnym"/>
        </div> */}

        <p className="aim-txt" >W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
             Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

        <div className="orgs-ctn">
            <span>
                <Collection collections={currentCollections} loading={loading} />
                {/* <Organization 
                orgName='Fundacja "Dbam o Zdrowie"'  
                orgMission="Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej." 
                orgNeeded="ubrania, jedzenie, sprzęt AGD, meble, zabawki"/> */}
            </span>   
            <span> 
            {/* <Organization 
                orgName='Fundacja "Dla Dzieci"' 
                orgMission="Cel i misja: Pomoc dzieciom z ubogich rodzin." 
                orgNeeded="ubrania, meble, zabawki"/> */}
            </span>
            <span>   
            {/* <Organization 
                orgName='Fundacja "Bez domu"' 
                orgMission="Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania." 
                orgNeeded="ubrania, jedzenie, ciepłe koce"/> */}
            </span>     
            <Pagination collectionsPerPage={collectionsPerPage} totalCollections={collections.length} paginate={paginate}/>
        </div>      
    </section>
    )
}

export default Helped;