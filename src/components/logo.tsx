import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="https://i.ibb.co/svjvCLZL/icon.jpg"
      alt="Nihongo Tamashii Logo"
      width={40}
      height={40}
      className="rounded-full"
    />
  );
}
