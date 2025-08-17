// import Sidebar from "@/widget/Admin/Sidebar";
// import AdminHeader from "@/widget/Admin/AdminHeader";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-layout">
            {/* <Sidebar /> */}
            <div className="admin-content">
                {/* <AdminHeader /> */}
                <main>{children}</main>
            </div>
        </div>
    );
}
