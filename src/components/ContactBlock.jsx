import ctl from "@netlify/classnames-template-literals";
import ResponsiveContainer from "./ResponsiveContainer";

const ContactBlock = () => {
  return (
    <ResponsiveContainer>
      <div id="contact" className="pt-4 pb-24">
        <div
          className={ctl(`
            rounded-2xl border-2 border-[var(--tertiary-color)] bg-[var(--secondary-color)] p-8
            text-white
          `)}
        >
          <h2 className="mb-8 text-center text-4xl font-semibold">
            Get In Touch
          </h2>
          <p className="text-center text-xl">
            Send an email to me at{" "}
            <span className="underline">markanthonypandan26@gmail.com</span>
          </p>
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default ContactBlock;
