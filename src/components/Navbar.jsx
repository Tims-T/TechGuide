import { Monitor, LogOut, Bell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function DashboardNavbar() {
    const navigate = useNavigate();
    const { signOut } = UserAuth();

    const handleSignOut = async () => {
        const result = await signOut();
        if (result.success) {
            navigate("/");
        }
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <Monitor className="w-8 h-8 text-gray-900" />
                        <span className="text-xl font-bold text-gray-900">TECHGUIDE</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Bell className="w-6 h-6 text-gray-700" />
                            <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white">2</span>
                        </button>
                        <button
                            onClick={handleSignOut}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-semibold"
                        >
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

