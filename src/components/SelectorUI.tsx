import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';

interface SelectorUIProps {
    cityInput: string;
    setCityInput: (value: string) => void;
}

export default function SelectorUI({ cityInput, setCityInput }: SelectorUIProps) {
    
    const handleChange = (event: SelectChangeEvent<string>) => {
        setCityInput(event.target.value); 
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="city-select-label">Ciudad</InputLabel>
            <Select
                labelId="city-select-label"
                id="city-simple-select"
                label="Ciudad"
                value={cityInput}
                onChange={handleChange}>
                <MenuItem disabled><em>Seleccione una ciudad</em></MenuItem>
                <MenuItem value={'guayaquil'}>Guayaquil</MenuItem>
                <MenuItem value={'quito'}>Quito</MenuItem>
                <MenuItem value={'manta'}>Manta</MenuItem>
                <MenuItem value={'cuenca'}>Cuenca</MenuItem>
            </Select>
        </FormControl>
    );
}