import { useEffect, useState } from 'react'
import React from 'react'

import './Card.css'

const Card = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ed66cfa42d45562bddc0e3ab9350fe06`
            const res = await fetch(url);
            // console.log(res);
            const resjson = await res.json();
            console.log(resjson);
            setCity(resjson.main);

        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="card1">
                <div className="card2">
                    <div className="search">
                        <input type="search" placeholder='Search' className='textFeild' onChange={(event) => {
                            setSearch(event.target.value)

                        }} />
                    </div>

                    {!city ? (
                        <p>no data found</p>
                    ) : (
                        <div className="info">
                            <h2 className="location">{search}

                            </h2>
                            <h1 className="temp">{city.temp}

                            </h1>
                            <h3 className="tempin">min:5.10 | max:5.24

                            </h3>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}
export default Card;
