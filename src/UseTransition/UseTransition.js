import React,{useState, useTransition} from 'react'


const UseTransition = () => {

    const [name,setName] = useState('');
    const [list,setLists] = useState([]);
    const [isPending,setTransitions] = useTransition();

    const LIST_SIZE = 200;

    const handleChange = (e) => {
       const {value} = e.target;    
        setName(value);

        setTransitions(()=>{
            const dataList = [];

            for(let i=0;i < LIST_SIZE;i++ ){
                dataList.push(value);
               }

            setLists(dataList); 
        });       
    };

  return (
    <div>UseTransition:
        <input type='text' value={name} onChange={handleChange} key="input" />
        {
            isPending ? 'Loading...' : list.map((list,index)=>{
                return <div key={index}>{list}<br/></div>;
            })
        }
        {/* {
            
        } */}
    </div>
  )
}

export default UseTransition