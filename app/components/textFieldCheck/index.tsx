import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function TextfieldCheck({label, value, onChange, checked, onCheckChange, disabled}:TextfieldCheckProps) {



  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => onCheckChange(true)}
              color={checked === true ? "success" : "default"}
            >
              <CheckCircleIcon />
            </IconButton>

            <IconButton
              onClick={() => onCheckChange(false)}
              color={checked === false ? "error" : "default"}
            >
              <CancelIcon />
            </IconButton>
          </InputAdornment>
          )
        }}
    />
  );
}

export default TextfieldCheck;
