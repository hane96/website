import Project from "./Project";

function ProjectWrapper() {

    const projects = [
        {
            title: "Unity Simple Tower Denfense",
            description: "用Unity製作簡略的2D塔防遊戲",
            link: "https://github.com/hane96/UnitySimpleTowerDefense",
            tags: ["Unity", "C#", "Game Development"]
        },
        {
            title: "Message Board",
            description: "簡單的message board 主要練習後端的Flask和SQLite",
            link: "https://github.com/hane96/message_board",
            tags: ["Flask", "SQLite", "HTML", "JavaScipt", "API"]
        },
        {
            title: "ToDo-List",
            description: "無使用前端架構製作的代辦事項 練習html和js",
            link: "https://github.com/hane96/frontend_related/tree/main/todo-list",
            tags: ["HTML", "CSS", "JavaScript", "Frontend"]
        },
        {
            title: "ToDo-List-React",
            description: "用React製作的代辦事項 練習React操作、component等",
            link: "https://github.com/hane96/frontend_related/tree/main/todo-list-React",
            tags: ["React", "JavaScript", "Frontend"]
        },
        {
            title: "weather-app",
            description: "查詢城市天氣的網頁 主要練習React hook和API串接 ",
            link: "https://github.com/hane96/frontend_related/tree/main/weather-app",
            tags: ["React", "hook", "API", "Frontend"]
        }
    ]

    return (

        <section className = "projectwrapper">
            <h2>Projects</h2>
            {
                projects.map((project)=>{
                    return(
                    <Project 
                    title = {project.title}
                    description = {project.description}
                    link = {project.link}
                    tags = {project.tags}
                    key = {project.title}
                    />
                    )
                })
            }
        </section>
    )
}

export default ProjectWrapper;