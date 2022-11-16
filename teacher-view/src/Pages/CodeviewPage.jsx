import React, { useEffect } from 'react';
import CodeField from '../Components/CodeField';
import {Link} from 'react-router-dom'

const CodeviewPage = () => {

    const [code, setCode] = React.useState('');
    let fileLinks = {};
    let codeFile;

    function bin2String(array) {
        var result = "";
        for (var i = 0; i < array.length; i++) {
            result += String.fromCharCode(parseInt(array[i], 2));
        }
        return result;
    }

    return (
        <div className='container'>
            <p className='title'>Assigment</p>
            <div>
                <CodeField code={code} />
            </div>
            <Link className='button' to ='/progress'>Return</Link>
        </div>
    );

}

export default CodeviewPage