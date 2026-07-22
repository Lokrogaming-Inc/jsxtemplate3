import { Mail, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import config from "../data/json/config.json";

export default function Contact() {
  const [isValid, setIsValid] = useState(false);

  const handleInput = (e) => {
    setIsValid(e.currentTarget.form.checkValidity());
  };
  return (
    
       <section
  className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/motocross.jpg')",
      }}
    >
      {/* Dunkler + leicht brauner Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply"></div>

      {/* Inhalt */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
       
        {/* Header */}
        <div className="text-center mb-12">
          <Mail
            size={64}
            className="mx-auto mb-6 text-white animate-float2"
          />

          <h1 className="text-5xl font-black text-white">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Have a question, project idea or partnership request?
            We'd love to hear from you.
          </p>
        </div>

        {/* Card */}
        <div
          className="
            bg-[#001111]
            rounded-3xl
            border
            border-yellow-400
            shadow-xl
            shadow-yellow-400/10
            p-8
            sm:p-10
          "
        >
          <form
            action={`https://formsubmit.co/${config.formsubmitEmail}`}
            method="POST"
            className="space-y-6"
          >
            {/* Spam Protection */}
            <input
              type="hidden"
              name="_captcha"
              value="false"
            />
            <input
  type="hidden"
  name="_next"
  value={`${window.location.origin}/success`}
/>
            <input
              type="hidden"
              name="_subject"
              value="New Contact Request"
            />

            {/* Name */}
            <div>
              <label className="block text-yellow-300 font-semibold mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                onInput={handleInput}
                placeholder="John Doe"
                className="
                  w-full
                  rounded-xl
                  border
                  border-orange-400/40
                  bg-black/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition
                  duration-150
                  ease-in-out
                  focus:border-orange-300
                  focus:shadow-lg
                  focus:shadow-amber-600
                  hover:shadow-lg
                  hover:shadow-amber-600
                  hover:invalid:shadow-lg
                  hover:invalid:shadow-pink-800
                  hover:invalid:border-pink-800
                  hover:invalid:inset-shadow-sm
                  hover:invalid:inset-shadow-pink-800
                  hover:valid:shadow-lg
                  hover:valid:shadow-green-700
                  hover:valid:border-green-700
                  hover:valid:inset-shadow-sm
                  hover:valid:inset-shadow-green-700
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-yellow-300 font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                onInput={handleInput}
                placeholder="john@example.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-orange-400/40
                  bg-black/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition
                  duration-150
                  ease-in-out
                  focus:valid:border-orange-300
                  focus:invalid:border-pink-800
                  hover:invalid:shadow-lg
                  hover:invalid:shadow-pink-800
                  hover:invalid:border-pink-800
                  hover:invalid:inset-shadow-sm
                  hover:invalid:inset-shadow-pink-800
                  hover:valid:shadow-lg
                  hover:valid:shadow-green-700
                  hover:valid:border-green-700
                  hover:valid:inset-shadow-sm
                  hover:valid:inset-shadow-green-700
                "
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-yellow-300 font-semibold mb-2">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                required
                onInput={handleInput}
                placeholder="Project Inquiry"
                className="
                  w-full
                  rounded-xl
                  border
                  border-orange-400/40
                  bg-black/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition
                  duration-150
                  ease-in-out
                  focus:border-orange-600/20
                  focus:shadow-lg
                  focus:shadow-yellow-800
                  hover:shadow-lg
                  hover:shadow-amber-600
                  hover:invalid:shadow-lg
                  hover:invalid:shadow-pink-800
                  hover:invalid:border-pink-800
                  hover:invalid:inset-shadow-sm
                  hover:invalid:inset-shadow-pink-800
                  hover:valid:shadow-lg
                  hover:valid:shadow-green-700
                  hover:valid:border-green-700
                  hover:valid:inset-shadow-sm
                  hover:valid:inset-shadow-green-700
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-yellow-300 font-semibold mb-2">
                Message
              </label>

              <textarea
                name="message"
                rows="7"
                required
                onInput={handleInput}
                placeholder="Tell us about your project..."
                className="
                  w-full
                  rounded-xl
                  border
                  border-orange-400/40
                  bg-black/20
                  px-4
                  py-3
                  text-white
                  outline-none
                  resize-none
                  transition
                  duration-300
                  ease-in-out
                  focus:border-orange-500/20
                  focus:shadow-lg
                  focus:shadow-amber-800
                  hover:shadow-lg
                  hover:shadow-amber-600
                  hover:invalid:shadow-lg
                  hover:invalid:shadow-pink-800
                  hover:invalid:border-pink-800
                  hover:invalid:inset-shadow-sm
                  hover:invalid:inset-shadow-pink-800
                  hover:valid:shadow-lg
                  hover:valid:shadow-green-700
                  hover:valid:border-green-700
                  hover:valid:inset-shadow-sm
                  hover:valid:inset-shadow-green-700
                "
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                px-6
                py-3
                transition
                duration-150
                ease-in-out
                text-lg
                font-bold
                enabled:bg-amber-900
                enabled:text-white
                enabled:border-orange-700
                enabled:shadow-lg
                enabled:shadow-orange-700
                hover:enabled:text-white
                hover:enabled:shadow-[0_10px_40px_rgba(59,130,246,0.35),0_0_70px_rgba(34,211,238,0.25),0_0_100px_rgba(168,85,247,0.2)]
                hover:disabled:border
                hover:disabled:border-pink-700 
                hover:disabled:shadow-md
                hover:disabled:shadow-pink-700
                disabled:cursor-not-allowed
                disabled:shadow-lg
                disabled:shadow-black
                disabled:bg-slate-800
                disabled:text-slate-300
                disabled:border-slate-900
              "
            >
              <span
                className="
                  enabled:absolute
                  enabled:inset-0
                  enabled:bg-blue-900
                  enabled:origin-left
                  enabled:scale-x-0
                  enabled:transition-transform
                  enabled:duration-300
                  enabled:group-hover:scale-x-100
                "
              />

              <span className="relative z-10 flex items-center gap-2">
              <Send 
  size={18}
  className="
    transition
    group-enabled:group-hover:animate-float
    group-enabled:animate-pulse
    group-hover:rotate-12
  "
/>
                Send Message
              </span>
            </button>
          </form>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mt-10">

          <div className="bg-white/40 backdrop-blur rounded-2xl p-6">
            <MessageSquare
              size={28}
              className="mb-3"
            />

            <h3 className="font-bold text-lg">
              Fast Response
            </h3>

            <p className="text-black/70 mt-2">
              We usually reply within 24 hours.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur rounded-2xl p-6">
            <Mail
              size={28}
              className="mb-3"
            />

            <h3 className="font-bold text-lg">
              Direct Contact
            </h3>

            <p className="text-black/70 mt-2 break-all">
              {config.formsubmitEmail}
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>
    </section>
  );
}
