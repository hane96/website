
function Note({title, description, link}) {

    return (
        <div className="note">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">查看筆記</a>

        </div>
    )
}

export default Note;