const Button = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="btn btn-outline bg-slate-100 border-t-0 border-l-0 border-r-0 font-semibold shadow-[0_5px_#999] active:shadow-[0_3px_#666] active:translate-y-1 uppercase text-neutral">
        {text}
      </button>
    </div>
  );
};

export default Button;
