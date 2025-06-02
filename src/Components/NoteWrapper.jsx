
import Note from "./Note";

const notes = [
    {
        title: "Unity note",
        description: "製作塔防專案時邊做邊學的筆記，包含一些Unity的基本概念和專案的製作過程",
        link: "https://github.com/hane96/UnitySimpleTowerDefense/blob/main/note.md"
    },
    {
        title: "Leetcode note",
        description: "Leetcode練習的筆記",
        link: "https://github.com/hane96/leetcode_notes_changing/blob/main/leetcode_notes.md"
    },
    {
        title: "HTML note",
        description: "HTML的基礎與常用的概念",
        link: "https://github.com/hane96/frontend_related/blob/main/note/html_note.md"
    },
    {
        title: "CSS note",
        description: "CSS的基礎與常用的屬性",
        link: "https://github.com/hane96/frontend_related/blob/main/note/css_note.md"
    },
    {
        title: "JavaScript note",
        description: "主要以已經會C++和python的角度去學JS，並記錄有哪些語法或概念上不同的點",
        link: "https://github.com/hane96/frontend_related/blob/main/note/js_note.md"
    },
    {
        title: "DOM note",
        description: "DOM和event的基本介紹與應用",
        link: "https://github.com/hane96/frontend_related/blob/main/note/dom_note.md"
    },
    {
        title: "React note",
        description: "React的基礎概念介紹(組件、JSX、prop、state等)",
        link: "https://github.com/hane96/frontend_related/blob/main/note/react_note.md"
    },
    {
        title: "React hook note",
        description: "React hook的基本概念和常用hook介紹",
        link: "https://github.com/hane96/frontend_related/blob/main/note/hook_note.md"
    },
    {
        title: "React Router note",
        description: "React router的基本概念介紹(Route、Link、Nested/Dynamic/Protected Route等)",
        link: "https://github.com/hane96/frontend_related/blob/main/note/react_router_note.md"
    },
    {
        title: "TypeScript note",
        description: "TypeScript的基本介紹以及在DOM和React中常見的型別及處理方法",
        link: "https://github.com/hane96/frontend_related/blob/main/note/typescript_note.md"
    },
    {
        title: "TailwindCSS note",
        description: "tailwind常用class的分類整理",
        link: "https://github.com/hane96/frontend_related/blob/main/note/tailwind_note.md"
    }
]

function NoteWrapper() {
    return (
        <div className="notewrapper">
            <h2>我的學習筆記</h2>
            {notes.map((note) => {
                return(
                    <Note 
                    title = {note.title}
                    description = {note.description}
                    link = {note.link}
                    key = {note.title}
                    />
                )
            })
        }
        </div>
    )
}

export default NoteWrapper;