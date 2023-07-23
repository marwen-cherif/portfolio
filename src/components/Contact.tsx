import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import SectionWrapper from "../atoms/SectionWrapper.tsx";
import { MailIcon } from "../atoms/Icons/MailIcon/MailIcon.tsx";
import { Button } from "../atoms/Button.ts";
import toast from "react-hot-toast";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const notify = () =>
    toast.custom(
      (t) => (
        <div
          id="toast-success"
          className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
              />
            </svg>
          </div>
          <div className="ml-3 text-sm font-normal">
            Thank you. I will get back to you as soon as possible.
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
            onClick={() => toast.dismiss(t.id)}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ),
      { id: "unique-notification", position: "top-center" },
    );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_CONTACT_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "MarwenCherif",
          from_email: form.email,
          to_email: "marwen.cherif@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);

          notify();

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <SectionWrapper idName="contact">
      <div
        className="-mt-[8rem] xl:flex-row flex-col-reverse
      flex gap-10 overflow-hidden"
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-jet p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6 font-poppins"
          >
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-timberWolf font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's your message?"
                className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
              />
            </label>

            <Button
              type="submit"
              className="live-demo flex justify-center sm:gap-4
            gap-3 sm:text-[20px] text-[16px] text-timberWolf
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px]
            w-[100px] h-[45px] rounded-[10px] bg-night
            hover:bg-battleGray hover:text-eerieBlack
            transition duration-[0.2s] ease-in-out"
            >
              {loading ? "Sending" : "Send"}
              <MailIcon />
            </Button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
