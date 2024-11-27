import useWeb3 from "@/hooks/useWeb3";
import { FormEvent, useEffect } from "react";
import { Link, useNavigate, useFetcher } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const fetcher = useFetcher();
  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.target as HTMLFormElement);
    const name = formData.get("companyName") as string;
    console.log(name);
    navigate(`/search?q=${name}`);
  }

  const { connection, program } = useWeb3();
  const getSlot = async () => {
    let slot = await connection.getSlot();

    console.log("Slot", slot);
  };
  useEffect(() => {
    getSlot();
  }, []);
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-8 px-8">
        {/* Stats Section */}
        <div className="flex justify-end px-8 py-4 space-x-12 text-sm">
          <div>
            <div className="text-gray-500 mb-1">COMPANIES</div>
            <div className="text-gray-500 mb-1">TRANSACTIONS</div>
            <div className="text-gray-500 mb-1">MARKET CAP</div>
            <div className="text-gray-500 mb-1">STATUS</div>
          </div>
          <div>
            <div className="mb-1">324</div>
            <div className="mb-1">32M</div>
            <div className="mb-1">$123.78B</div>
            <div className="mb-1">ACTIVE</div>
          </div>
        </div>

        <h1 className="text-4xl font-normal mb-12 mt-32 text-center ">
          Set up your Internet-Native Company
        </h1>

        {/* Registration Form */}

        <fetcher.Form
          method="post"
          onSubmit={onSubmit}
          className="flex gap-4 mb-32"
        >
          <input
            type="text"
            placeholder="Type the company name you want"
            className="flex-1 bg-gray-100 rounded px-4 py-4 text-gray-800 placeholder-gray-400"
            name="companyName"
            // disabled={fetcher.state !== "idle"}
          />
          <Link to={`/search?q=paolo`}>
            <button
              className="bg-[#3D4E81] px-8 py-2 rounded text-white"
              type="submit"
              // disabled={fetcher.state !== "idle"}
            >
              REGISTER
            </button>
          </Link>
        </fetcher.Form>

        {/* Content Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Tabs */}
          <div className="flex gap-12 mb-8">
            {["WHAT IS IT", "WHO IS FOR", "TECH", "LEGAL", "WHITEPAPER"].map(
              (tab) => (
                <button
                  key={tab}
                  className="text-sm tracking-wide hover:text-blue-600 transition-colors"
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-600">
            <p>
              Businesses are inherently global and shouldn&apos;t be restricted
              by national borders. Traditional, jurisdiction-bound models can
              hinder their ability to operate seamlessly worldwide. A
              jurisdiction-less, internet-native company structure offers a
              platform that aligns with the borderless nature of modern digital
              enterprises.
            </p>
            <p>
              INC embodies this concept by registering companies on the Solana
              blockchain, effectively existing within the Internet itself. It
              provides essential business services permissionlessly: a
              registered company name, a wallet serving as a bank account, a
              payment system, and a governance system. This allows businesses to
              operate globally without relying on traditional legal and
              financial frameworks.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
