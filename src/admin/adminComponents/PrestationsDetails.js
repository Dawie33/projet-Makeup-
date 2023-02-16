import { Link} from "react-router-dom";


const PrestationsDetails = (props) =>{

  
   


    return(
   

        <tr >

            <td>{props.prestation.id}</td>
            <td>{props.prestation.name}</td>
            <td>{props.prestation.image}</td>
            <td>{props.prestation.price}</td>
            <td>{props.prestation.duration}</td>
            <td>{props.prestation.max_people_number}</td>
            <td><Link to={'/prestations/'+ props.prestation.id}> voir</Link></td>  
           

        </tr>

   
        
 
    )
}
export default PrestationsDetails;