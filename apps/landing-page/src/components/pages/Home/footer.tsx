import { DonateModal } from "@/components/Global/donate-modal";
import RenderTablerIcon from "@/components/Global/render-tabler-icon";
import SocialIcon from "@/components/Global/social-icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { i18n } from "@/translate/i18";

export default function Footer() {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <footer
        className="mx-auto flex w-full max-w-7xl flex-col items-start justify-center gap-8 p-8 sm:items-center"
        id="Contact"
        data-aos="fade-up"
      >
        <div className="flex w-full flex-col items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center gap-8 md:py-8">
            <h1 className="text-3xl font-bold text-green-700">
              {i18n.t("contact.title")}
            </h1>
            <p className="text-muted-foreground text-start text-xl sm:text-center">
              {i18n.t("contact.description")}
            </p>
            <div className="flex flex-col flex-wrap items-center justify-between gap-4 sm:flex-row">
              <Link href="https://dufyz.netlify.app/" target="_blank">
                <Button>
                  <p>👀</p>
                  <p>{i18n.t("contact.button.more")}</p>
                </Button>
              </Link>
              <Button onClick={() => setIsDonateModalOpen(true)}>
                <p>💰</p>
                <p>{i18n.t("contact.button.donate")}</p>
              </Button>
              <Link href="https://linktr.ee/Dufyz" target="_blank">
                <Button>
                  <p>👋</p>
                  <p>{i18n.t("contact.button.contact")}</p>
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col flex-wrap items-center justify-center gap-12 border-t-2 border-[text-primary-hover] pt-8 sm:flex-row md:justify-between">
            <div>
              <Image src={"/logo.svg"} height={48} width={48} alt="logo icon" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="center text-muted-foreground text-base">
                {i18n.t("contact.copy-right")}
              </p>
              {/* <Select
                onValueChange={(language) => handleChangeLanguage(language)}
              >
                <SelectTrigger className="w-40 min-w-[unset]">
                  <SelectValue placeholder="Language" defaultValue="en" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pt-BR">pt-BR</SelectItem>
                  <SelectItem value="en">en</SelectItem>
                </SelectContent>
              </Select> */}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 sm:justify-between">
              <SocialIcon link="">
                <RenderTablerIcon
                  icon="IconBrandFacebook"
                  size={20}
                  color="#099268"
                />
              </SocialIcon>
              <SocialIcon link="">
                <RenderTablerIcon
                  icon="IconBrandInstagram"
                  size={20}
                  color="#099268"
                />
              </SocialIcon>
              <SocialIcon link="">
                <RenderTablerIcon
                  icon="IconBrandTwitter"
                  size={20}
                  color="#099268"
                />
              </SocialIcon>
            </div>
          </div>
        </div>
      </footer>

      <DonateModal
        isOpen={isDonateModalOpen}
        setIsOpen={setIsDonateModalOpen}
      />
    </>
  );
}
