import { OutputFieldProps } from "../OutputField";
import ReactJson from "react-json-view";

function JSONOutput({ field, value, isLoading = false }: OutputFieldProps) {
  return (
    <div
      className={`border border-gray-300 rounded-md ${
        isLoading ? "animate-pulse" : ""
      }`}
    >
      {value ? (
        <ReactJson
          src={typeof value === "string" ? JSON.parse(value) : value}
          displayDataTypes={false}
          enableClipboard={false}
          style={{
            padding: "12px",
            borderRadius: "0.375rem",
            maxHeight: "250px",
            overflow: "auto",
          }}
        />
      ) : (
        <span className="text-gray-400">{field.placeholder}</span>
      )}
    </div>
  );
}

export default JSONOutput;
