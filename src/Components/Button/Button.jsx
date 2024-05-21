const Button = ({ text }) => {
  return (
    <div>
      <button className="btn btn-outline border-t-0 border-l-0 border-r-0 font-semibold shadow-[0_5px_#999] active:shadow-[0_3px_#666] active:translate-y-1 uppercase text-neutral-content">
        {text}
      </button>
    </div>
  );
};

export default Button;
