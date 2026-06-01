"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendEmailAction(prevState: any, formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const validatedData = contactSchema.safeParse(data);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Invalid form data. Please check your inputs.",
        errors: validatedData.error.flatten().fieldErrors,
      };
    }

    const { name, email, message } = validatedData.data;

    // Send email using Resend
    // Skip if no API key is present, just return success for mockup purposes if placeholder
    if (!process.env.RESEND_API_KEY) {
       console.log("Mocking email send (No API Key):", { name, email, message });
       // await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network
       return { success: true, message: "Pesan Anda berhasil dikirim (Mock)!" };
    }

    await resend.emails.send({
      from: "Portofolio Contact <onboarding@resend.dev>",
      to: "riyan.zakaria.zulkarnain@example.com", // Adjust to the actual email
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
