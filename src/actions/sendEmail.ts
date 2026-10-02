"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  // Honeypot: a hidden field humans never see or fill. Bots do.
  company: z.string().optional(),
});

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: Record<string, string[] | undefined>;
}

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "zriyan191@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Portofolio Contact <onboarding@resend.dev>";

export async function sendEmailAction(
  _prevState: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const validatedData = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company") ?? undefined,
  });

  if (!validatedData.success) {
    return {
      success: false,
      message: "Invalid form data. Please check your inputs.",
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  const { name, email, message, company } = validatedData.data;

  // Honeypot tripped: pretend success, send nothing.
  if (company) {
    return {
      success: true,
      message: "Pesan Anda berhasil dikirim. Terima kasih!",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured; contact message dropped:", {
      name,
      email,
    });
    return {
      success: false,
      message:
        "Formulir kontak sedang tidak tersedia. Silakan hubungi saya langsung melalui email.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Message from ${name} via Portofolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return {
      success: true,
      message: "Pesan Anda berhasil dikirim. Terima kasih!",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
    };
  }
}
