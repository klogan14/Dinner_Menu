import axios from "axios";
import { useEffect, useState } from 'react';
import './Menu.css'

function Menu({ code }) {
    axios.defaults.baseURL = 'http://localhost:3000';
    //axios.defaults.baseURL = 'https://dinnermenuapi.up.railway.app';
    const [Sunday, setSunday] = useState(null);
    useEffect(() => {
        axios.get(`/api/getAll`)
            .then((result) => {
                //console.log(JSON.stringify(result.data[0].name));
                setSunday(result.data[1].name)

            })
            .catch(console.error);
    });


    return (
        <div className=''>
            <h2>Dinner Menu for Sunday to Saturday</h2>

            <div className="menu">

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
                        <td>
                            <tr>{Sunday}</tr>
                            <tr>Tomato Soup</tr>
                            <tr>Salad</tr>
                        </td>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Menu;