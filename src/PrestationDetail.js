import { Link } from "react-router-dom";



const PrestationsDetail = (props) => {

    return(
    
    <section id={"prestation-" + props.prestation.id}>
        <div className="prestaList">

            <h2>{props.prestation.name}</h2>
            <article>
                <div className="prestaImg">
                    <img src={props.prestation.image} alt="" />
                </div>
                <div className="content">
                    <p>{props.prestation.description}</p>    
                    <div className="tarifs">
                        <h3>Tarifs : </h3>
                        <p> <span className="price">{props.prestation.price} € / {props.prestation.duration}</span></p>
                        <p><em>"{props.prestation.max_people_number} personnes maximun"</em></p>
                    </div>  
                    <span className="reserver"> <Link to='/login'>Réserver</Link></span>
                </div>
            </article>
        </div>
    </section>
        
    )


  }
  
  export default PrestationsDetail;