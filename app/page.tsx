import Link from "next/link";
import Image from "next/image";

import HomeImg from "@/public/home.jpg";

export default function Home() {
  return (
    <div>
      <div>Home</div>
      <div className="absolute -z-10 inset-0">
        <Image
          src={HomeImg}
          alt="Car Factory"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
