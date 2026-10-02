"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { sendEmailAction } from "@/actions/sendEmail";
import { useAppStore } from "@/store/useAppStore";
import { translations } from "@/lib/translations";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");
  const { locale } = useAppStore();
  const t = translations[locale as keyof typeof translations] || translations.en;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    
    // Simulate slight delay for better UX if local mockup
    await new Promise(res => setTimeout(res, 800));

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const result = await sendEmailAction(null, formData);

    if (result.success) {
      setStatus("success");
      setResponseMessage(result.message);
      reset();
      
      // Reset success state after a few seconds
      setTimeout(() => {
        setStatus("idle");
        setResponseMessage("");
      }, 5000);
    } else {
      setStatus("error");
      setResponseMessage(result.message);
    }
  };

  return (
    <form className="space-y-8 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors" onSubmit={handleSubmit(onSubmit)}>
      
      {status === "success" && (
        <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-xl flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <p className="font-medium text-sm">{responseMessage}</p>
        </div>
      )}

      {status === "error" && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="font-medium text-sm">{responseMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <input 
            type="text" 
            id="name"
            {...register("name")}
            className={`peer w-full bg-transparent border-b-2 py-3 text-slate-900 dark:text-white focus:outline-none placeholder-transparent transition-colors ${
              errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-300 dark:border-slate-700 focus:border-accent'
            }`}
            placeholder="Nama"
            disabled={status === "loading"}
          />
          <label htmlFor="name" className="absolute left-0 -top-3.5 text-sm text-slate-500 dark:text-slate-400 font-mono transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-accent">
            // {t.contact.nameLabel}
          </label>
          {errors.name && <p className="text-red-500 text-xs mt-1 absolute">{errors.name.message}</p>}
        </div>
        
        <div className="relative">
          <input 
            type="email" 
            id="email"
            {...register("email")}
            className={`peer w-full bg-transparent border-b-2 py-3 text-slate-900 dark:text-white focus:outline-none placeholder-transparent transition-colors ${
              errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-300 dark:border-slate-700 focus:border-accent'
            }`}
            placeholder="Email"
            disabled={status === "loading"}
          />
          <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm text-slate-500 dark:text-slate-400 font-mono transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-accent">
            // {t.contact.emailLabel}
          </label>
          {errors.email && <p className="text-red-500 text-xs mt-1 absolute">{errors.email.message}</p>}
        </div>
      </div>

      <div className="relative mt-8 pt-4">
        <textarea 
          id="message"
          rows={4}
          {...register("message")}
          className={`peer w-full bg-transparent border-b-2 py-3 text-slate-900 dark:text-white focus:outline-none placeholder-transparent transition-colors resize-none ${
            errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-300 dark:border-slate-700 focus:border-accent'
          }`}
          placeholder="Pesan"
          disabled={status === "loading"}
        ></textarea>
        <label htmlFor="message" className="absolute left-0 top-0 text-sm text-slate-500 dark:text-slate-400 font-mono transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-accent">
          // {t.contact.messageLabel}
        </label>
        {errors.message && <p className="text-red-500 text-xs mt-1 absolute">{errors.message.message}</p>}
      </div>

      <div className="flex justify-end pt-4">
        <button 
          type="submit"
          disabled={status === "loading"}
          className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-accent dark:hover:bg-accent hover:text-white rounded-xl font-mono font-bold tracking-wider transition-colors shadow-lg shadow-slate-900/20 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 flex items-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              {t.contact.sending}
              <Loader2 className="w-5 h-5 animate-spin" />
            </>
          ) : (
            <>
              {t.contact.sendButton}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
