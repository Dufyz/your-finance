import Image from "next/image";

const TwitterIcon = () => {
  return (
    <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[50%] border-[2px] border-[#b9bcc1]">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center justify-center">
          <Image
            src={"/icons/twitter.svg"}
            alt="facebook icon"
            width={24}
            height={24}
            color="#099268"
          />
        </div>
      </a>
    </div>
  );
};

export default TwitterIcon;
