import React, { type FC } from 'react';

import SkeletonImage from 'antd/es/skeleton/Image';

import { useGetPokemonByNameQuery } from 'src/store/services/pokemon';

import styles from './PokemonCard.module.scss';

interface PokemonCardCoverProps {
  name: string;
}

export const PokemonCardCover: FC<PokemonCardCoverProps> = ({ name }) => {
  const { data } = useGetPokemonByNameQuery(name);

  if (!data?.image) return <SkeletonImage rootClassName={styles.skeletonImage} active />;

  return <img alt={name} src={data?.image} />;
};
