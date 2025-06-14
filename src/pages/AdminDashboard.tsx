import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Users,
    MapPin,
    Trophy,
    DollarSign,
    Shield,
    AlertTriangle,
    TrendingUp,
    Bell,
    Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { ChatComponent } from "@/components/ui/chat-component";
import { NotificationsComponent } from "@/components/ui/notifications";
import { SettingsComponent } from "@/components/ui/settings";
import { AdminOverview } from "@/components/ui/dashboard-pages/admin-overview";
import { PaymentsPage } from "@/components/ui/dashboard-pages/payments-page";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState("overview");
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab) {
            setActiveTab(tab);
        }
    }, [searchParams]);

    const platformStats = [
        {
            label: "Total Users",
            value: "12,458",
            icon: Users,
            change: "+245 this month",
            color: "from-blue-500 to-purple-600",
        },
        {
            label: "Active Turfs",
            value: "156",
            icon: MapPin,
            change: "+12 verified",
            color: "from-emerald-500 to-teal-600",
        },
        {
            label: "Tournaments",
            value: "89",
            icon: Trophy,
            change: "24 ongoing",
            color: "from-yellow-500 to-orange-600",
        },
        {
            label: "Platform Revenue",
            value: "৳2.4M",
            icon: DollarSign,
            change: "+18% this month",
            color: "from-purple-500 to-pink-600",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50/30 via-blue-50/20 to-purple-50/30 flex">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-200/15 to-purple-200/15 rounded-full opacity-60 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-emerald-200/15 to-teal-200/15 rounded-full opacity-60 blur-3xl animate-pulse delay-1000"></div>
            </div>

            <AppSidebar
                userRole="admin"
                userName="System Admin"
                userAvatar="AD"
                onChatOpen={() => setIsChatOpen(true)}
                onNotificationsOpen={() => setIsNotificationsOpen(true)}
                onSettingsOpen={() => setIsSettingsOpen(true)}
            />

            <div className="flex-1 overflow-auto relative">
                <div className="sticky top-0 z-40 backdrop-blur-2xl bg-white/30 border-b border-white/40 shadow-2xl">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Admin Dashboard
                                </h1>
                                <p className="text-gray-600">
                                    Monitor platform performance and manage the
                                    TurfX ecosystem 🛡️
                                </p>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <Input
                                        placeholder="Search users, turfs..."
                                        className="pl-10 w-64 rounded-2xl border-white/30 bg-white/40 backdrop-blur-md placeholder:text-gray-500"
                                    />
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/40"
                                    onClick={() => setIsNotificationsOpen(true)}
                                >
                                    <Bell className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                    >
                        {platformStats.map((stat, index) => (
                            <Card
                                key={stat.label}
                                className="backdrop-blur-2xl bg-white/40 border border-white/30 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div
                                            className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300`}
                                        >
                                            <stat.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-800 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 text-sm mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-xs text-emerald-600">
                                        {stat.change}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </motion.div>

                    <Card className="backdrop-blur-2xl bg-white/30 border border-white/30 rounded-3xl shadow-2xl">
                        <CardContent className="p-8">
                            <Tabs
                                value={activeTab}
                                onValueChange={setActiveTab}
                            >
                                <TabsList className="grid w-full grid-cols-6 bg-white/40 backdrop-blur-sm rounded-2xl p-1 mb-8 shadow-lg border border-white/20">
                                    <TabsTrigger
                                        value="overview"
                                        className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-700 transition-all duration-300"
                                    >
                                        Overview
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="approvals"
                                        className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-700 transition-all duration-300"
                                    >
                                        Approvals
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="users"
                                        className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-700 transition-all duration-300"
                                    >
                                        Users & Turfs
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="analytics"
                                        className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-700 transition-all duration-300"
                                    >
                                        Analytics
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="reports"
                                        className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-700 transition-all duration-300"
                                    >
                                        Reports
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="revenue"
                                        className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-blue-700 transition-all duration-300"
                                    >
                                        Revenue
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent
                                    value="overview"
                                    className="space-y-6"
                                >
                                    <AdminOverview />
                                </TabsContent>

                                <TabsContent
                                    value="approvals"
                                    className="space-y-6"
                                >
                                    <div className="text-center py-16">
                                        <Shield className="w-20 h-20 mx-auto mb-6 text-gray-400" />
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                            Pending Approvals
                                        </h3>
                                        <p className="text-gray-600 text-lg">
                                            Review and approve platform
                                            submissions
                                        </p>
                                    </div>
                                </TabsContent>

                                <TabsContent
                                    value="users"
                                    className="space-y-6"
                                >
                                    <div className="text-center py-16">
                                        <Users className="w-20 h-20 mx-auto mb-6 text-gray-400" />
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                            User & Turf Management
                                        </h3>
                                        <p className="text-gray-600 text-lg">
                                            Manage users, turfs, and platform
                                            entities
                                        </p>
                                    </div>
                                </TabsContent>

                                <TabsContent
                                    value="analytics"
                                    className="space-y-6"
                                >
                                    <div className="text-center py-16">
                                        <TrendingUp className="w-20 h-20 mx-auto mb-6 text-gray-400" />
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                            Platform Analytics
                                        </h3>
                                        <p className="text-gray-600 text-lg">
                                            Detailed insights and performance
                                            metrics
                                        </p>
                                    </div>
                                </TabsContent>

                                <TabsContent
                                    value="reports"
                                    className="space-y-6"
                                >
                                    <div className="text-center py-16">
                                        <AlertTriangle className="w-20 h-20 mx-auto mb-6 text-gray-400" />
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                            Reports & Issues
                                        </h3>
                                        <p className="text-gray-600 text-lg">
                                            Handle user reports and platform
                                            issues
                                        </p>
                                    </div>
                                </TabsContent>

                                <TabsContent
                                    value="revenue"
                                    className="space-y-6"
                                >
                                    <PaymentsPage />
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <ChatComponent
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
            />
            <NotificationsComponent
                isOpen={isNotificationsOpen}
                onClose={() => setIsNotificationsOpen(false)}
            />
            <SettingsComponent
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
            />
        </div>
    );
};

export default AdminDashboard;
