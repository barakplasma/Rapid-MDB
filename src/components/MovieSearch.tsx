import { DebounceInput } from "react-debounce-input";

export const MovieSearchInput = () => <DebounceInput minLength={3} debounceTimeout={500} onChange={(event) => console.log(`searched for ${event.target.value}`)} />