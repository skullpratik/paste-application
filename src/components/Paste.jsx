import { Calendar, Copy, Eye, PencilLine, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react"; // Import useState
import { removeFromPastes } from "../redux/pasteSlice";
import { FormatDate } from "../utlis/formatDate";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term

  const handleDelete = (id) => {
    dispatch(removeFromPastes(id));
  };

  // Filter pastes based on search term (by title or content)
  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-6">
        {/* Search */}
        <div className="w-full flex gap-3 px-4 py-2 neumorph mt-6">
          <input
            type="search"
            placeholder="Search paste here..."
            className="focus:outline-none w-full bg-transparent text-lg text-textMain"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* All Pastes */}
        <div className="flex flex-col py-4">
          <h2 className="px-4 text-4xl font-bold text-primary border-b border-bgDark/10 pb-4 mb-4">All Pastes</h2>
          <div className="w-full px-4 pt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPastes.length > 0 ? (
              filteredPastes.map((paste) => (
                <div
                  key={paste?._id}
                  className="glass-card transition-transform hover:scale-105 hover:shadow-xl flex flex-col justify-between p-6 min-h-[180px] relative animate-fade-in text-textMain"
                >
                  <div className="flex flex-col gap-2 mb-4">
                    <p className="text-2xl font-semibold text-primary truncate">{paste?.title}</p>
                    <p className="text-base font-normal text-textMain line-clamp-3 max-w-full">{paste?.content}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                      <button className="p-2 rounded bg-bgMain border border-primary hover:bg-primary hover:text-textLight transition" title="Edit">
                        <a href={`/?pasteId=${paste?._id}`}><PencilLine size={18} /></a>
                      </button>
                      <button className="p-2 rounded bg-bgMain border border-accent hover:bg-accent hover:text-textLight transition" onClick={() => handleDelete(paste?._id)} title="Delete">
                        <Trash2 size={18} />
                      </button>
                      <button className="p-2 rounded bg-bgMain border border-orange-400 hover:bg-orange-400 hover:text-textLight transition" title="View">
                        <a href={`/pastes/${paste?._id}`} target="_blank"><Eye size={18} /></a>
                      </button>
                      <button className="p-2 rounded bg-bgMain border border-green-400 hover:bg-green-400 hover:text-textLight transition" onClick={() => {navigator.clipboard.writeText(paste?.content);toast.success('Copied to Clipboard');}} title="Copy">
                        <Copy size={18} />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={16} />
                      {FormatDate(paste?.createdAt)}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-2xl text-center w-full text-accent">No Data Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paste;
