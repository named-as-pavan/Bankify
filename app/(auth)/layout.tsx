import Image from "next/image";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
  
    
    return (
      <main className="flex min-h-screen w-full font-inter justify-between">
          {children}
          <div className="auth-asset">
            <Image src={'/icons/auth-image.svg'} width={500} height={500} alt={'auth'}/>
          </div>
      </main>
    );
  }