function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-customcolors-darkblue text-white">
      {children}
    </div>
  );
}

export default MainLayout;
