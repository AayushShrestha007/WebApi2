import React, { useEffect } from 'react';
import { testApi } from '../../apis/Api';

const Homepage = () => {

    //print hello, when page load (Automatic)
    useEffect(() => {
        console.log("Hello")

        //trigger test api 
        testApi().then((res) => { console.log(res) }

        );
    })

    return (
        <div>
            Home page
        </div>
    )
}

export default Homepage;