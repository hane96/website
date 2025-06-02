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
            tags: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "ToDo-List-React",
            description: "用React製作的代辦事項 練習React操作、component等",
            link: "https://github.com/hane96/frontend_related/tree/main/todo-list-React",
            tags: ["React", "JavaScript"]
        },
        {
            title: "weather-app",
            description: "查詢城市天氣的網頁 主要練習React hook和API串接 ",
            link: "https://github.com/hane96/frontend_related/tree/main/weather-app",
            tags: ["React", "hook", "API"]
        },
        {
            title: "Message-Board-React",
            description: "用假API和localStorage做留言儲存的留言板 主要練習React Router、Hook、LocalStorage的處理並試用tailwind css",
            link: "https://github.com/hane96/frontend_related/tree/main/message-board",
            tags: ["React", "React Router", "hook","localStorage"]
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