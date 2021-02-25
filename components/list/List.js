import React,{useEffect,useState } from 'react';

const List = (props) => {

    const [usage, setUsage] = useState({
        beforeUsage : '',
        afterUsage : '',
        totalUsage : ''
    })

    const inputHandler = (e) => {
		setUsage({
				...usage,
				[e.target.name]:e.target.value 
		});
    }

    useEffect (()=> {
        console.log(usage.afterUsage);
        console.log(usage.beforeUsage);
        setUsage({
            ...usage,
            totalUsage : usage.afterUsage - usage.beforeUsage
    });
    },[setUsage])



    return(
        <div className="grid grid-cols-10">
            <input type="text" className="border border-red-200 mx-1 text-center" value={props.no} disabled />
            <input type="number" className={`border border-red-200 mx-1 text-center ${'before_price' + props.idx}`} name="beforeUsage"  required="" onChange = {(e)=>inputHandler(e)}/>
            <input type="number" className={`border border-red-200 mx-1 text-center ${'after_price' + props.idx}`} name="afterUsage"  required="" onChange = {(e)=>inputHandler(e)}/>
            <input type="number" className="border border-red-200 mx-1 text-center" value={usage.totalUsage} disabled/>
            <input type="number" className="border border-red-200 mx-1 text-center"/>
            <input type="number" className="border border-red-200 mx-1 text-center"/>
            <input type="number" className="border border-red-200 mx-1 text-center" value="20000" disabled/>
            <input type="number" className="border border-red-200 mx-1 text-center"/>
            <input type="number" className="border border-red-200 mx-1 text-center"/>
            <input type="number" className="border border-red-200 mx-1 text-center"/>
        </div>
    )
}

export default List;