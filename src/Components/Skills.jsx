

import { FaCode, FaDesktop, FaServer, FaGamepad } from 'react-icons/fa';

function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>

            <div className="skill-category">
                <FaCode size={30} color="#ffd700" />
                <div className="skill-details">
                    <h3>Languages:</h3>
                    <ul>
                        <li>熟悉: C, C++, C#, Python</li>
                        <li>基礎: JavaScript, Java, SQL</li>
                    </ul>
                </div>
            </div>

            <div className="skill-category">
                <FaDesktop size={30} color="#61dafb" />
                <div className="skill-details">
                    <h3>Frontend:</h3>
                    <ul>
                        <li>基礎: HTML, CSS, JavaScript, React</li>
                    </ul>
                </div>
            </div>

            {/* Backend */}
            <div className="skill-category">
                <FaServer size={30} color="#38bdf8" />
                <div className="skill-details">
                    <h3>Backend:</h3>
                    <ul>
                        <li>基礎: Flask, SQLite, REST API</li>
                    </ul>
                </div>
            </div>

            {/* Game Development */}
            <div className="skill-category">
                <FaGamepad size={30} color="#ff6347" />
                <div className="skill-details">
                    <h3>Game Development:</h3>
                    <ul>
                        <li>基礎: Unity, C#</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;


