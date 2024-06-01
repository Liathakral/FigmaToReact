'use client'
import { useRouter } from 'next/navigation';

interface ButtonProps {
  bg?: boolean;
  name: string;
  buttonpurpose?:String;
}

const CustomButton: React.FC<ButtonProps> = ({buttonpurpose, bg, name }) => {
  const router = useRouter();

  const handleClick = () => {
    if (name === "Create an account") {
      router.push("/signup");
    } else if (name === "Send Email") {
      router.push("/registeration");
    }
  };

  return (
 
    <button
      type="button"
      onClick={handleClick}
      className={`${
        bg ? "bg-[#FDDE69]" : "border border-black"
      } text-black mb-2 text-xs font-bold rounded-xl w-full py-4`}
    >
      {name}
    </button>
    
  );
};

export default CustomButton;
