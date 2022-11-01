import axios from "axios";
import {  useEffect } from 'react';


function Menu() {
    axios.defaults.baseURL = 'https://dinnermenuapi.azurewebsites.net';

    // useEffect(() => {
    //     axios.get('/api/GetMenu?')
    //       .then((result) => {
    //         console.log(result.data);
    //       })
    //       .catch(console.error);
    //   }, []);


    return (
        <div className=''>
            <h2>Dinner Menu for Sunday to Saturday</h2>
            <table>
                <thead>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>Chicken Fontega Sandwich</tr>
                    <tr>Tomato Soup</tr>
                    <tr>Salad</tr>

                </tbody>
            </table>
        </div>
    )
}

export default Menu;