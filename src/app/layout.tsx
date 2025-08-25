
import "./globals.css";

import React, { ReactNode } from "react";

import SidebarLayout from "@/components/sidebarLayout/SidebarLayout";



interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        
        <SidebarLayout>
          {children} 
        </SidebarLayout>
      </body>
    </html>
  );
}
