import { memo } from 'react'

export default memo(function (props) {

    console.log('Rendering MyButton');

    const startTime = new Date();
    while (new Date() - startTime < 2001) {}
    
    return <button {...props} style={{color:'red'}} />
});