import "./Spinner.css";

function Spinner() {
  return (
    <div className="fixed inset-0 z-[77777] flex justify-center items-center loading-overlay">
      <div className="w-12 h-12  border-4 border-t-transparent border-gray-200 rounded-full animate-spin modal-loading"></div>
    </div>
  );
}

export default Spinner;
