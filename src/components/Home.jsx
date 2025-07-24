import { Copy, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updatePastes } from "../redux/pasteSlice";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams(); // Destructure useSearchParams
  const pasteId = searchParams.get("pasteId"); // Get pasteId from the search params
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id:
        pasteId ||
        Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // If pasteId is present, update the paste
      dispatch(updatePastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");

    // Remove the pasteId from the URL after creating/updating a paste
    setSearchParams({});
  };

  const resetPaste = () => {
    setTitle("");
    setValue("");
    setSearchParams({});
    // navigate("/");
  };

  useEffect(() => {
    if (pasteId) {
      const paste = pastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, pastes]);


  return (
    <div className="w-full h-full py-10 max-w-[900px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-8 items-start">
        <div className="w-full flex flex-row gap-x-4 justify-between items-center">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${pasteId ? "w-[80%]" : "w-[85%]"} neumorph text-textMain border-none outline-none p-3 text-lg transition-all duration-200 focus:ring-2 focus:ring-primary`}
          />
          <button
            className="bg-primary hover:bg-accent text-textLight font-bold rounded-lg px-6 py-2 shadow-glass transition-all duration-200 focus:ring-4 focus:ring-accent/40"
            onClick={createPaste}
          >
            {pasteId ? "Update Paste" : "Create My Paste"}
          </button>
          {pasteId &&  <button
            className="bg-accent hover:bg-primary text-textLight font-bold rounded-lg px-4 py-2 shadow-glass transition-all duration-200"
            onClick={resetPaste}
          >
            <PlusCircle size={20} />
          </button>}
        </div>
        <div className="w-full flex flex-col items-start relative glass-card animate-fade-in">
          <div className="w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-bgDark/10">
            <div className="w-full flex gap-x-[6px] items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full bg-red-400" />
              <div className="w-[13px] h-[13px] rounded-full bg-yellow-300" />
              <div className="w-[13px] h-[13px] rounded-full bg-green-400" />
            </div>
            <div className="w-fit flex items-center gap-x-2 px-2">
              <button
                className="flex justify-center items-center group hover:scale-110 transition text-textMain"
                onClick={() => {
                  navigator.clipboard.writeText(value);
                  toast.success("Copied to Clipboard", { position: "top-right" });
                }}
              >
                <Copy className="group-hover:text-accent" size={20} />
              </button>
            </div>
          </div>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write Your Content Here...."
            className="w-full p-4 bg-transparent text-textMain text-lg outline-none resize-none min-h-[300px] focus:ring-0"
            style={{ caretColor: "#2563eb" }}
            rows={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
