export const Toast = () => {
  return (
    <div
      className="w-100 bg-gray-800 text-sm text-white shadow-lg"
      role="alert"
    >
      <div className="p-4 w-100 flex items-center justify-center">
        <p className="text-center w-100">
          Great Job! You have successfully run the caisy template. Click
          on&nbsp;
          <a
            href="/api/onboarding"
            className="font-semibold underline text-green-400"
          >
            this link
          </a>
          &nbsp;to complete the onboarding step. To get rid of this toast, just
          delete it in the code.
        </p>
      </div>
    </div>
  );
};
