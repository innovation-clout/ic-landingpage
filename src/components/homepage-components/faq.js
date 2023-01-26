import FAQBanner from "../../images/faq.svg";
import { useState, useRef } from "react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState([])

  const Q1ref = useRef("q1");
  const Q2ref = useRef("q2");
  const Q3ref = useRef("q3");
  const Q4ref = useRef("q4");
  const Q5ref = useRef("q5");
  const Q6ref = useRef("q6");

  function OpenA(ref) {
    isOpen.includes(ref) ? setIsOpen([...isOpen.pop(ref)]) : setIsOpen([
        ...isOpen, ref
      ]) 
  }


  
  const FAQObject = ({ question, answer, obj_ref }) => {
    return (
      <div className="flex flex-col justify-center">
        <div className="flex flex-row items-center gap-2">
          <div onClick={() => OpenA(obj_ref.current)}>{ isOpen.includes(obj_ref.current) ? "-" : "+"}</div>
          <h2 className="md:w-4/5 tracking-wider md:text-lg">{question}</h2>
        </div>
        <h2
          className={ isOpen.includes(obj_ref.current) ?  "visible text-xs font-light px-2 flex items-center text-white tracking-wide py-4 bg-white bg-opacity-30 md:w-4/5" : "invisible" }
        >
          {answer}
        </h2>
      </div>
    );
  };
  return (
    <div
      className="w-full h-[150rem] md:h-[80rem] lg:h-screen bg-cover bg-no-repeat flex flex-col items-center text-white "
      style={{ backgroundImage: `url('${FAQBanner}')` }}
      id="faq"
    >
      <h2 className="text-4xl font-extrabold pt-10 text-center">Frequently Asked Questions</h2>

      <div className="flex flex-col md:grid grid-cols-2 py-20 h-96 place-items-center w-screen px-10 md:px-0 md:pl-20">

          <FAQObject
            question={"What is the mission of our startup?"}
            answer={
              "Our platform aims to empower creators with the tools, resources, and connections they need to bring their ideas to life. By leveraging cutting-edge technologies like generative ai, fostering collaboration, and building personalized solutions, we are going to drive innovation in storytelling and imagination."
            }
            obj_ref={Q1ref}
          />
          <FAQObject
            question={
              "How does our platform help creators connect with the industry professionals?"
            }
            answer={
              " Our platform serves as a bridge between creators and the industry professionals they need. Whether creators are seeking mentorship, internships, or networking opportunities, we provide them with tailored options that align with their personal goals and aspirations. Creators can expect to find a wealth of opportunities to learn, grow, and connect with the right people at the right time."
            }
            obj_ref={Q2ref}
          />


       
          <FAQObject
            question={
              "How does our platform help creators turn their vision into reality? "
            }
            answer={
              "By focusing on a personalized approach, where creators can showcase their work, connect with like-minded individuals, and find potential partners, friends, and co-founders, we help creators turn their vision into reality. Additionally, our platform provides creators with opportunities to learn and grow, giving them the tools and resources they need to take their ideas to the next level."
            }
            obj_ref={Q3ref}
          />
          <FAQObject
            question={
              "How does our platform foster creativity and innovation? "
            }
            answer={
              "Our platform is built to foster creativity and innovation by providing creators with access to cutting-edge technologies, resources, and tools. Additionally, we believe in fostering collaboration between creators, which leads to the generation of new and unique ideas. We strive to push the boundaries of what's possible in storytelling and imagination."
            }
            obj_ref={Q4ref}
          />


       
          <FAQObject
            question={
              "How can companies and start-ups benefit from using our platform? "
            }
            answer={
              "Companies and startups gain access to young and highly skilled talent through our platform as we connect them with a pool of individuals who have the skills and expertise to assist with specific projects or provide expert advice.  These individuals can become part-time additions to a company's team, offering their skills and knowledge on a need-to-need basis, providing a cost-effective solution for companies and start-ups looking to grow and scale."
            }
            obj_ref={Q5ref}
          />
          <FAQObject
            question={
              "How does our platform match companies and start-ups with the right talent? "
            }
            answer={
              "We use advanced algorithms and machine learning techniques to match companies and start-ups with individuals who possess the necessary skills and expertise. Additionally, we take into consideration the specific requirements and goals of the companies and start-ups, as well as the preferences and career aspirations of the individuals. This ensures that the match is as optimal as possible and will lead to a successful collaboration."
            }
            obj_ref={Q6ref}
          />

      </div>
    </div>
  );
};

export default FAQ;
