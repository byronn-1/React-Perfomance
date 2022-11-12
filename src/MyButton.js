import { memo } from 'react'
/* 
Here this says in the case where the props have not changed just use the previous version of this component.
NOTE: you can pass a function as a second parameter into the memo function call.
 */
export default memo(function (props) {

    console.log('Rendering MyButton');

    const startTime = new Date();
    while (new Date() - startTime < 2000) {}
    
    return <button {...props} style={{color:'red'}} />
});