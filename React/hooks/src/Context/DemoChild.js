import React, {useContext} from 'react'
import MyContext from './Context'

function Demo() {
    console.log("Demo Child Render");
    const val = useContext(MyContext);
    console.log(val);
    return (
        <div>
            
        </div>
    )
}

export default Demo
