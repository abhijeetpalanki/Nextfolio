import { motion } from "framer-motion";
import { GetStaticPropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "./../data";
import { fadeInUp, routeAnimation, stagger } from "./../animation";

const index = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        I acquired project and time management skills, as well as the ability to
        communicate with team members and clients while effectively meeting
        milestones and deadlines. I have worked on a multitude of web based
        projects for a range of clients providing Web Design and Development
        (C#, .NET Framework, MVC, Entity Framework, SQL Server Web API, HTML,
        CSS, JS, jQuery, React.js, Vue.js, Angular, Bootstrap, Responsive
        Layouts).
      </h5>
      <h5 className="my-3 font-medium">
        During my Masters Degree, I studied Computer Science, and therefore have
        a keen understanding of web development, object oriented programming and
        user experience design which I put to good use on every project I work
        on.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
