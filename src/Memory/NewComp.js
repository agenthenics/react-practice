import React,{memo} from 'react'


const NewComp = (props) => {
    console.log("NEW Componenet:",props.newCount);
    return (
        <div>NewComp</div>
    )
}

export default memo(NewComp)