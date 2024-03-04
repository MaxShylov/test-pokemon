import React, { type FC, useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'antd/es/card/Card';
import SkeletonImage from 'antd/es/skeleton/Image';

import { useElementOnScreen } from 'src/hooks/useElementOnScreen';
import { useLazyGetPokemonByNameQuery } from 'src/store/services/pokemon';
import { Path } from 'src/types';
import { capitalize } from 'src/utils/helpers/text';

import styles from './PokemonCard.module.scss';

interface PokemonCardProps {
  name: string;
}

const classNames = { cover: styles.cover };

export const PokemonCard: FC<PokemonCardProps> = ({ name }) => {
  const navigate = useNavigate();

  const [getData, { data }] = useLazyGetPokemonByNameQuery();

  const [ref, isVisible] = useElementOnScreen<HTMLDivElement>();

  const cover = useMemo(() => {
    if (!data?.image) return <SkeletonImage rootClassName={styles.skeletonImage} active />;

    return <img alt={name} src={data?.image} />;
  }, [data?.image, name]);

  const handleClick = useCallback(() => navigate(`${Path.Pokemon}/${name}`), [name, navigate]);

  useEffect(() => {
    if (isVisible && !data) getData(name);
  }, [data, getData, isVisible, name]);

  return (
    <Card ref={ref} classNames={classNames} cover={cover} hoverable onClick={handleClick}>
      <div className={styles.title}>{capitalize(name)}</div>
    </Card>
  );
};
