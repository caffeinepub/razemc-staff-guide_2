import { Menu, Search, Upload, User, X } from "lucide-react";
import { useRef } from "react";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onMenuToggle: () => void;
  sidebarOpen: boolean;
  logoSrc: string | null;
  onLogoUpload: (src: string) => void;
}

export default function Navbar({
  searchQuery,
  onSearchChange,
  onMenuToggle,
  sidebarOpen,
  logoSrc,
  onLogoUpload,
}: NavbarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      if (result) onLogoUpload(result);
    };
    reader.readAsDataURL(file);
    // reset input so same file can be re-uploaded
    e.target.value = "";
  };

  const defaultLogo =
    "/assets/uploads/ChatGPT-Image-Mar-10-2026-12_18_46-AM-1-1.png";

  return (
    <header
      className="sticky top-0 z-50 flex items-center px-4 gap-3"
      style={{
        height: "60px",
        background: "rgba(11, 11, 16, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(229, 57, 53, 0.2)",
        boxShadow: "0 1px 0 rgba(229, 57, 53, 0.1), 0 4px 20px rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          data-ocid="sidebar.toggle"
          onClick={onMenuToggle}
          className="md:hidden p-1.5 rounded-lg hover:bg-white/5 transition-colors"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Logo container with upload overlay */}
        <div className="relative group">
          <div
            className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center"
            style={{
              background: "rgba(229,57,53,0.15)",
              border: "1px solid rgba(229,57,53,0.3)",
            }}
          >
            <img
              src={logoSrc || defaultLogo}
              alt="RazeMC"
              className="w-full h-full object-contain"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.style.display = "none";
                const parent = img.parentElement;
                if (parent) {
                  parent.innerHTML =
                    '<span style="color:#e53935;font-weight:900;font-size:14px;font-family:Outfit,sans-serif">R</span>';
                }
              }}
            />
          </div>
          {/* Upload overlay on hover */}
          <button
            type="button"
            data-ocid="logo.upload_button"
            title="Upload custom logo"
            onClick={() => fileInputRef.current?.click()}
            className="absolute inset-0 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            style={{
              background: "rgba(11,11,16,0.75)",
              border: "1px solid rgba(229,57,53,0.6)",
            }}
          >
            <Upload size={12} color="#e53935" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <span
          className="font-outfit font-bold text-base hidden sm:block"
          style={{ color: "#f0f0f8", letterSpacing: "-0.01em" }}
        >
          <span style={{ color: "#e53935" }}>Raze</span>MC{" "}
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontWeight: 400,
              fontSize: "0.85em",
            }}
          >
            Staff Guide
          </span>
        </span>
      </div>

      <div className="flex-1 max-w-md mx-auto">
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: "rgba(255,255,255,0.35)" }}
          />
          <input
            data-ocid="navbar.search_input"
            type="text"
            placeholder="Search rules, commands, guides..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-lg text-sm outline-none transition-all"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(229, 57, 53, 0.15)",
              color: "#f0f0f8",
              fontSize: "13px",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(229, 57, 53, 0.5)";
              e.currentTarget.style.boxShadow =
                "0 0 0 2px rgba(229, 57, 53, 0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(229, 57, 53, 0.15)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #e53935, #b71c1c)",
            boxShadow: "0 0 12px rgba(229, 57, 53, 0.4)",
          }}
        >
          <User size={16} color="white" />
        </div>
      </div>
    </header>
  );
}
