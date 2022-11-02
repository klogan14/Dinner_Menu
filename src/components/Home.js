import './Home.css'
import $ from 'jquery';

function Home({setCode}) {
    const submitCode = async (event) => {
        event.preventDefault();
        console.log($('#code').val());
        setCode(document.getElementById('code').value);
    }
    return (
        <div className="home-component">
            <h1>Welcome to the Dinner Menu</h1>
            <form onSubmit={submitCode}>
                <label htmlFor="code">
                    code:
                    <input id="code" onChange={(event) => setCode(event.target.value)}type='text'></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home;