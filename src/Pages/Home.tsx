import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { services, values } from "../data/content";
import SplitGateway from "../components/SplitGateway";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070B14]">
      {/* HERO / GATEWAY */}
      <SplitGateway />
    </div>
  );
}