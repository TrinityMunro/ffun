import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Form from "./Form";
import { Vehicle } from "../types";
import { useDocument } from "@nandorojo/swr-firestore";

interface Props {
  open?: boolean;
  setOpen(open: boolean): void;
  formDataOverride?: Partial<Vehicle>;
  add: any;
}
export default function Modal({ open, setOpen, formDataOverride, add }: Props) {
  const [formValues, setFormValues] = useState<Partial<Vehicle>>({
    make: "",
    model: "",
    year: "",
    price: "",
    status: "Sold",
  });

  useEffect(
    () =>
      setFormValues({
        make: "",
        model: "",
        year: "",
        price: "",
        status: "Sold",
        ...formDataOverride,
      }),
    [formDataOverride]
  );
  const { update } = useDocument(
    formValues.id ? `Vehicles/${formValues.id}` : null
  );
  const [loading, setLoading] = useState(false);

  async function onSubmit() {
    setLoading(true);
    if (!formValues.id) {
      await add(formValues);
    } else {
      await update({
        make: formValues.make,
        model: formValues.model,
        price: formValues.price,
        year: formValues.year,
        status: formValues.status,
      });
    }
    setLoading(false);
    setOpen(false);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <Form formValues={formValues} setFormValues={setFormValues} />
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
                  onClick={() => onSubmit()}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
