import { useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas, PokeballCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ThemeContext } from "../theme/ThemeContext";

const Contact = () => {
  const formRef = useRef();
  const { pokeMode } = useContext(ThemeContext);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_fz0ko75",
        "template_j72jjb9",
        {
          from_name: form.name,
          to_name: "Sarthak",
          from_email: form.email,
          to_email: "sarthakroongta@gmail.com",
          message: form.message,
        },
        "s5GIzIsIn-TXf5ool"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {pokeMode ? (
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="relative flex-[0.75] bg-[#e6f2ff] p-8 border-2 border-black rounded-[16px]"
        >
          <div className="absolute top-2 left-2 flex items-center space-x-1">
            <div className="w-5 h-5 bg-cyan-400 border-2 border-black rounded-full" />
            <div className="w-3 h-3 bg-yellow-300 border border-black rounded-full" />
            <div className="w-3 h-3 bg-red-500 border border-black rounded-full" />
            <div className="w-3 h-3 bg-green-400 border border-black rounded-full" />
          </div>

          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-black font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-white/20 py-4 px-6 placeholder:text-black/50 text-black rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-black font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-white/20 py-4 px-6 placeholder:text-black/50 text-black rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-black font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message here"
                className="bg-white/20 py-4 px-6 placeholder:text-black/50 text-black rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-black py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-black rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          <div className="absolute bottom-3 right-3 w-[40px] h-[40px] flex justify-center items-center">
            <div className="relative w-[30px] h-[30px]">
              <div className="absolute top-[10px] left-[10px] w-[10px] h-[10px] bg-black rounded-sm" />
              <div className="absolute top-0 left-[10px] w-[10px] h-[10px] bg-black rounded-sm" />
              <div className="absolute bottom-0 left-[10px] w-[10px] h-[10px] bg-black rounded-sm" />
              <div className="absolute top-[10px] left-0 w-[10px] h-[10px] bg-black rounded-sm" />
              <div className="absolute top-[10px] right-0 w-[10px] h-[10px] bg-black rounded-sm" />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message here"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      )}

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
       {pokeMode ? <PokeballCanvas /> : <EarthCanvas />}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
