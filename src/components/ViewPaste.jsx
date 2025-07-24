import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();

  console.log(id)

  const pastes = useSelector((state) => state.paste.pastes);

  // Filter pastes based on search term (by title or content)
  const paste = pastes.filter((paste) => paste._id === id)[0];

  console.log("Paste->",paste);
  return (
    <div className="w-full h-full py-10 max-w-[900px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-8 items-start">
        <input
          type="text"
          placeholder="Title"
          value={paste.title}
          disabled
          className="w-full neumorph text-black border-none outline-none p-3 text-lg mb-2"
        />
        <div className="w-full flex flex-col items-start relative glass-card animate-fade-in">
          <div className="w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-white/10">
            <div className="w-full flex gap-x-[6px] items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full bg-red-400" />
              <div className="w-[13px] h-[13px] rounded-full bg-yellow-300" />
              <div className="w-[13px] h-[13px] rounded-full bg-green-400" />
            </div>
            <div className="w-fit flex items-center gap-x-2 px-2">
              <button
                className="flex justify-center items-center group hover:scale-110 transition"
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied to Clipboard");
                }}
              >
                <Copy className="group-hover:text-accent" size={20} />
              </button>
            </div>
          </div>
          <textarea
            value={paste.content}
            disabled
            placeholder="Write Your Content Here...."
            className="w-full p-4 bg-transparent text-black text-lg outline-none resize-none min-h-[300px] focus:ring-0"
            style={{ caretColor: "#6366f1" }}
            rows={16}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
