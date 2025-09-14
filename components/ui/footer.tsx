import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="text-center">
            <div className="mb-4">
              <Logo />
            </div>
            <div className="text-sm text-slate-300">
              © c0re.com — All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
