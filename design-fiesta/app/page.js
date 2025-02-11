import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-20">
      <div className="flex px-40 bg-[#F5F7FA] pt-40 pb-24">
        <div className="w-3/4">
          <div className="text-6xl font-semibold text-[#4D4D4D]">
            Lessons and insights
          </div>
          <div className="text-6xl font-semibold text-[#4CAF4F] mt-3">
            from 8 years
          </div>
          <div className="text-gray-600 my-8">
            Where to grow your business as a photographer: site or social media?
          </div>
          <Link href={`/`}>
            <button className="bg-[#4CAF4F] text-white px-7 py-3 hover:bg-green-600 rounded-md">
              Register
            </button>
          </Link>
        </div>
        <div className="flex-1 w-1/4">
          <Image
            src={`/Illustration1.svg`}
            className="mx-auto"
            width={300}
            height={300}
          ></Image>
        </div>
      </div>
      <div className="w-full py-10">
        <h1 className="text-center mx-auto font-semibold text-3xl text-[#4D4D4D]">
          Our Clients
        </h1>
        <p className="text-center mx-auto my-4 text-sm text-gray-500">
          We have been working with some Fortune 500+ clients
        </p>
        <Image
          src={`/Clients.svg`}
          className="mx-auto"
          width={800}
          height={200}
          alt=""
        ></Image>
      </div>
      <div className="w-full py-10">
        <h1 className="text-center w-1/3 mx-auto font-semibold text-3xl text-[#4D4D4D]">
          Manage your entire community in a single system
        </h1>
        <p className="text-center mx-auto my-4 text-sm text-gray-500">
          Who is Nexcent suitable for?
        </p>
        <div className="flex mx-auto w-4/5 gap-20">
          <div className="w-full shadow shadow-md rounded-lg p-10">
            <Image
              src={`/Icon1.svg`}
              className="mx-auto"
              alt=" "
              width={65}
              height={56}
            ></Image>
            <h1 className="text-2xl text-[#4D4D4D] my-4 font-semibold text-center mx-auto">
              Membership Organisations
            </h1>
            <p className="text-center mx-auto text-sm text-gray-500">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="w-full shadow shadow-md rounded-lg p-10">
            <Image
              src={`/Icon2.svg`}
              className="mx-auto"
              alt=" "
              width={65}
              height={56}
            ></Image>
            <h1 className="text-2xl w-3/4 text-[#4D4D4D] my-4 font-semibold text-center mx-auto">
              National Associations
            </h1>
            <p className="text-center mx-auto text-sm text-gray-500">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="w-full shadow shadow-md rounded-lg p-10">
            <Image
              src={`/Icon3.svg`}
              className="mx-auto"
              alt=" "
              width={65}
              height={56}
            ></Image>
            <h1 className="text-2xl w-3/4 text-[#4D4D4D] my-4 font-semibold text-center mx-auto">
              Clubs And Groups
            </h1>
            <p className="text-center mx-auto text-sm text-gray-500">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-40 py-24">
        <div className="flex-1 w-2/5">
          <Image
            src={`/rafiki.svg`}
            className="mx-auto"
            width={400}
            height={400}
            alt=" "
          ></Image>
        </div>
        <div className="w-3/5">
          <div className="text-4xl w-3/4 text-[#4D4D4D] font-semibold">
            The unseen of spending three years at Pixelgrade
          </div>
          <div className="text-gray-600 my-8 text-sm w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </div>
          <Link href={`/`}>
            <button className="bg-[#4CAF4F] text-white px-7 py-3 hover:bg-green-600 rounded-md">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="flex px-40 py-24 bg-[#F5F7FA]">
          <div className="w-full">
              <h1 className="text-4xl font-semibold text-[#4d4d4d]">
                Helping a local
              </h1>
              <h1 className="text-4xl font-semibold text-[#4CAF4F]">
                business reinvent itself
              </h1>
              <p className="pt-4">
                We reached here with our hardwork and dedication
              </p>
          </div>
          <div className="w-full">
            <div className="flex gap-8 my-4">
              <div>
                <h1 className="text-lg font-semibold">2,245,313</h1>
                <p className="text-sm">Members</p>
              </div>
              <div>
                <h1 className="text-lg font-semibold">2,245,313</h1>
                <p className="text-sm">Members</p>
              </div>
            </div>
            <div className="flex gap-8 my-4">
              <div>
                <h1 className="text-lg font-semibold">2,245,313</h1>
                <p className="text-sm">Members</p>
              </div>
              <div>
                <h1 className="text-lg font-semibold">2,245,313</h1>
                <p className="text-sm">Members</p>
              </div>
            </div>
          </div>
      </div>
      <div className="flex px-40 py-24">
        <div className="flex-1 w-2/5">
          <Image
            src={`/pana.svg`}
            className="mx-auto"
            width={400}
            height={400}
            alt=" "
          ></Image>
        </div>
        <div className="w-3/5">
          <div className="text-4xl w-3/4 text-[#4D4D4D] font-semibold">
            How to design your site footer like we did?
          </div>
          <div className="text-gray-600 my-8 text-sm w-3/4">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </div>
          <Link href={`/`}>
            <button className="bg-[#4CAF4F] text-white px-7 py-3 hover:bg-green-600 rounded-md">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="flex px-40 py-8 bg-[#F5F7FA]">
        <div className="flex-1 w-2/5">
          <Image
            src={`/tesla.svg`}
            className="mx-auto"
            width={400}
            height={400}
            alt=" "
          ></Image>
        </div>
        <div className="w-3/5">
          <div className="text-gray-600 my-8 text-sm">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </div>
          <h1 className="text-[#4CAF4F] text-xl">Tim Smith</h1>
          <p className="text-sm text-gray-400 mt-8 mb-10">
            British Dragon Boat Racing Association
          </p>
          <Image
            src={`/customers.svg`}
            className="inline"
            alt=" "
            width={350}
            height={200}
          ></Image>
          <span className="inline text-lg text-[#4CAF4F] font-semibold px-8">
            Meet All Customers
            <Image
              src={`/Right.svg`}
              alt=""
              className="inline"
              width={25}
              height={10}
            ></Image>
          </span>
        </div>
      </div>
      <div className="w-full py-10">
        <h1 className="text-center w-1/3 mx-auto font-semibold text-3xl text-[#4D4D4D]">
          Caring is the new marketing
        </h1>
        <p className="text-center mx-auto my-4 text-sm text-gray-500 w-1/3">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
        <div className="flex mx-auto w-4/5 gap-20">
          <div className="w-full shadow shadow-md rounded-lg p-10">
            <Image
              src={`/Icon1.svg`}
              className="mx-auto"
              alt=" "
              width={65}
              height={56}
            ></Image>
            <h1 className="text-2xl text-[#4D4D4D] my-4 font-semibold text-center mx-auto">
              Membership Organisations
            </h1>
            <p className="text-center mx-auto text-sm text-gray-500">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="w-full shadow shadow-md rounded-lg p-10">
            <Image
              src={`/Icon2.svg`}
              className="mx-auto"
              alt=" "
              width={65}
              height={56}
            ></Image>
            <h1 className="text-2xl w-3/4 text-[#4D4D4D] my-4 font-semibold text-center mx-auto">
              National Associations
            </h1>
            <p className="text-center mx-auto text-sm text-gray-500">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="w-full shadow shadow-md rounded-lg p-10">
            <Image
              src={`/Icon3.svg`}
              className="mx-auto"
              alt=" "
              width={65}
              height={56}
            ></Image>
            <h1 className="text-2xl w-3/4 text-[#4D4D4D] my-4 font-semibold text-center mx-auto">
              Clubs And Groups
            </h1>
            <p className="text-center mx-auto text-sm text-gray-500">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F5F7FA] py-20">
        <h1 className="text-5xl w-2/5 mx-auto font-semibold text-center">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <center>
          <button className="bg-[#4CAF4F] mt-7 text-white px-7 py-3 mx-auto hover:bg-green-600 rounded-md">
            Get a Demo
          </button>
        </center>
      </div>
    </div>
  );
}
