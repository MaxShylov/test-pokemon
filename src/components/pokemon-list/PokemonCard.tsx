import React, { type FC, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'antd/es/card/Card';

import { SkeletonPokemonImage } from 'src/components/skeleton-pokemon-image';
import { useElementOnScreen } from 'src/hooks/useElementOnScreen';
import { Path } from 'src/types';
import { capitalize } from 'src/utils/helpers/text';

import { PokemonCardCover } from './PokemonCardCover';

import styles from './PokemonCard.module.scss';

interface PokemonCardProps {
  name: string;
}

const classNames = { cover: styles.cover };

export const PokemonCard: FC<PokemonCardProps> = ({ name }) => {
  const navigate = useNavigate();

  const [ref, isVisible] = useElementOnScreen<HTMLDivElement>();

  const cover = useMemo(() => {
    if (!isVisible) return <SkeletonPokemonImage active />;

    return <PokemonCardCover name={name} />;
  }, [isVisible, name]);

  const handleClick = useCallback(() => navigate(`${Path.Pokemon}/${name}`), [name, navigate]);

  return (
    <Card ref={ref} classNames={classNames} cover={cover} hoverable onClick={handleClick}>
      <div className={styles.title}>{capitalize(name)}</div>
    </Card>
  );
};
