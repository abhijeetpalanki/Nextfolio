import { motion } from "framer-motion";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { fadeInUp, routeAnimation } from "./../animation";

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">
            Educational Qualifications
          </h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Science</h5>
            <p className="font-semibold">Masters of Science (2015-2016)</p>
            <p className="my-3">
              I have accomplished my Masters Degree specialized in Computer
              Science with major subjects such as Object Oriented Programming
              with C#, Advanced Databases, Network Security, Operating Systems &
              Security, and Data Structures & Algorithm Design etc. GPA:
              3.5/4.00
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Work Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
            <p className="font-semibold">
              Tyler Technologies Inc. (2020-Present)
            </p>
            <p className="my-3">
              Participating in the complete software development lifecycle
              including requirements analysis, design, implementation, unit
              testing, and deployment tools, maintenance using technologies such
              as Vue.js, Javascript, C#, ASP.NET MVC, TFS, GitHub, and SQL
              Server etc.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar data={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar data={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
