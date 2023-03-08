import React, { useState, useCallback } from 'react';
import { Box, Typography } from '../../materials';
import { SearchInput } from '../../materials/search-input/search-input';
import { IconButton } from '../../materials/icon-button/icon-button';
import { SpotList } from '../../components/spot-list/spot-list';
import { useTheme, useMediaQuery } from '../../hooks';
import { styles } from './spot-exploreur-styles';
import { PageLayout } from '../../layout';
import { type FormValues } from '../../components/spot-filter-form';
import { useLazyQuery } from '@apollo/client';
import { READ_SPOT_QUERY } from '../../graphql';
import { ReadAllSpotRequestResult } from '../../types';
import { isEmpty } from 'lodash';
import SpotAround from '../../components/spot-around/spot-around';
import SpotPopular from '../../components/spot-popular/spot-popular';
import DrawerSpotFilter from '../../components/drawer/drawer-spot-filter/drawer-spot-filter';

export const SpotExploreurPage = () => {
  const [filterData, setFilterData] = useState<FormValues | Object>({});
  const [searchInput, setSearchInput] = useState<string>('');
  const [revealed, setRevealed] = useState(true);
  const [searchSpots, { data, loading }] =
    useLazyQuery<ReadAllSpotRequestResult>(READ_SPOT_QUERY);

  const { isPhone, isTablette } = useMediaQuery();
  const style = useTheme(styles, { isPhone, isTablette });

  const handleReveledClick = () => {
    setRevealed((current) => !current);
  };

  const handleRequestChange = (
    formData: FormValues | Object,
    nameContains: string
  ) => {
    setRevealed(true);
    searchSpots({ variables: { ...formData, searchValue: nameContains } });
  };

  const handleFilterChange = useCallback(
    (formData: FormValues) => {
      handleRequestChange(formData, searchInput);
      setFilterData(formData);
    },
    [searchInput]
  );

  const handleSearchChange = useCallback(
    (searchValue: string) => {
      handleRequestChange(filterData, searchValue);
      setSearchInput(searchValue);
    },
    [filterData]
  );

  return (
    <PageLayout
      isAppBar={true}
      isBackground={false}
      isDrawer={true}
      isDrawerRevealed={revealed}
      isScrollable={true}
      direction={undefined}
      justify={undefined}
      align='center'
      pv={40}
      ph={16}
      drawerChildren={
        <DrawerSpotFilter
          filterData={filterData}
          onFilterChange={handleFilterChange}
          setRevealed={setRevealed}
        />
      }
    >
      <Box style={style.container}>
        <Typography style={style.title} variant='h5'>
          Let's Go !
        </Typography>
        <Typography style={style.subTitle}>
          Pars explorer les spots à ne pas manquer.
        </Typography>
        <SearchInput
          style={style.searchInput}
          onChange={handleSearchChange}
        />
        <IconButton
          name='sort-ascending'
          color='secondary'
          label='Filtrer'
          style={style.filterButton}
          onPress={handleReveledClick}
          isLoading={loading}
        />
        {searchInput.length < 1 && isEmpty(filterData) ? (
          <>
            <SpotAround />
            <SpotPopular />
          </>
        ) : (
          <SpotList data={data?.spots} isLoading={loading} />
        )}
      </Box>
    </PageLayout>
  );
};
