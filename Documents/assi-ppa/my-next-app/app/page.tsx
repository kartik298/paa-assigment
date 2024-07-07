import FooterBig from "../Sections/FooterBig"
import Achivements from "@/Sections/Achivements";
import Calender from "@/Sections/Calender";
import Client from "@/Sections/Client";
import Updates from "@/Sections/Updates";
import Unlock from "@/Sections/Unlock";
import Navbar from "@/Sections/Navabar";
import Customer from "@/Sections/Customer";
import Community from "@/Sections/Community";
export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Client></Client>
    <Community></Community>
      <Unlock></Unlock>
      <Updates></Updates>
    <Achivements></Achivements>
    <Calender></Calender>
    <Customer></Customer>
    <FooterBig></FooterBig>
    </>
  );
}
