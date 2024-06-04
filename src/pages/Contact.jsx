import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <div className="flex flex-row gap-6 mb-4">
          <button
            className="text-cyan-500 hover:text-cyan-300 cursor-pointer"
            onClick={() =>
              (window.location.href = "https://wa.me/+60182401703")
            }
          >
            <IoLogoWhatsapp size={28} />
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
              (window.location.href = "https://www.instagram.com/muhdlbega/")
            }
          >
            <FaInstagramSquare size={28} />
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
            <FaGithub size={28} />
          </button>
        </div>
        <h1 className="head-text">Let&apos;s Get in Contact!</h1>
        <p className="text-slate-500">
          If you are interested to connect and learn more about me send me an
          email down below or in one of the socials listed above. Thank you for
          visiting Lubega.dev :)
        </p>
        <form
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
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" disabled={loading} className="btn">
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
