import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Credits from "../components/Credits";
import { useAnimation, motion } from "framer-motion";
import { VscGithub, VscGithubInverted } from "react-icons/vsc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
  }, [animationControls]);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      showAlert({
        show: true,
        text: "Please enter your name.",
        type: "danger",
      });
      return;
    }

    if (!validateEmail(form.email)) {
      showAlert({
        show: true,
        text: "Please enter a valid email address.",
        type: "danger",
      });
      return;
    }

    if (!form.message.trim()) {
      showAlert({
        show: true,
        text: "Please enter your message.",
        type: "danger",
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Lubega",
          from_email: form.email,
          to_email: "muhdlubega99@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Message received :D",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "Error in sending message :( Please try again",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-full">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={animationControls}
          className="flex flex-row gap-6 mb-4"
        >
          <button
            className="text-cyan-500 hover:text-cyan-300 cursor-pointer"
            onClick={() =>
              (window.location.href = "https://github.com/lubega-deriv")
            }
          >
            <VscGithub size={28} />
          </button>
          <button
            className="text-cyan-500 hover:text-cyan-300 cursor-pointer"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/muhammad-lubega/")
            }
          >
            <FaLinkedin size={28} />
          </button>
          <button
            className="text-cyan-500 hover:text-cyan-300 cursor-pointer"
            onClick={() =>
              (window.location.href = "https://wa.me/+60182401703")
            }
          >
            <IoLogoWhatsapp size={30} />
          </button>
          <button
            className="text-cyan-500 hover:text-cyan-300 cursor-pointer"
            onClick={() =>
              (window.location.href = "mailto:muhdlubegasiraje@gmail.com")
            }
          >
            <MdEmail size={28} />
          </button>
          <button
            className="text-cyan-500 hover:text-cyan-300 cursor-pointer"
            onClick={() =>
              (window.location.href = "https://github.com/muhdlubega")
            }
          >
            <VscGithubInverted size={28} />
          </button>
        </motion.div>
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={animationControls}
          className="head-text"
        >
          Let&apos;s Get in Contact!
        </motion.h1>
        <motion.p
          initial={{ y: -40, opacity: 0 }}
          animate={animationControls}
          className="text-slate-400"
        >
          If you are interested to connect and learn more about me send me an
          email down below or in one of the socials listed above. Thank you for
          visiting Lubega.dev :)
        </motion.p>
        <motion.form
          initial={{ y: -60, opacity: 0 }}
          animate={animationControls}
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-white font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="text-white font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="text-white font-semibold">
            Your Message
            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Write your thoughts here..."
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" disabled={loading} className="btn mb-32">
            {loading ? "Sending..." : "Submit"}
          </button>
        </motion.form>
      </div>
      <Credits />
    </section>
  );
};

export default Contact;
