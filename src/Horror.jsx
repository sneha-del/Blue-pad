
// import React, { useEffect,useState } from 'react'
// import axios from 'axios';
// import { Avatar,Paper,List, Divider, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
// const Horror=()=>{
//     const [repo, setRepo] = useState([]);
   
//        const getRepo=()=>{
//        axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:horror')       
//          .then((response)=>{
//           console.log(response);
//              const myRepo=response.data;
//              setRepo(myRepo);
//          });
//      };
//      useEffect(()=>getRepo(),[]);
//      return(
// <div className="romance">
    
// <Paper>

//            {repo.map((repos)=>(
//                        <List key={repos.id}>
//                            <ListItem alignItems="flex-start">
                            
//                                <ListItemText
//                                  primary={repos.volumeInfo}
//                                 secondary={repos.acessInfo}
//                                />
//                    </ListItem>
//                            <Divider variant="inset" component="li"/>
//                        </List>
//                      ))}
// </Paper>
// </div>
//      );
// }

// export default Horror
import React from 'react'

const Horror = () => {
  return (
    <div>
      <h1>Horror section</h1>
    </div>
  )
}

export default Horror

