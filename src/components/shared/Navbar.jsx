"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, LogOut } from "lucide-react";
import Image from "next/image";
import { useAppContext } from "@/providers/AppContexts";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { data: session } = useSession();
  const { setIsOpen } = useAppContext();
  const user = session?.user;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-xl shadow-sm supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            Tech Zone
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/"
            className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
            Home
          </Link>
          <Link
            href="/products"
            className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
            All Products
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
            About
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <ThemeToggle />
          <button className="relative text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-primary text-[10px] font-bold text-primary-foreground w-4 h-4 flex items-center justify-center rounded-full shadow-md">
              0
            </span>
          </button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="w-10 h-10 rounded-full cursor-pointer ring-2 ring-primary/20 ring-offset-2 hover:ring-primary transition-all overflow-hidden">
                  <Image
                    src={user?.image}
                    width={100}
                    height={100}
                    alt="profile"
                    className="object-cover w-full h-full"
                  />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56 mt-2" align="end">
                <DropdownMenuLabel className="font-bold text-primary">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                  <Link href="/profile">
                    <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                      Profile
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link href="/dashboard">
                    <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                      Dashboard
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="cursor-pointer p-0 focus:bg-transparent">
                    <Button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="w-full bg-red-500 hover:bg-red-600 text-white h-9 mt-1">
                      <LogOut className="w-4 text-white h-4 mr-2" /> Logout
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button className="rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                Login
              </Button>
            </Link>
          )}

          <button
            onClick={() => {
              setIsOpen(true);
              toast.success("Log out successfully!");
            }}
            className="md:hidden text-muted-foreground hover:text-primary transition-colors p-1">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
