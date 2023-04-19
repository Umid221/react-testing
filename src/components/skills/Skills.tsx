import { useEffect, useState } from "react";
import { SkillsProp } from "./skills.types";

function Skills({ skills }: SkillsProp) {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLogged(true);
    }, 1900);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLogged ? (
        <button>Start Learning</button>
      ) : (
        <button className="login-btn" onClick={() => setIsLogged(true)}>
          Log In
        </button>
      )}
    </>
  );
}

export default Skills;
