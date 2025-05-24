import Footer from '../Footer';
import Header from '../Header';

export default function ContainerMain({ children }) {
  return (
    <div className="min-h-screen w-full bg-color-secondary-light text-gray-900 dark:text-gray-100 flex flex-col ">
      <Header />
      <main className="w-full mx-auto flex-grow flex flex-col items-center justify-center gap-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}