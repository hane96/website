import { FaGithub} from 'react-icons/fa';

function Project({title, description, link, tags, demo}){
    return(
        <div className = "project">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="github-button">
                <FaGithub style={{ marginRight: 4}} />
                View on GitHub
            </a>
            <ul>
                {
                    tags.map((tag, title)=>{
                        return (<li key={title} > {tag} </li>)
                    })
                }
            </ul>
            {
                demo && (
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="demo-button"
                    >View Live Demo</a>
                )
            }
        

        </div>
    )
}

export default Project;
