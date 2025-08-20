'use client'

export default function LogoutClient() {
    async function handleLogout() {
        await fetch("/api/auth/logout", { method: "POST" });
        window.location.href = "/login";
    }
    return (
        <button onClick={handleLogout} style={{background: 'none', border: 'none', marginTop: 'auto', marginBottom: 30}}>
            <svg width="35" height="34" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.40039 7.55999C9.71039 3.95999 11.5604 2.48999 15.6104 2.48999H15.7404C20.2104 2.48999 22.0004 4.27999 22.0004 8.74999V15.27C22.0004 19.74 20.2104 21.53 15.7404 21.53H15.6104C11.5904 21.53 9.74039 20.08 9.41039 16.54" stroke="#AD2929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.5001 12H4.12012" stroke="#AD2929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.35 8.6499L3 11.9999L6.35 15.3499" stroke="#AD2929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    )
}