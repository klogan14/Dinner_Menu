import axios from "axios";
import { useEffect, useState } from 'react';
import './Menu.css'

function MenuData({ code }) {
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

            <td>
                <tr>{Sunday}</tr>
                <tr>Tomato Soup</tr>
                <tr>Salad</tr>
            </td>

        </div>
    )
}

export default MenuData;