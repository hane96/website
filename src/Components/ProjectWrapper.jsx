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
            description: "簡單的message board，主要練習後端的Flask和SQLite",
            link: "https://github.com/hane96/message_board",
            tags: ["Flask", "SQLite", "HTML", "JavaScipt", "API"]
        },
        {
            title: "ToDo-List",
            description: "無使用前端架構製作的代辦事項，練習html和js",
            link: "https://github.com/hane96/frontend_related/tree/main/todo-list",
            tags: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "ToDo-List-React",
            description: "用React製作的代辦事項，練習React操作、component等",
            link: "https://github.com/hane96/frontend_related/tree/main/todo-list-React",
            tags: ["React", "JavaScript"]
        },
        {
            title: "weather-app",
            description: "查詢城市天氣的網頁，主要練習React hook和API串接 ",
            link: "https://github.com/hane96/frontend_related/tree/main/weather-app",
            tags: ["React", "hook", "API"],
            demo: "https://weather-app-rho-murex-12.vercel.app/"
        },
        {
            title: "Message-Board-React",
            description: "用假API和localStorage做留言儲存的留言板，主要練習React Router、Hook、LocalStorage的處理並試用tailwind css",
            link: "https://github.com/hane96/frontend_related/tree/main/message-board",
            tags: ["React", "React Router","localStorage", "TailwindCSS"],
            demo: "https://message-board-tau.vercel.app/"
        },
        {
            title: "TS-Remakes",
            description: "將前面製作的兩個TodoList改為TypeScript版本，主要練習DOM和React的型別標註",
            link: "https://github.com/hane96/frontend_related/tree/main/ts-remakes",
            tags: ["TypeScript"]
        },
        {
            title: "MiniShop",
            description: "用React+TypeScript串fakeStoreAPI製作的模擬店商前台，算是結合前面所學的集大成",
            link: "https://github.com/hane96/frontend_related/tree/main/MiniShop",
            tags: ["TypeScript", "React Router", "React Context", "TailwindCSS"],
            demo: "https://mini-shop-snowy.vercel.app/"
        }


    ]

    return (

        <section className = "projectwrapper" id="projects">
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
                    demo = {project.demo}
                    />
                    )
                })
            }
        </section>
    )
}

export default ProjectWrapper;