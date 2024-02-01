"use client";
import * as React from "react";

import { Button } from "@/app/[lang]/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/[lang]/components/ui/card";
import { Input } from "@/app/[lang]/components/ui/input";
import { Label } from "@/app/[lang]/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/[lang]/components/ui/select";
import { useTranslation } from "@/app/[lang]/i18n/client";
import { useParams } from "next/navigation";
import { LocaleType } from "@/app/[lang]/i18n/settings";

export function CardWithForm() {
  const locale = useParams()?.lang as LocaleType;
  const { t } = useTranslation(locale, "translation");

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{t("contactUs")}</CardTitle>
        <CardDescription>Lets talk what you need</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Topic</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Frontend</SelectItem>
                  <SelectItem value="sveltekit">Backend</SelectItem>
                  <SelectItem value="astro">AI</SelectItem>
                  <SelectItem value="nuxt">Data Science</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full">Send</Button>
      </CardFooter>
    </Card>
  );
}
