import React, { type FC } from 'react';

import SkeletonImage, { type SkeletonImageProps } from 'antd/es/skeleton/Image';

import styles from './SkeletonPokemonImage.module.scss';

type SkeletonPokemonImageProps = Pick<SkeletonImageProps, 'active'>;

export const SkeletonPokemonImage: FC<SkeletonPokemonImageProps> = ({ active }) => (
  <SkeletonImage active={active} rootClassName={styles.image} />
);
