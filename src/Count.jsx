import React,{useState} from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Count = () => {
    const [num,setNum]=useState(0);
    const incNum=()=>{
        
        setNum(num+1);
    }
    return (
        <div>
            <p>
            {num}
            </p>
            <button onClick={incNum}>

            < AddCircleOutlineIcon/>
            </button>
        </div>
    )
}

export default Count
