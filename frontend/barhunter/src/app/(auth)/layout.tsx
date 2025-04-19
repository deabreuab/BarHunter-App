/* eslint-disable @typescript-eslint/no-explicit-any */
import withAuth from "../utils/withAuth";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-customcolors-darkblue text-white">
      {children}
    </div>
  );
}

export default withAuth(MainLayout as React.ComponentType<any>);
