import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  console.log("Nav knows the location", location);
  return (
    <header class="flex justify-between items-center px-8 py-4 bg-black text-white">
      <div class="text-lg tracking-wide">INTERNET NATIVE COMPANY</div>
      <button class="bg-[#3D4E81] w-[240px] px-4 py-4 rounded text-white text-sm tracking-wide text-left">
        <div class="py-4">c</div>
        LOGIN
      </button>
    </header>
  );
}
