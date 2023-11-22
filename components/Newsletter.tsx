import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { Check, Mail } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

const Newsletter = () => {
  return (
    <section className="mt-10 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col-reverse flex-wrap md:flex-row md:justify-between md:items-center md:space-x-6 md:mb-16">
        <div className="md:flex-1 md:mr-4">
          <h1 className="h2">
            Zapisz się na newsletter. <br />
            Otrzymaj 100zł rabatu.
          </h1>
          <div className="mt-4 flex w-full max-w-sm items-center space-x-2 border-b-[2px]">
            <Mail size={40} />
            <Input
              type="email"
              placeholder="Wpisz email"
              className="border-none"
            />
            <Button
              variant="link"
              type="submit"
              className="text-black underline-effect hover:no-underline"
            >
              Dołącz
            </Button>
          </div>
          <div className="mt-6 flex items-center space-x-2 w-[80%]">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[12px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Wyrażam zgodę na przetwarzanie danych osobowych w celu
              otrzymywania newslettera. Zobacz naszą politykę prywatności.
            </label>
          </div>
        </div>
        <div className="md:flex-1">
          <Image
            src="/images/Newsletter.png"
            width={652}
            height={400}
            alt="Newsletter"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
