export default function SiteLogo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <img
      src="https://storage.googleapis.com/webild/users/user_3Jp0ni7xbICl0v5lu129KkYOYX9/uploaded-1790361053510-i2m7n1xz.png"
      alt="Rhône Alpes Services"
      className={`rounded-full object-cover border-2 border-[#B5121B] shadow-md ${className}`}
    />
  );
}
