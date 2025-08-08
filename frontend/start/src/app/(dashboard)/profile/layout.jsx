import Header from "./_components/Header";
import SideBarNavs from "./_components/SideBarNavs";

export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};

export default function RootLayout({ children }) {
  return (
    <div className="bg-secondary-0">
      <div className="grid grid-cols-12 grid-rows-[auto_1fr] h-screen">
        <aside className="hidden lg:flex col-span-3 xl:col-span-2 row-span-2 p-3 items-center">
          <SideBarNavs />
        </aside>
        <div className="grid-cols-12 lg:col-span-9 xl:col-span-10 row-span-1">
          <Header />
        </div>
        <main className="grid-cols-12 lg:col-span-9 xl:col-span-10 bg-secondary-100 rounded-tr-3xl p-4 md:p-6 overflow-y-auto">
          <div className="xl:max-w-screen-xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
