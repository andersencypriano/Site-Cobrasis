import Menu from "./Menu";

export default function Header() {
  return (
    <div className="w-full">
        <div className="container mx-auto flex justify-between items-center">
            <Menu />
        </div>
    </div>
  );
}