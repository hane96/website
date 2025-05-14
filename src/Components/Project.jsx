

function Project({title, description, link, tags}){
    return(
        <div className = "project">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View on Github</a>
            <ul>
                {
                    tags.map((tag, title)=>{
                        return (<li key={title} > {tag} </li>)
                    })
                }
            </ul>

        </div>
    )
}

export default Project;
