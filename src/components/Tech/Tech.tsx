import { CTechs, type TTech } from '@/models'
import styles from './tech.module.css'

interface IProps {
  name: TTech
}

export const Tech: React.FC<IProps> = ({ name }) => {
  return (
        <div className={styles.tech}>
            <div className={styles['tech__color-container']} style={{ backgroundColor: CTechs[name].color }} />
            <span className={styles.tech__title}>{CTechs[name].name}</span>
        </div>
  )
}

/*
import { CTechs, type TTech } from "@/models"

interface Props {
  name: TTech;
}

const { name } = Astro.props;
---

<div class="tech">
    <div class="tech__color-container" style=`background-color: ${CTechs[name].color} ;` />
    <span class="tech__title">{CTechs[name].name}</span>
</div>

<style>
    .tech {
        display: flex;
        gap: 0.2em;
        align-items: center;
    }

    .tech__title {
        line-height: 1em;
        font-size: 0.8em;
    }
    .tech__color-container {
        width: 0.85714285714em;
        height: 0.85714285714em;
        border: 0.1em solid var(--terceary-border-color);
        border-radius: 100%;
    }
</style> */
