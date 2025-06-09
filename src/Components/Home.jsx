import { FaGithub } from 'react-icons/fa';

function Home() {
    return (
        <section className="home">
            <h1>Hi! I'm 蕭柏元</h1>
            <p>Front-End Developer</p>
            <p>探索我的技能、專案與學習筆記</p>
            <nav className="navbar">
              <a href="#about-me">AboutMe</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#notes">Notes</a>
            </nav>
            <FaGithub style={{ marginRight: 6 }} />
            <a href="https://github.com/hane96" target="_blank" rel="noopener noreferrer" id="github"
                >GitHub
            </a>
            <br/>
            <br/>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
            查看我的履歷（PDF）</a>

        </section>
    )
}

export default Home;

