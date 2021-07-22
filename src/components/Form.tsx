import { Omit, Vehicle } from "../types";

interface Props {
  formValues: Omit<Vehicle, "id">;
  setFormValues(values: Omit<Vehicle, "id">): void;
}
export default function Form({ formValues, setFormValues }: Props) {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="px-4 py-5 bg-white sm:p-6">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="make"
              className="block text-sm font-medium text-gray-700"
            >
              Make
            </label>
            <input
              value={formValues.make}
              onChange={(e) =>
                setFormValues({ ...formValues, make: e.target.value })
              }
              type="text"
              name="make"
              id="make"
              className="mt-1 p-1.5 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="model"
              className="block text-sm font-medium text-gray-700"
            >
              Model
            </label>
            <input
              value={formValues.model}
              onChange={(e) =>
                setFormValues({ ...formValues, model: e.target.value })
              }
              type="text"
              name="model"
              id="model"
              className="mt-1 p-1.5 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-700"
            >
              Year
            </label>
            <input
              value={formValues.year}
              onChange={(e) =>
                setFormValues({ ...formValues, year: e.target.value })
              }
              type="text"
              name="year"
              id="year"
              className="mt-1 p-1.5 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              value={formValues.price}
              onChange={(e) =>
                setFormValues({ ...formValues, price: e.target.value })
              }
              type="text"
              name="price"
              id="price"
              className="mt-1 p-1.5 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              value={formValues.status}
              onChange={(e) =>
                setFormValues({ ...formValues, status: e.target.value })
              }
              id="country"
              name="country"
              autoComplete="country"
              className="mt-1  block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            >
              <option value="Sold">Sold</option>
              <option value="Live">Live</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
