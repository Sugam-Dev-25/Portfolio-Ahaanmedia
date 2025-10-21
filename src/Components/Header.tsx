export default function Header() {
  return (
    <div className="fixed top-[15px] left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-[30px] w-auto rounded-full mr-3"
        />
        <span className="text-base font-semibold whitespace-nowrap uppercase">
          ASC UI/UX Portfolio
        </span>
      </div>
    </div>
  );
}
