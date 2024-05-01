import React from 'react';
import './App.css'

export default function Search() {
    return (
        <div className='container-box'>
            <div className='cities'>
            <p className='city-one'>Lisbon</p>
            <p className='city-two'> Paris</p>
            <p className='city-three'>Sydney</p>
            <p className='city-four'>San Francisco</p>
            </div>
        <div className='inputs'>

    <input id='text' type="text" value="" placeholder='Search a city...' />
    <input id='search' type="submit" value="Search" required />
    <input id='current' type="submit" value="Current" required />

        </div>
        <div className='city-day'>
            <h3>
                Lisbon
            </h3>
            <p className='day'>
                Thursday 14:29
            </p>
            <p className='weather-type'>
                Clouds
            </p>
        </div>
        <div className='temperature'>
            <span className='icon'>☁️</span>
            <h1>
                14
            </h1>
            <p className='degree'>
                °
            </p>
            <p className='celcius'>
                C
            </p>
            <p className='precipitation'>
                Precipitation: 82%
            </p>
            <p className='windSpeed'>
                wind: 4km/h
            </p>
        </div>
        <div className='forecast'>
            <ul>
                <li>
                    <p className='day-week'>
                        Fri
                    </p>
                    <span className='icons'>
                        ☁️ 
                    </span>
                    <p className='temp'>
                        12°C
                    </p>
                </li>
                <li>
                    <p className='day-week'>
                        Sat
                    </p>
                    <span  className='icons'>
                        ☀️
                    </span>
                    <p className='temp'>
                        27°C
                    </p>
                </li>
                <li>
                    <p className='day-week'>
                        Sun
                    </p>
                    <span  className='icons'>
                        ☁️
                    </span>
                    <p className='temp'>
                        17°C
                    </p>
                </li>
                <li>
                    <p className='day-week'>
                        Mon
                    </p>
                    <span  className='icons'>
                        ☀️
                    </span>
                    <p className='temp'>
                        32°C
                    </p>
                </li>
                <li>
                    <p className='day-week'>
                        Tue
                    </p>
                    <span  className='icons'>
                        ☁️
                    </span>
                    <p className='temp'>
                        12°C
                    </p>
                </li>
            </ul>
        </div>


        </div>
        
    );
}

