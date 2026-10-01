export default function Footer() {
  return (
    <footer className="relative text-[#E4CDAF]/50">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.25em] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Melati Puspa Anindita</p>
        </div>
      </div>
    </footer>
  );
}