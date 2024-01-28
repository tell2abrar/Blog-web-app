import SearchIcon from '@mui/icons-material/Search';
import { SearchBar } from 'styles';
import { ROUTES_PATH } from '../../../../constants';
import { useNavigate } from 'react-router-dom';
import { InputAdornment } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

export const HeaderSearchBar = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { isDirty },
    reset
  } = useForm({
    defaultValues: {
      search: ''
    }
  });

  const onFormSubmit = async (values: any) => {
    if (isDirty) {
      navigate(`${ROUTES_PATH.readBlogBySearch}/${values.search}`);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Controller
        control={control}
        name="search"
        render={({ field }) => (
          <SearchBar
            {...field}
            placeholder="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        )}
      />
    </form>
  );
};
