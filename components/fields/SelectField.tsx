import { useForm, useController, UseControllerProps } from "react-hook-form";

type Option = {
  value: string;
  label: string;
};

interface Props extends UseControllerProps<any> {
  label: string;
  placeholder?: string;
  options: Option[];
  selectedOption?: string;
}

const SelectField = (props: Props) => {
  const { field, fieldState } = useController(props);

  return (
    <div className="w-full">
      <label htmlFor="" className="font-normal">
        {props.label}
      </label>
      <select
        defaultValue={props.selectedOption}
        {...field}
        className="w-full border border-[#D1D5DB] rounded-lg px-3 py-2"
      >
        {props.options.map((option: Option, i: number) => (
          <option
            key={i}
            value={option.value}
            selected={option.value == props.selectedOption ? true : false}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
