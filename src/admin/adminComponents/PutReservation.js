

const PutReservation = (props) =>{

    return (

        <form onSubmit={props.handlePut}>

           <fieldset>
                <div className="form_items">
                    <label htmlFor="nom">Nom *</label>
                    <input
                        type="text"
                        name="nom"
                        id="nom"
                        placeholder="Nom"
                        required
                    />

                    <label htmlFor="Prenom">Prénom *</label>
                    <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        placeholder="Prénom"
                        required
                    />
                
                    <label htmlFor="date">Date *</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="date de l'évènement"
                        required
                    />

                    <label htmlFor="Adresse">Adresse *</label>
                    <input
                        type="text"
                        id="adresse"
                        name="adresse"
                        placeholder="Adresse"
                        required
                    />

                    <label htmlFor="participant">Participant *</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        id="participant"
                        name="articipant"
                        placeholder="Nombre de participant"
                        required
                    />
                    <label htmlFor="id_users">Utilisateur *</label>
                    <input
                        type="number"
                        id="id_users"
                        name="id_users"
                        placeholder="Id de l'utilisateur"
                        required
                    />
                    
                </div>
                <div className="form_items">
                    <label htmlFor="prestation">Prestation *</label>
                    <select  id="prestation" name="prestation" required>
                        <option value="Mise en beauté naturelle" disabled selected>Choix prestation...</option>
                        <option value="Mise en beauté naturelle">Mise en beauté naturelle</option>
                        <option value="Maquillage de soirée">Maquillage de soirée</option>
                        <option value="Maquillage artistique">Maquillage artistique</option>
                        <option value="Essai mariage">Essai mariage</option>
                        <option value="Mariage">Mariage</option>
                        <option value="Cours de Maquillage">Cours de Maquillage</option>
                    </select> <br/>
                    
                
                    <label htmlFor="description">Description de l'évènement</label>
                    <textarea id="description" name="description"  placeholder="Décrivez votre demande" required>
                    </textarea>
                    <button type="submit" > Reserver </button>
                </div>
            </fieldset>
        </form>

    )
}
export default PutReservation;
