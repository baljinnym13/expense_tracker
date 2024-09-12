export const CategoryModal = ({ categoryOpen, close }) => {
  return (
    <dialog open={categoryOpen} className="modal">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={close}
          >
            ✕
          </button>
          <div className="flex ">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="category name"
                className="grow max-w-xs input input-bordered input-primary"
              />
            </div>

            <select className=" select select-bordered ">
              <option disabled selected>
                Normal
              </option>
              <option>
                <div className="bg-green-400 w-[24px] h-[24px]">
                  <img
                    className="w-[20px] h-[20px]"
                    src="/categorImg/ForkKnife.png"
                    alt=""
                  />
                </div>
              </option>
              <option>fsdfds</option>
              <option>Normal Tomato</option>
            </select>
          </div>
          <div className="mt-3">
            <form method="dialog">
              <button className="btn">Add Category</button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};
