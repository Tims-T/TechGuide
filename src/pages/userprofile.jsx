import {
    User, Mail, Calendar, Award, BookOpen, Clock, TrendingUp,
    Target, Star, CheckCircle, Edit, Camera, Sparkles, Trophy,
    Activity, BarChart3
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function UserProfile() {
    const navigate = useNavigate();
    const { session, getUserData } = UserAuth();
    const [userData, setUserData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Redirect to signin if not authenticated
    useEffect(() => {
        if (session === null) {
            navigate("/signin");
        } else if (session?.user) {
            getUserData().then((res) => {
                if (res.success) {
                    setUserData(res.data);
                }
            });
        }
    }, [session, navigate]);

    // Show loading while checking auth
    if (session === null) {
        return null;
    }

    // Mock data for profile stats
    const profileStats = {
        coursesCompleted: 3,
        hoursSpent: 24,
        currentStreak: 5,
        totalPoints: 1250,
        joinDate: "January 2024",
        rank: "Silver Learner"
    };

    const achievements = [
        {
            id: 1,
            title: "First Steps",
            description: "Completed your first lesson",
            icon: Star,
            earned: true,
            color: "amber"
        },
        {
            id: 2,
            title: "Email Master",
            description: "Completed Email Basics course",
            icon: Trophy,
            earned: true,
            color: "blue"
        },
        {
            id: 3,
            title: "5-Day Streak",
            description: "Learn for 5 days in a row",
            icon: Sparkles,
            earned: true,
            color: "purple"
        },
        {
            id: 4,
            title: "Social Butterfly",
            description: "Complete Social Media course",
            icon: Award,
            earned: false,
            color: "gray"
        }
    ];

    const activeCourses = [
        {
            id: 1,
            title: "Video Calls Mastery",
            progress: 30,
            lessons: 6,
            lastAccessed: "2 hours ago"
        },
        {
            id: 2,
            title: "Social Media Basics",
            progress: 15,
            lessons: 10,
            lastAccessed: "Yesterday"
        }
    ];

    const learningStats = [
        {
            label: "Total Lessons",
            value: "42",
            icon: BookOpen,
            color: "blue"
        },
        {
            label: "Hours Learned",
            value: profileStats.hoursSpent,
            icon: Clock,
            color: "purple"
        },
        {
            label: "Current Streak",
            value: `${profileStats.currentStreak} days`,
            icon: TrendingUp,
            color: "emerald"
        },
        {
            label: "Total Points",
            value: profileStats.totalPoints,
            icon: Target,
            color: "orange"
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-b from-orange-50 via-orange-50 to-white">
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 lg:px-8 py-12 pb-20">
                {/* Profile Header */}
                <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-orange-100 to-purple-100 rounded-full blur-3xl opacity-30 z-0"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                            {/* Avatar */}
                            <div className="relative group">
                                <div className="w-32 h-32 bg-linear-to-br from-orange-400 to-purple-500 rounded-full flex items-center justify-center text-white text-5xl font-black shadow-xl">
                                    {userData?.first_name?.[0]?.toUpperCase() || 'U'}
                                </div>
                                <button className="absolute bottom-0 right-0 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg opacity-0 group-hover:opacity-100">
                                    <Camera className="w-5 h-5" />
                                </button>
                            </div>

                            {/* User Info */}
                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                                            {userData?.first_name && userData?.last_name
                                                ? `${userData.first_name} ${userData.last_name}`
                                                : 'User'}
                                        </h1>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Mail className="w-5 h-5 text-gray-600" />
                                            <span className="text-gray-600 font-medium">{userData?.email || 'email@example.com'}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-5 h-5 text-gray-600" />
                                            <span className="text-gray-600 font-medium">Joined {profileStats.joinDate}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => navigate('/settings')}
                                        className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
                                    >
                                        <Edit className="w-5 h-5" />
                                        Edit Profile
                                    </button>
                                </div>

                                {/* Rank Badge */}
                                <div className="inline-flex items-center gap-2 px-5 py-2 bg-linear-to-r from-gray-700 to-gray-900 text-white rounded-full font-bold text-sm shadow-lg">
                                    <Trophy className="w-5 h-5" />
                                    {profileStats.rank}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Learning Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {learningStats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white rounded-3xl shadow-sm p-6 hover:shadow-lg transition-shadow">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${stat.color === 'blue' ? 'bg-blue-100' :
                                    stat.color === 'purple' ? 'bg-purple-100' :
                                        stat.color === 'emerald' ? 'bg-emerald-100' :
                                            'bg-orange-100'
                                    }`}>
                                    <Icon className={`w-6 h-6 ${stat.color === 'blue' ? 'text-blue-600' :
                                        stat.color === 'purple' ? 'text-purple-600' :
                                            stat.color === 'emerald' ? 'text-emerald-600' :
                                                'text-orange-600'
                                        }`} />
                                </div>
                                <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Active Courses */}
                        <div className="bg-white rounded-3xl shadow-sm p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                    <BookOpen className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Active Courses</h2>
                            </div>

                            <div className="space-y-4">
                                {activeCourses.map((course) => (
                                    <div key={course.id} className="p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                                            <span className="text-sm font-semibold text-gray-600">{course.lastAccessed}</span>
                                        </div>

                                        <div className="mb-3">
                                            <div className="flex justify-between text-xs font-semibold mb-2">
                                                <span className="text-gray-600">{course.lessons} lessons</span>
                                                <span className="text-gray-900">{course.progress}% Complete</span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-500"
                                                    style={{ width: `${course.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        <button className="px-4 py-2 bg-gray-900 text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors">
                                            Continue Learning
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Learning Progress Chart */}
                        <div className="bg-white rounded-3xl shadow-sm p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                                    <BarChart3 className="w-6 h-6 text-purple-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Learning Activity</h2>
                            </div>

                            <div className="space-y-4">
                                {/* Weekly Activity Bars */}
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                                    const height = [60, 80, 45, 90, 75, 30, 85][index];
                                    const isToday = index === 4;
                                    return (
                                        <div key={day} className="flex items-center gap-4">
                                            <span className={`text-sm font-semibold w-12 ${isToday ? 'text-purple-600' : 'text-gray-600'}`}>
                                                {day}
                                            </span>
                                            <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${isToday ? 'bg-purple-500' : 'bg-gray-300'}`}
                                                    style={{ width: `${height}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-900 w-12 text-right">
                                                {Math.round(height / 20)} hr
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Achievements */}
                        <div className="bg-white rounded-3xl shadow-sm p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                                    <Award className="w-6 h-6 text-amber-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
                            </div>

                            <div className="space-y-3">
                                {achievements.map((achievement) => {
                                    const Icon = achievement.icon;
                                    return (
                                        <div
                                            key={achievement.id}
                                            className={`p-4 rounded-2xl border-2 transition-all ${achievement.earned
                                                ? 'bg-linear-to-br from-amber-50 to-orange-50 border-amber-200'
                                                : 'bg-gray-50 border-gray-200 opacity-50'
                                                }`}
                                        >
                                            <div className="flex gap-3">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${achievement.earned
                                                    ? `${achievement.color === 'amber' ? 'bg-amber-200' :
                                                        achievement.color === 'blue' ? 'bg-blue-200' :
                                                            achievement.color === 'purple' ? 'bg-purple-200' :
                                                                'bg-gray-200'}`
                                                    : 'bg-gray-200'
                                                    }`}>
                                                    <Icon className={`w-6 h-6 ${achievement.earned
                                                        ? `${achievement.color === 'amber' ? 'text-amber-600' :
                                                            achievement.color === 'blue' ? 'text-blue-600' :
                                                                achievement.color === 'purple' ? 'text-purple-600' :
                                                                    'text-gray-600'}`
                                                        : 'text-gray-400'
                                                        }`} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 mb-1">{achievement.title}</h3>
                                                    <p className="text-xs text-gray-600">{achievement.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Learning Goal */}
                        <div className="bg-linear-to-br from-emerald-500 to-teal-500 rounded-3xl shadow-lg p-8 text-white">
                            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Daily Goal</h3>
                            <p className="text-emerald-100 mb-4">Keep up your learning streak!</p>
                            <div className="bg-white/20 rounded-full h-3 overflow-hidden mb-2">
                                <div className="bg-white h-full rounded-full" style={{ width: '80%' }}></div>
                            </div>
                            <p className="text-sm font-semibold text-emerald-50">4 of 5 lessons completed today</p>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-3xl shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="space-y-2">
                                <button
                                    onClick={() => navigate('/allcourses')}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900">Browse Courses</span>
                                    <BookOpen className="w-5 h-5 text-gray-400" />
                                </button>
                                <button
                                    onClick={() => navigate('/settings')}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900">Settings</span>
                                    <User className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

