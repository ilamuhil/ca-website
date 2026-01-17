"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { AtSign, Mail, MapPin, MessageSquare, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
  botcheck?: string;
};

export default function ContactPage() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({ mode: "onTouched" });

  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: siteConfig.name,
      subject: `New contact message - ${siteConfig.name}`,
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
        <p className="text-muted-foreground">
          For enquiries, please share your requirement. We will respond on business days.
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="text-foreground">Email:</span>{" "}
              <a className="underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail}
              </a>
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="text-foreground">Address:</span> {siteConfig.address.full}
            </span>
          </p>
        </div>
      </div>

      <Card className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-linear-to-br from-zinc-950/10 via-background to-emerald-500/10" />
          <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/60 to-background" />
        </div>
        <CardHeader className="relative border-b border-border bg-background/85 backdrop-blur">
          <CardTitle>Send us a message</CardTitle>
          <CardDescription className="text-muted-foreground text-xs mt-2">
            General enquiries only (please avoid confidential documents).
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <form className="space-y-4" onSubmit={handleSubmit(submit)}>
            <input type="checkbox" className="hidden" style={{ display: "none" }} {...register("botcheck")} />
            <div className="space-y-2 pt-4">
              <Label htmlFor="name">Name*</Label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <Input
                  id="name"
                  autoComplete="name"
                  className="pl-9"
                  {...register("name", { required: "Name is required", maxLength: 80 })}
                />
              </div>
              {errors.name ? <p className="text-xs text-red-600">{errors.name.message}</p> : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email*</Label>
              <div className="relative">
                <AtSign className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="pl-9"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address" },
                  })}
                />
              </div>
              {errors.email ? <p className="text-xs text-red-600">{errors.email.message}</p> : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message*</Label>
              <div className="relative">
                <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <Textarea
                  id="message"
                  className="pl-9"
                  {...register("message", { required: "Message is required" })}
                />
              </div>
              {errors.message ? <p className="text-xs text-red-600">{errors.message.message}</p> : null}
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">We will respond on business days.</p>
              <Button type="submit" disabled={!accessKey || isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </div>

            {isSubmitSuccessful && result ? (
              <div className={isSuccess ? "text-xs text-emerald-700" : "text-xs text-red-600"}>
                {result}
              </div>
            ) : null}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

