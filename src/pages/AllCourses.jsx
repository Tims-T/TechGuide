import { Mail, Video, MessageCircle, ShoppingCart, Phone, Globe, Wifi, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useEffect } from "react";
import DashboardNavbar from "../components/Navbar";

export default function AllCourses() {
    const navigate = useNavigate();
    const { session } = UserAuth();

    // Redirect to signin if not authenticated
    useEffect(() => {
        if (session === null) {
            navigate("/signin");
        }
    }, [session, navigate]);

    // Show loading or nothing while checking auth
    if (session === null) {
        return null;
    }

    const allCourses = [
        {
            id: 1,
            title: "Email Basics",
            icon: Mail,
            description: "Learn to send, receive, and organize emails",
            lessons: 8,
            duration: "2 hours",
            difficulty: "Beginner",
            color: "blue"
        },
        {
            id: 2,
            title: "Video Calls",
            icon: Video,
            description: "Master Zoom, Skype, and FaceTime",
            lessons: 6,
            duration: "1.5 hours",
            difficulty: "Beginner",
            color: "purple"
        },
        {
            id: 3,
            title: "Social Media",
            icon: MessageCircle,
            description: "Connect with family on Facebook & Instagram",
            lessons: 10,
            duration: "3 hours",
            difficulty: "Beginner",
            color: "pink"
        },
        {
            id: 4,
            title: "Online Shopping",
            icon: ShoppingCart,
            description: "Shop safely on Amazon, eBay, and more",
            lessons: 7,
            duration: "2 hours",
            difficulty: "Beginner",
            color: "emerald"
        },
        {
            id: 5,
            title: "Phone Basics",
            icon: Phone,
            description: "Master your smartphone's essential features",
            lessons: 9,
            duration: "2.5 hours",
            difficulty: "Beginner",
            color: "orange"
        },
        {
            id: 6,
            title: "Internet Browsing",
            icon: Globe,
            description: "Navigate the web safely and efficiently",
            lessons: 8,
            duration: "2 hours",
            difficulty: "Beginner",
            color: "indigo"
        },
        {
            id: 7,
            title: "WiFi & Connectivity",
            icon: Wifi,
            description: "Connect your devices to the internet",
            lessons: 5,
            duration: "1 hour",
            difficulty: "Beginner",
            color: "cyan"
        },
        {
            id: 8,
            title: "Online Safety",
            icon: Shield,
            description: "Protect yourself from scams and fraud",
            lessons: 12,
            duration: "3 hours",
            difficulty: "Intermediate",
            color: "red"
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-b from-orange-50 via-orange-50 to-white">
            <DashboardNavbar />

            <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 pb-20">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-3">
                        All Courses
                    </h1>
                    <p className="text-xl text-gray-600">
                        Explore all available technology tutorials
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allCourses.map((course) => {
                        const Icon = course.icon;
                        return (
                            <div
                                key={course.id}
                                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${course.color === 'blue' ? 'bg-blue-100' :
                                        course.color === 'purple' ? 'bg-purple-100' :
                                            course.color === 'pink' ? 'bg-pink-100' :
                                                course.color === 'emerald' ? 'bg-emerald-100' :
                                                    course.color === 'orange' ? 'bg-orange-100' :
                                                        course.color === 'indigo' ? 'bg-indigo-100' :
                                                            course.color === 'cyan' ? 'bg-cyan-100' :
                                                                'bg-red-100'
                                        }`}>
                                        <Icon className={`w-7 h-7 ${course.color === 'blue' ? 'text-blue-600' :
                                            course.color === 'purple' ? 'text-purple-600' :
                                                course.color === 'pink' ? 'text-pink-600' :
                                                    course.color === 'emerald' ? 'text-emerald-600' :
                                                        course.color === 'orange' ? 'text-orange-600' :
                                                            course.color === 'indigo' ? 'text-indigo-600' :
                                                                course.color === 'cyan' ? 'text-cyan-600' :
                                                                    'text-red-600'
                                            }`} />
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${course.difficulty === 'Beginner'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-amber-100 text-amber-700'
                                        }`}>
                                        {course.difficulty}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>

                                <div className="mt-auto">
                                    <div className="flex justify-between text-xs font-semibold text-gray-600 mb-4">
                                        <span>{course.lessons} lessons</span>
                                        <span>{course.duration}</span>
                                    </div>
                                    <button className="w-full py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                        View Course
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

