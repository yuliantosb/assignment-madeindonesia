import BottomNavbar from "@/components/layout/BottomNavbar";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import TopNavbar from "@/components/layout/TopNavbar";
import Viewer from "@/components/ui/Viewer";

export default function Page() {
  return (
    <main className="h-screen w-screen relative">
      <LeftSidebar />
      <TopNavbar />
      <RightSidebar />
      <BottomNavbar />
      <Viewer />
    </main>
  );
}
