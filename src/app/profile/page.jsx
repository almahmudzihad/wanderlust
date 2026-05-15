"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

import Link from "next/link";

const ProfilePage = () => {
  // Dummy user (replace with your auth session)
  const { data: session } = authClient.useSession();
    const user = session?.user;
    


  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-4 py-16">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your account and travel activity
          </p>

        </div>
        {/* Profile Card */}
        <div className="bg-white border border-gray-100 shadow-lg rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">

          {/* Avatar */}
          <div className="relative w-32 h-32">
            <Avatar>
                <Avatar.Image alt={user.name} src={user?.image} />
                <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
            </Avatar>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left space-y-2">

            <h2 className="text-3xl font-bold text-gray-800">
              {user?.name}
            </h2>

            <p className="text-gray-500">{user?.email}</p>

            

            

          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 w-full md:w-auto">

            <Link
              href="/my-bookings"
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-center px-6 py-2 rounded-xl transition"
            >
              My Bookings
            </Link>

            <Link
              href="#"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-center px-6 py-2 rounded-xl transition"
            >
              Edit Profile
            </Link>

          </div>

        </div>

        {/* Stats Cards */}
       
        

      </div>
    </section>
  );
};

export default ProfilePage;