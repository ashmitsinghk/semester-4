import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed w-full bg-[#F5F7Fa] py-6 px-12">
      <div className="flex w-full mx-auto gap-auto">
        <div className="w-full py-2">
            <Image src={`/Logo.svg`} alt=" " width={150} height={20}></Image>
        </div>
        <ul className="flex gap-6 w-full py-2">
          <Link href={`/`}>
            <li className="">Home</li>
          </Link>
          <Link href={`/`}>
            <li className="">Service</li>
          </Link>
          <Link href={`/`}>
            <li className="">Feature</li>
          </Link>
          <Link href={`/`}>
            <li className="">Product</li>
          </Link>
          <Link href={`/`}>
            <li className="">Testimonial</li>
          </Link>
          <Link href={`/`}>
            <li className="">FAQ</li>
          </Link>
        </ul>
        <div className="flex gap-4 w-full pl-52">
            <div className="text-green-600 px-6 py-2 hover:bg-gray-200 rounded-md">
                Login
            </div>
            <div className="bg-[#4CAF4F] text-white px-6 py-2 hover:bg-green-600 rounded-md">
                Sign Up
            </div>
        </div>
      </div>
    </div>
  );
}
