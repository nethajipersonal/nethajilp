"use server";

import { prisma } from "@/lib/prisma";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in every field." };
  }

  const fullMessage = subject ? `[${subject}] ${message}` : message;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  if (!process.env.DATABASE_URL) {
    return {
      status: "error",
      message: "Contact form isn't connected to a database yet.",
    };
  }

  try {
    await prisma.contactMessage.create({ data: { name, email, message: fullMessage } });
    return { status: "success", message: "Thanks! I'll get back to you soon." };
  } catch (error) {
    console.error("Failed to save contact message", error);
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
