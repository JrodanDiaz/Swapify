export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      {children}
    </div>
  );
}
