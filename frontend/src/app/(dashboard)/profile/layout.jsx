import SideBar from "./_components/SideBar";
import Header from "./_components/Header";

export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="contain">
        <div className="flex h-screen p-4 gap-x-4">
          <div className={`hidden w-[340px] transition-all md:block`}>
            <SideBar />
          </div>
          <div className="w-full overflow-y-auto">
            <div>{children}</div>
          </div>
        </div>
        {/* <NavigationBar /> */}
      </div>
    </>
  );
}
