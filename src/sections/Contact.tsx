import TitleHeader from '../components/TitleHeader.tsx';
import {
  type ChangeEvent,
  type SyntheticEvent,
  type SubmitEvent,
  useState,
} from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../hooks/useTranslation.ts';
import ContactExperience from '../components/ContactModels/ContactExperience.tsx';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type FieldElement = HTMLInputElement | HTMLTextAreaElement;
type Status = 'idle' | 'sending' | 'success' | 'error';

const initialFormData: ContactFormData = { name: '', email: '', message: '' };

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const sendMessage = async (data: ContactFormData): Promise<void> => {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS environment variables are missing');
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      name: data.name,
      email: data.email,
      message: data.message,
    },
    {
      publicKey,
      limitRate: { id: 'contact-form', throttle: 10_000 }, // 1 send each 10s
      blockHeadless: true, // refuse automatized browsers
    }
  );
};

const setInvalidMessage =
  (message: string) => (e: SyntheticEvent<FieldElement>) => {
    e.currentTarget.setCustomValidity(message);
  };

const clearInvalidMessage = (e: SyntheticEvent<FieldElement>) => {
  e.currentTarget.setCustomValidity('');
};

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<Status>('idle');
  const isSending = status === 'sending';

  const handleChange = (e: ChangeEvent<FieldElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Typing again clears the previous result message
    setStatus((prev) =>
      prev === 'success' || prev === 'error' ? 'idle' : prev
    );
  };

  const send = async () => {
    setStatus('sending');

    try {
      await sendMessage(formData);
      setFormData(initialFormData);
      setStatus('success');
    } catch (error) {
      // EmailJS rejects with { status, text } (not an Error instance)
      console.error('Contact: could not send the message', error);
      setStatus('error');
    }
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    void send();
  };

  return (
    <section id="contact" className="w-full md:mt-40 mt-20">
      <div className="w-full md:px-20 px-5">
        <TitleHeader badge={t.contact.badge} title={t.contact.title} />

        <div className="mt-16 grid-12-cols">
          {/* Contact Form - Left side */}
          <div className="xl:col-span-5">
            <div className="card-border rounded-xl p-6 md:p-10">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">{t.contact.name.label}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder={t.contact.name.placeholder}
                    value={formData.name}
                    onChange={handleChange}
                    onInvalid={setInvalidMessage(t.contact.invalid.name)}
                    onInput={clearInvalidMessage}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">{t.contact.email.label}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder={t.contact.email.placeholder}
                    value={formData.email}
                    onChange={handleChange}
                    onInvalid={setInvalidMessage(t.contact.invalid.email)}
                    onInput={clearInvalidMessage}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">{t.contact.message.label}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={t.contact.message.placeholder}
                    value={formData.message}
                    onChange={handleChange}
                    onInvalid={setInvalidMessage(t.contact.invalid.message)}
                    onInput={clearInvalidMessage}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="cta-wrapper w-full h-12 md:h-16 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="cta-button group">
                    <span className="bg-circle" />
                    <span className="text">
                      {isSending ? t.contact.sending : t.contact.send}
                    </span>
                    <span className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="" />
                    </span>
                  </span>
                </button>

                {/* Live region: always rendered so screen readers announce it */}
                <p
                  role="status"
                  aria-live="polite"
                  className={`min-h-6 text-sm ${status === 'error' ? 'text-red-400' : 'text-emerald-400'}`}
                >
                  {status === 'success' && t.contact.success}
                  {status === 'error' && t.contact.error}
                </p>
              </form>
            </div>
          </div>

          {/* 3D Experience - Right side */}
          <div className="xl:col-span-7">
            <div className="card-border h-96 md:h-112 xl:h-full xl:min-h-96 rounded-xl overflow-hidden hover:cursor-grab active:cursor-grabbing bg-[radial-gradient(ellipse_at_50%_35%,rgba(109,69,206,0.35),transparent_65%)]">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
