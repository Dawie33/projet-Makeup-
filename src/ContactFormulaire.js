import Nav from "./Nav";

import Footer from "./Footer";

function ContactFormulaire () {

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.nom.value;
        const first_name = event.target.prenom.value;
        const description = event.target.description.value;

        const jwtLocalStorage=   localStorage.getItem('jwt');
        const jwtconnexion = JSON.parse(jwtLocalStorage).access_token;


    
        const contactresponse= fetch('http://www.localhost/api/contacts', {
            method: 'put',
            headers: {
                authorization: 'Bearer' + " " + jwtconnexion,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                first_name,
                description
                
            })
        });

        console.log(contactresponse);

    }
    

    return(
        <>

        <Nav />

        <form onSubmit={handleSubmit}>
                    
            <label htmlFor="nom">Nom *</label><br />
            <input
                type="text"
                name="nom"
                id="nom"
                placeholder="nom"
                required
            /><br /><br />

            <label htmlFor="Prenom">Prénom *</label><br />
            <input
                type="text"
                id="prenom"
                name="prenom"
                placeholder="Prénom"
                required
            /><br /><br />
              <label htmlFor="Prenom">description *</label><br />
            <input
                type="text"
                id="description"
                name="description"
                placeholder="description"
                required
            /><br /><br />

            <button type="submit" > soumettre </button>
        </form>


        <Footer />
        </>
    )
}

export default ContactFormulaire 