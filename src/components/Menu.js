import axios from "axios";
import {  useEffect } from 'react';

function Menu({code}) {
    //axios.defaults.baseURL = 'http://localhost:7071';

    // useEffect(() => {
    //     axios.get(`/api/GetMenu?name=kyle`)
    //       .then((result) => {
    //         console.log(result.data + code);
    //       })
    //       .catch(console.error);
    //   });


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